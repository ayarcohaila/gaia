import { Grid, Typography, useTheme } from '@mui/material';
import { useState, useMemo } from 'react';

import CardSkeletonLoader from '~/base/card-skeleton-loader';
import { BrowseHeader, Filters, BrowseCard, Seo } from '~/components';
import { useAppContext } from '~/context';
import { FILTERS, FILTERS_TYPES, FILTERS_IDS } from '~/utils/browseFilters';

import * as Styled from '~/styles/browse-page/styles';

const DEFAULT_LIST_SIZE = 40;

const Browse = ({ filters, filtersTypes, filtersIds }) => {
  const [showFilter, setShowFilter] = useState(true);
  const [orderByUpdate, setOrderByUpdate] = useState(null);
  const [cursor, setCursor] = useState(0);

  const {
    palette: { grey }
  } = useTheme();

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

  const renderList = useMemo(() => {
    if (marketplaceLoading) {
      return new Array(5).fill(null).map((_, index) => <CardSkeletonLoader key={index} />);
    }

    return paginatedList.length ? (
      paginatedList?.map(nft => <BrowseCard key={nft.asset_id} data={nft} />)
    ) : (
      <Grid sx={{ width: '100%', textAlign: 'center', marginTop: '96px' }}>
        <Typography variant="body" sx={{ fontSize: '20px', width: '100%', color: grey[600] }}>
          No results found.
        </Typography>
      </Grid>
    );
  }, [marketplaceLoading]);
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
      <Styled.Wrapper container alignItems="center" showFilter={showFilter} sx={{ minHeight: 350 }}>
        <Filters
          orderByUpdate={orderByUpdate}
          filters={filters}
          filtersTypes={filtersTypes}
          filtersIds={filtersIds}
          showFilter={showFilter}
        />
        <Grid
          sx={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignContent: 'baseline',
            width: !showFilter ? '100%' : 'auto'
          }}>
          {renderList}
        </Grid>
      </Styled.Wrapper>
      {cursorLimit > cursor && (
        <Grid container justifyContent="center" align="center" sx={{ margin: '32px 0 0' }}>
          <Styled.BlackButton onClick={handleLoadMore}>Load More</Styled.BlackButton>
        </Grid>
      )}
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: { filters: FILTERS, filtersTypes: FILTERS_TYPES, filtersIds: FILTERS_IDS }
  };
}

export default Browse;
