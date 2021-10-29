import { useState, useEffect, useMemo } from 'react';
import { Grid } from '@mui/material';
import { useQuery } from '@apollo/client';
import { CollectionBanner, CollectionsFilter, Seo, CollectionList } from '~/components';
import { Divider, CardSkeletonLoader } from '~/base';
import { useBreakpoints } from '~/hooks';
import {
  GET_COLLECTION_BY_ID,
  GET_BALLERZ_NFTS_FOR_SALE,
  GET_BALLERZ_NFTS_FOR_SALE_COUNT
} from '~/store/server/queries';

import * as Styled from '~/styles/collection-name/styles';

const DATA = {
  mainColor: '#270b5a',
  secondaryColor: '#4814a6'
};

const BALLERZ_ID = 'db4ccc58-4398-4a66-87cd-5b0f6c6c21f3';

const DEFAULT_LIST_SIZE = 40;
const DEFAULT_SORT_VARIABLES = { priceSort: 'asc', mintSort: null };

const Collection = () => {
  const [cursor, setCursor] = useState(0);
  const [bannerData, setBannerData] = useState(null);
  const [sort, setSort] = useState(DEFAULT_SORT_VARIABLES);
  const { isMediumDevice } = useBreakpoints();

  const { data: dataFetch } = useQuery(GET_COLLECTION_BY_ID, {
    variables: { id: BALLERZ_ID }
  });

  useEffect(() => {
    if (!dataFetch) return;
    const [collectionData] = dataFetch.nft_collection;
    setBannerData({ ...collectionData, ...DATA });
  }, [dataFetch]);

  const handleLoadMore = () => {
    setCursor(prevState => prevState + 1);
  };

  const {
    loading: isLoadingCount,
    data: {
      nft_sale_offer_aggregate: {
        aggregate: { count }
      }
    } = {
      nft_sale_offer_aggregate: { aggregate: { count: 0 } }
    }
  } = useQuery(GET_BALLERZ_NFTS_FOR_SALE_COUNT, {
    variables: { id: BALLERZ_ID }
  });

  const cursorLimit = useMemo(() => Math.ceil(count / DEFAULT_LIST_SIZE) - 1, [count]);

  const {
    loading: isLoadingNFTs,
    data: { nft_sale_offer } = { nft_sale_offer: [] },
    fetchMore,
    refetch
  } = useQuery(GET_BALLERZ_NFTS_FOR_SALE, {
    variables: {
      id: BALLERZ_ID,
      limit: DEFAULT_LIST_SIZE,
      offset: 0,
      ...sort
    }
  });

  useEffect(() => {
    if (cursor) {
      fetchMore({
        variables: {
          id: BALLERZ_ID,
          limit: DEFAULT_LIST_SIZE,
          offset: cursor * DEFAULT_LIST_SIZE,
          ...sort
        }
      });
    }
  }, [cursor, sort]);

  const handleFilter = currentSort => {
    setCursor(0);
    refetch({
      id: BALLERZ_ID,
      limit: DEFAULT_LIST_SIZE,
      offset: 0,
      ...currentSort
    });
  };

  const loading = useMemo(() => isLoadingCount || isLoadingNFTs, [isLoadingNFTs, isLoadingCount]);

  return (
    <>
      <Seo title={bannerData?.name || ''} />
      <Grid>
        <CollectionBanner
          accountNumber={bannerData?.author}
          bannerName={bannerData?.name}
          bannerDescription={bannerData?.description}
          bgImg={bannerData?.image}
          mainColor={bannerData?.mainColor}
          secondaryColor={bannerData?.secondaryColor}
        />
        <Styled.Container>
          <Grid sx={{ margin: '24px 0' }}>
            <CollectionsFilter nftQuantity={count} setSort={setSort} handleFilter={handleFilter} />
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
              <CollectionList nfts={nft_sale_offer} />
            )}
          </Grid>
          {cursorLimit > cursor && !loading && (
            <Grid container justifyContent="center" align="center" sx={{ margin: '32px 0 0' }}>
              <Styled.BlackButton onClick={handleLoadMore}>Load More</Styled.BlackButton>
            </Grid>
          )}
        </Styled.Container>
      </Grid>
    </>
  );
};

export default Collection;
