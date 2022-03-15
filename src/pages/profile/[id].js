import { useMemo } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import useBreakpoints from '~/hooks/useBreakpoints';
import { gqlClient } from '~/config/apolloClient';
import basicAuthCheck from '~/utils/basicAuthCheck';
import { GET_NFTS_BY_ADDRESS } from '~/store/server/queries';
import { COLLECTION_LIST_CONFIG } from '~/../collections_setup';
import formatIpfsImg from '~/utils/formatIpfsImg';
import ProfileBanner from '~/components/profileBanner';
import ProfileTabs from '~/components/profileTabs';
import CollectionsFilter from '~/components/collectionFilters';
import Seo from '~/components/seo';
import { SEO_DATA } from '~/constant';
import Button from '~/base/button';

import * as Styled from '~/styles/profile/styles';

const Profile = ({ userNFTs }) => {
  const router = useRouter();

  const { id: address } = router.query;
  const { isMediumDevice } = useBreakpoints();

  const profileDescription = useMemo(
    () => SEO_DATA.description.profile.replace('$WALLET', address),
    [SEO_DATA.description.profile]
  );

  return (
    <Box component="section">
      <Seo title={SEO_DATA.title.profile} description={profileDescription} />
      <ProfileBanner address={address} />
      <ProfileTabs nfts={userNFTs} />
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
