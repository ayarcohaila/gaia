import React, { useMemo, useState } from 'react';
import { Grid, Typography, useTheme } from '@mui/material';

import { BrowseCard, Filters, BrowseHeader } from '~/components';
import { CardSkeletonLoader } from '~/base';
import { useAppContext } from '~/context';
import { useBreakpoints } from '~/hooks';

import { FILTERS, FILTERS_TYPES, FILTERS_IDS } from '~/components/filters/browseFilters';

import * as Styled from './styles';

const MarketPlace = () => {
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
    <Grid>
      <BrowseHeader
        handleShowFilters={handleShowFilters}
        showFilter={showFilter}
        totalShowing={marketplaceNfts?.length}
        available={marketCount || 0}
        withBorder={false}
      />
      <Styled.Wrapper container alignItems="center" showFilter={showFilter} sx={{ minHeight: 350 }}>
        <Filters
          filters={FILTERS}
          filtersTypes={FILTERS_TYPES}
          filtersIds={FILTERS_IDS}
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
    </Grid>
  );
};

export default React.memo(MarketPlace);
