import { useState, useEffect, useMemo } from 'react';
import { Grid } from '@mui/material';
import { useSubscription } from '@apollo/react-hooks';

import { CollectionBanner, CollectionsFilter, Seo, NFTList } from '~/components';
import { Divider, CardSkeletonLoader } from '~/base';
import { useSWR, useBreakpoints } from '~/hooks';
import { GET_COLLECTION_BY_NAME } from '~/store/server/queries';

import * as Styled from '~/styles/collection-name/styles';

const DATA = {
  mainColor: '#270b5a',
  secondaryColor: '#4814a6'
};

const Collection = () => {
  const [cursor, setCursor] = useState(1);
  const [nftList, setNftList] = useState([]);
  const [bannerData, setBannerData] = useState(null);
  const { isMediumDevice } = useBreakpoints();

  const { data: dataFetch, loading: dataFetchLoading } = useSubscription(GET_COLLECTION_BY_NAME, {
    variables: { id: 'b328974a-bb62-48b8-8c82-b42fd35dec76' }
  });

  const { data, loading } = useSWR('/templates/templates.json');

  useEffect(() => {
    if (!dataFetch) return;
    const [collectionData] = dataFetch.nft_collection;

    setBannerData({ ...collectionData, ...DATA });
  }, [dataFetch]);

  useEffect(() => {
    if (data?.length) {
      setNftList(data.slice(0, cursor * 40));
    }
  }, [data?.length, cursor]);

  const handleLoadMore = () => {
    setCursor(prevState => prevState + 1);
  };
  const cursorLimit = useMemo(() => Math.ceil(data?.length / 40), [data]);

  return (
    <>
      <Seo title={`${bannerData?.name} NFT Collection`} />
      <Grid>
        <CollectionBanner
          dataFetchLoading={dataFetchLoading}
          accountNumber={bannerData?.author}
          bannerName={bannerData?.name}
          bannerDescription={bannerData?.description}
          bgImg={bannerData?.image}
          mainColor={bannerData?.mainColor}
          secondaryColor={bannerData?.secondaryColor}
        />
        <Styled.Container>
          <Grid sx={{ margin: '24px 0' }}>
            <CollectionsFilter nftQuantity={data?.length} setNftList={setNftList} />
          </Grid>
          <Divider sx={{ marginBottom: '32px' }} />
          <Grid sx={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {loading ? (
              <>
                {new Array(isMediumDevice ? 1 : 5).fill(null).map((_, index) => (
                  <CardSkeletonLoader key={index} />
                ))}
              </>
            ) : (
              <NFTList nfts={nftList} />
            )}
          </Grid>
          {cursorLimit > cursor && !loading && (
            <Grid container justifyContent="center" align="center" sx={{ margin: '32px 0 64px' }}>
              <Styled.BlackButton onClick={handleLoadMore}>Load more NFTS</Styled.BlackButton>
            </Grid>
          )}
        </Styled.Container>
      </Grid>
    </>
  );
};
export default Collection;
