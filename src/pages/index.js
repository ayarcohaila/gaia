import { Box } from '@mui/material';

import NewToNFTSection from '~/components/newToNFTSection';
import HomepageBanner from '~/components/homepageBanner';
import Seo from '~/components/seo';
import useBreakpoints from '~/hooks/useBreakpoints';
import UpcomingSection from '~/components/upcomingSection';
import {
  UPCOMING_COLLECTIONS,
  COMING_STATUS,
  COLLECTION_LIST_CONFIG,
  OTHER_COLLECTIONS
} from '../../collections_setup';
import {
  GET_LOWER_NFT_PRICE_BY_COLLECTION,
  GET_LOWER_NFT_PRICE_BY_COLLECTIONS
} from '~/store/server/queries';
import { gqlClient } from '~/config/apolloClient';

const Home = props => {
  const { upcomingCollections, othersCollections } = props;
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
          <UpcomingSection collections={upcomingCollections} />
          <NewToNFTSection collections={othersCollections} />
        </Box>
      </Box>
    </>
  );
};

export async function getServerSideProps() {
  const upcomingCollections = Object.values(UPCOMING_COLLECTIONS).map(collection => ({
    config: collection,
    lowerPrice: null
  }));

  const othersCollections = Object.values(OTHER_COLLECTIONS).map(collection => ({
    config: collection,
    lowerPrice: null
  }));

  const collectionIds = [...upcomingCollections, ...othersCollections]
    .filter(c => c.config.comingStatus !== COMING_STATUS.COMING_SOON)
    .map(c => c.config.id);

  const lowerPricePerCollectionResponse = await gqlClient.request(
    GET_LOWER_NFT_PRICE_BY_COLLECTIONS,
    {
      collection_ids: collectionIds
    }
  );

  const lowerPricePerCollection = lowerPricePerCollectionResponse.nft_collection;
  lowerPricePerCollection.forEach(collection => {
    let index = upcomingCollections.findIndex(c => c.config.id === collection.id);
    if (index !== -1) {
      upcomingCollections[index].lowerPrice = collection.nfts[0].last_active_price;
      return;
    }

    index = othersCollections.findIndex(c => c.config.id === collection.id);
    if (index !== -1) {
      othersCollections[index].lowerPrice = collection.nfts[0].last_active_price;
    }
  });

  return { props: { upcomingCollections, othersCollections } };
}

export default Home;
