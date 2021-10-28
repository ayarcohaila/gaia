/* eslint-disable no-unused-vars */
import { useMemo, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Grid, Box } from '@mui/material';
import { useQuery } from '@apollo/client';

import { ProfileBanner, ProfileList, CollectionsFilter, Seo } from '~/components';
import { Divider, CardSkeletonLoader } from '~/base';
import { GET_NFTS_BY_ADDRESS } from '~/store/server/queries';
import basicAuthCheck from '~/utils/basicAuthCheck';
import { useBreakpoints } from '~/hooks';

import * as Styled from '~/styles/profile/styles';

const Profile = () => {
  const router = useRouter();
  const { id: address } = router.query;
  const [searchQuery, setSearchQuery] = useState('');
  const [assets, setAssets] = useState([]);
  const { isMediumDevice } = useBreakpoints();

  const [cursor, setCursor] = useState(1);
  const [nftList, setNftList] = useState([]);

  const {
    data: dataFetch,
    loading,
    refetch
  } = useQuery(GET_NFTS_BY_ADDRESS, {
    variables: { address }
  });

  const handleLoadMore = () => {
    setCursor(prevState => prevState + 1);
  };

  useEffect(() => {
    if (dataFetch?.nft?.length) {
      setNftList(dataFetch.nft.slice(0, cursor * 40));
    }
  }, [dataFetch?.nft?.length, cursor]);

  useEffect(() => {
    setAssets(dataFetch);
  }, []);

  const cursorLimit = useMemo(() => Math.ceil(dataFetch?.length / 40), [dataFetch]);

  const handleRefetch = () => {
    refetch({
      variables: { address }
    });
  };

  return (
    <Box>
      <Seo title="Profile" />
      <ProfileBanner address={address} />
      <Styled.FiltersContainer>
        <CollectionsFilter
          nftQuantity={dataFetch?.nft?.length}
          enableSearch
          onSearch={setSearchQuery}
        />
        <Divider hidden={isMediumDevice} customProps={{ marginTop: '24px' }} />
      </Styled.FiltersContainer>
      <Styled.ListWrapper>
        {loading ? (
          new Array(isMediumDevice ? 1 : 5)
            .fill(null)
            .map((_, index) => <CardSkeletonLoader key={index} />)
        ) : (
          <ProfileList nfts={nftList} refetchNfts={handleRefetch} />
        )}
      </Styled.ListWrapper>
      {cursorLimit > cursor && !loading && (
        <Grid container justifyContent="center" align="center" sx={{ margin: '32px 0 64px' }}>
          <Styled.BlackButton onClick={handleLoadMore}>Load More</Styled.BlackButton>
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
