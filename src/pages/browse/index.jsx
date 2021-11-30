import { Grid } from '@mui/material';
import { useState, useMemo } from 'react';

import CardSkeletonLoader from '~/base/card-skeleton-loader';
import { BrowseHeader, Filters, BrowseCard, Seo } from '~/components';
import { useBreakpoints } from '~/hooks';
import { useAppContext } from '~/context';

import * as Styled from '~/styles/browse-page/styles';

const DEFAULT_LIST_SIZE = 40;

const Browse = () => {
  const [showFilter, setShowFilter] = useState(true);
  const [orderByUpdate, setOrderByUpdate] = useState(null);
  const [cursor, setCursor] = useState(0);

  const { isMediumDevice } = useBreakpoints();

  const {
    appData: { marketplaceLoading, marketplaceNfts }
  } = useAppContext();

  const handleShowFilters = () => {
    setShowFilter(prevState => !prevState);
  };

  const handleOrderByUpdate = () => {
    setOrderByUpdate(prevState => !prevState);
  };

  const cursorLimit = useMemo(
    () => Math.ceil(marketplaceNfts?.length / DEFAULT_LIST_SIZE) - 1,
    [marketplaceNfts]
  );

  const handleLoadMore = () => {
    setCursor(prevState => prevState + 1);
  };

  const paginatedList = useMemo(() => {
    if (marketplaceNfts?.length) {
      const list = [...marketplaceNfts];
      return list?.splice(0, DEFAULT_LIST_SIZE * (cursor + 1));
    }
    return [];
  }, [marketplaceNfts, cursor]);

  return (
    <>
      <Seo title="Browse All NFTs" />
      <BrowseHeader
        handleShowFilters={handleShowFilters}
        showFilter={showFilter}
        orderByUpdate={orderByUpdate}
        handleOrderByUpdate={handleOrderByUpdate}
        totalShowing={marketplaceNfts?.length}
      />
      <Grid container alignItems="center" mt={isMediumDevice && '24px'} sx={{ minHeight: 350 }}>
        <Styled.Container>
          {!!showFilter && <Filters orderByUpdate={orderByUpdate} />}
          <Grid
            sx={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignContent: 'baseline'
            }}>
            {marketplaceLoading
              ? new Array(5).fill(null).map((_, index) => <CardSkeletonLoader key={index} />)
              : paginatedList?.map(nft => <BrowseCard key={nft.asset_id} data={nft} />)}
          </Grid>
        </Styled.Container>
      </Grid>
      {cursorLimit > cursor && (
        <Grid container justifyContent="center" align="center" sx={{ margin: '32px 0 0' }}>
          <Styled.BlackButton onClick={handleLoadMore}>Load More</Styled.BlackButton>
        </Grid>
      )}
    </>
  );
};

export default Browse;
