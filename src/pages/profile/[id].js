/* eslint-disable no-unused-vars */
import { useMemo, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Grid, Box } from '@mui/material';
import { gqlClient } from '~/config/apollo-client';

import { ProfileBanner, ProfileList, CollectionsFilter, Seo } from '~/components';

import { Divider } from '~/base';
import { GET_NFTS_BY_ADDRESS } from '~/store/server/queries';
import basicAuthCheck from '~/utils/basicAuthCheck';
import { useBreakpoints } from '~/hooks';

import * as Styled from '~/styles/profile/styles';

const DEFAULT_LIST_SIZE = 40;

const Profile = ({ userNFTs }) => {
  const router = useRouter();
  const { id: address } = router.query;
  const [searchQuery, setSearchQuery] = useState('');
  const { isMediumDevice } = useBreakpoints();

  const [cursor, setCursor] = useState(0);
  const [nftList, setNftList] = useState([]);

  useEffect(() => {
    const list = [...userNFTs];
    setNftList(list?.splice(0, DEFAULT_LIST_SIZE));
  }, []);

  useEffect(() => {
    if (cursor) {
      const list = [...userNFTs];
      setNftList(list?.splice(0, DEFAULT_LIST_SIZE * (cursor + 1)));
    }
  }, [cursor]);

  const handleLoadMore = () => {
    setCursor(prevState => prevState + 1);
  };

  const cursorLimit = useMemo(() => {
    return Math.ceil(userNFTs.length / DEFAULT_LIST_SIZE) - 1;
  }, [userNFTs]);

  return (
    <Box>
      <Seo title="Profile" />
      <ProfileBanner address={address} />
      <Styled.FiltersContainer>
        <CollectionsFilter nftQuantity={userNFTs.length} enableSearch onSearch={setSearchQuery} />
        <Divider hidden={isMediumDevice} customProps={{ marginTop: '24px' }} />
      </Styled.FiltersContainer>
      <Styled.ListWrapper>
        <ProfileList nfts={nftList} refetchNfts={() => {}} />
      </Styled.ListWrapper>
      {cursorLimit > cursor && (
        <Grid container justifyContent="center" align="center" sx={{ margin: '32px 0 64px' }}>
          <Styled.BlackButton onClick={handleLoadMore}>Load More</Styled.BlackButton>
        </Grid>
      )}
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

  const { nft: userNFTs } = await gqlClient.request(GET_NFTS_BY_ADDRESS, { address: id });

  return {
    props: { userNFTs }
  };
}
export default Profile;
