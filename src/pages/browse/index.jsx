import { Grid, Typography, useTheme } from '@mui/material';
import { useState, useMemo } from 'react';

import CardSkeletonLoader from '~/base/card-skeleton-loader';
import { BrowseHeader, Filters, BrowseCard, Seo } from '~/components';
import { useAppContext } from '~/context';
import { FILTERS, FILTERS_TYPES, FILTERS_IDS } from '~/utils/browseFilters';

import { useBreakpoints } from '~/hooks';
import { hasBrowse } from '~/config/config';
import { MARKETPLACE_TITLE } from '~/layout/header/constants';
import * as Styled from '~/styles/browse-page/styles';

const Browse = ({ filters, filtersTypes, filtersIds }) => {
  const [showFilter, setShowFilter] = useState(true);
  const { isMediumDevice } = useBreakpoints();

  const {
    palette: { grey }
  } = useTheme();

  const {
    appData: { page, marketCount, marketplaceLoading, marketplaceNfts },
    handleAppData
  } = useAppContext();

  const handleShowFilters = () => {
    setShowFilter(prevState => !prevState);
  };

  const handleLoadMore = () => {
    handleAppData({ page: page + 1 });
  };

  const renderList = useMemo(() => {
    if (marketplaceLoading) {
      return new Array(5).fill(null).map((_, index) => <CardSkeletonLoader key={index} />);
    }

    return marketplaceNfts?.length ? (
      marketplaceNfts?.map(nft => <BrowseCard key={nft.asset_id} data={nft} />)
    ) : (
      <Grid sx={{ width: '100%', textAlign: 'center', marginTop: '96px' }}>
        <Typography variant="body" sx={{ fontSize: '20px', width: '100%', color: grey[600] }}>
          No results found.
        </Typography>
      </Grid>
    );
  }, [marketplaceNfts, marketplaceLoading]);

  return (
    <>
      <Seo title={MARKETPLACE_TITLE} />
      <BrowseHeader
        handleShowFilters={handleShowFilters}
        showFilter={showFilter}
        totalShowing={marketplaceNfts?.length}
        available={marketCount || 0}
      />
      <Styled.Wrapper container alignItems="center" showFilter={showFilter} sx={{ minHeight: 350 }}>
        <Filters
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
            width: !showFilter || isMediumDevice ? '100%' : 'auto'
          }}>
          {renderList}
        </Grid>
      </Styled.Wrapper>
      {marketCount > marketplaceNfts?.length && (
        <Grid container justifyContent="center" align="center" sx={{ margin: '32px 0 0' }}>
          <Styled.BlackButton onClick={handleLoadMore}>Load More</Styled.BlackButton>
        </Grid>
      )}
    </>
  );
};

export async function getServerSideProps() {
  return {
    notFound: !hasBrowse,
    props: {
      filters: FILTERS,
      filtersTypes: FILTERS_TYPES,
      filtersIds: FILTERS_IDS
    }
  };
}

export default Browse;
