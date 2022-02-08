import { useMemo, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import useBreakpoints from '~/hooks/useBreakpoints';
import { gqlClient } from '~/config/apolloClient';
import basicAuthCheck from '~/utils/basicAuthCheck';
import Divider from '~/base/divider';
import { GET_NFTS_BY_ADDRESS, GET_NFL_NFTS_BY_ADDRESS } from '~/store/server/queries';
import { COLLECTION_LIST_CONFIG } from '~/../collections_setup';
import formatIpfsImg from '~/utils/formatIpfsImg';
import ProfileBanner from '~/components/profileBanner';
import ProfileList from '~/components/profileList';
import CollectionsFilter from '~/components/collectionFilters';
import Seo from '~/components/seo';
import { SEO_DATA } from '~/constant';
import Button from '~/base/button';

import * as Styled from '~/styles/profile/styles';

const Profile = ({ userNFTs }) => {
  const router = useRouter();
  const [numProfileNfts, setNumProfileNfts] = useState(0);

  const handleClick = () => {
    router.push('/browse');
  };
  const { id: address } = router.query;
  const { isMediumDevice } = useBreakpoints();

  const profileDescription = useMemo(
    () => SEO_DATA.description.profile.replace('$WALLET', address),
    [SEO_DATA.description.profile]
  );

  return (
    <Box>
      <Seo title={SEO_DATA.title.profile} description={profileDescription} />
      <ProfileBanner address={address} />
      <Styled.FiltersContainer>
        <CollectionsFilter nftQuantity={userNFTs?.length + numProfileNfts} enableSearch isProfile />
      </Styled.FiltersContainer>
      <ProfileList nfts={userNFTs} onQuantityChanged={qty => setNumProfileNfts(qty)} />
    </Box>
  );
};

export async function getServerSideProps(ctx) {
  const {
    req,
    res,
    query: { id }
  } = ctx;
  await basicAuthCheck(req, res);

  const collections = Object.values(COLLECTION_LIST_CONFIG).map(item => ({
    collection_id: { _eq: item.id }
  }));

  const { nft: userNFTs } = await gqlClient.request(GET_NFTS_BY_ADDRESS, {
    address: id,
    collections
  });

  const parseDBInput = list => {
    return list.map(nft => {
      const currentCollection = Object.values(COLLECTION_LIST_CONFIG).find(
        item => item.id === nft.collection_id
      );
      return {
        ...nft,
        id:
          nft.collection_id === COLLECTION_LIST_CONFIG.shareef.id
            ? nft.asset_id
            : nft.template.metadata.id || nft.mint_number,
        name: nft.template.metadata.title,
        imageURL: formatIpfsImg(nft.template.metadata.img),
        videoURL: formatIpfsImg(nft.template.metadata?.video),
        collection_name: currentCollection.collectionName,
        collection_picture: currentCollection.avatar
      };
    });
  };

  return {
    props: { userNFTs: parseDBInput(userNFTs) }
  };
}
export default Profile;
