import { Box } from '@mui/material';

import NewToNFTSection from '~/components/newToNFTSection';
import HomepageBanner from '~/components/homepageBanner';
import Seo from '~/components/seo';
import useBreakpoints from '~/hooks/useBreakpoints';
import UpcomingSection from '~/components/upcomingSection';
import { UPCOMING_COLLECTIONS, COMING_STATUS } from '../../collections_setup';
import { GET_LOWER_NFT_PRICE_BY_COLLECTION } from '~/store/server/queries';
import { gqlClient } from '~/config/apolloClient';

const Home = props => {
  const { collections } = props;
  const { isMediumDevice, isLargeDevice, isSmallDevice } = useBreakpoints();
  const padding = isSmallDevice ? 0 : isMediumDevice ? '12px' : isLargeDevice ? '32px' : '2.2%';
  return (
    <>
      <Seo />
      <Box
        paddingLeft={isSmallDevice && '13px'}
        paddingRight={isSmallDevice && '13px'}
        display="flex"
        alignItems="center"
        justifyContent="center">
        <Box paddingLeft={padding} paddingRight={padding} maxWidth="1800px" width="100%">
          <HomepageBanner />
          <UpcomingSection collections={collections} />
          <NewToNFTSection />
        </Box>
      </Box>
    </>
  );
};

export async function getServerSideProps() {
  const comingCollectionsWithNfts = Object.values(UPCOMING_COLLECTIONS)
    .map(collection => collection)
    .filter(collection => collection.comingStatus !== COMING_STATUS.COMING_SOON);

  const comingSoonCollections = Object.values(UPCOMING_COLLECTIONS).filter(
    collection => collection.comingStatus === COMING_STATUS.COMING_SOON
  );

  const nftsPromise = comingCollectionsWithNfts.map(async collection => {
    const promise = gqlClient.request(GET_LOWER_NFT_PRICE_BY_COLLECTION, {
      collection_id: collection.id
    });

    return promise;
  });

  const allPromise = await (await Promise.all(nftsPromise)).filter(nft => nft !== null);
  const collectionsWithNftMapped = comingCollectionsWithNfts.map((collection, index) => {
    return {
      config: collection,
      nft: allPromise[index].nft[0]
    };
  });

  const comingSoonCollectionsMapped = comingSoonCollections.map(c => ({ config: c, nft: 0 }));

  const collections = [...collectionsWithNftMapped, ...comingSoonCollectionsMapped];
  return { props: { collections } };
}

export default Home;
