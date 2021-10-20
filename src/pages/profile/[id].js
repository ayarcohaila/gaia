/* eslint-disable no-unused-vars */
import { useMemo, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSubscription } from '@apollo/react-hooks';
import { Grid, Box } from '@mui/material';

import { ProfileBanner, NFTList, CollectionsFilter, Seo } from '~/components';
import { Divider, CardSkeletonLoader } from '~/base';
import { GET_MY_NFTS_BY_OWNER } from '~/store/server/subscriptions';
import basicAuthCheck from '~/utils/basicAuthCheck';
import { useSWR, useBreakpoints } from '~/hooks';

import * as Styled from '~/styles/profile/styles';

const Profile = () => {
  const router = useRouter();
  const { id } = router.query;
  const [searchQuery, setSearchQuery] = useState('');
  const [assets, setAssets] = useState([]);
  const { isMediumDevice } = useBreakpoints();

  //TODO: Remove fakeNfts on integration
  const [cursor, setCursor] = useState(1);
  const [nftList, setNftList] = useState([]);
  const { data: fakeNfts, loading } = useSWR('/templates/templates.json');

  const handleLoadMore = () => {
    setCursor(prevState => prevState + 1);
  };

  useEffect(() => {
    if (fakeNfts?.length) {
      setNftList(fakeNfts.slice(0, cursor * 40));
    }
  }, [fakeNfts?.length, cursor]);

  useEffect(() => {
    setAssets(fakeNfts);
  }, []);

  const cursorLimit = useMemo(() => Math.ceil(fakeNfts?.length / 40), [fakeNfts]);

  return (
    <Box>
      <Seo title="Profile" />
      <ProfileBanner address={id} />
      <Styled.FiltersContainer>
        <CollectionsFilter nftQuantity={fakeNfts?.length} enableSearch onSearch={setSearchQuery} />
        <Divider hidden={isMediumDevice} customProps={{ marginTop: '24px' }} />
      </Styled.FiltersContainer>
      <Styled.ListWrapper>
        {loading ? (
          new Array(isMediumDevice ? 1 : 5)
            .fill(null)
            .map((_, index) => <CardSkeletonLoader key={index} />)
        ) : (
          <NFTList nfts={nftList} />
        )}
      </Styled.ListWrapper>
      {cursorLimit > cursor && !loading && (
        <Grid container justifyContent="center" align="center" sx={{ margin: '32px 0 64px' }}>
          <Styled.BlackButton onClick={handleLoadMore}>Load more NFTS</Styled.BlackButton>
        </Grid>
      )}
    </Box>
  );
};

export default Profile;
export async function getServerSideProps(ctx) {
  const { req, res } = ctx;
  await basicAuthCheck(req, res);

  return {
    props: {}
  };
}
