import React, { useMemo, useState } from 'react';
import { Grid } from '@mui/material';
import dynamic from 'next/dynamic';

import Filters from '~/components/filters';
import BrowseHeader from '~/components/browseHeader';
import CardSkeletonLoader from '~/base/cardSkeletonLoader';
import { useAppContext } from '~/context/appProvider';
import useBreakpoints from '~/hooks/useBreakpoints';
import { FILTERS, FILTERS_TYPES, FILTERS_IDS } from '~/components/filters/browseFilters';

const Card = dynamic(() => import('~/components/card'));

import * as Styled from './styles';

const MarketPlace = () => {
  const [showFilter, setShowFilter] = useState(true);
  const { isMediumDevice } = useBreakpoints();

  const {
    appData: { page, marketCount, marketplaceLoading, marketplaceNfts },
    handleAppData
  } = useAppContext();

  const handleShowFilters = () => {
    setShowFilter(prevState => !prevState);
  };

  const handleLoadMore = () => {
    handleAppData({ page: page + 1, loadMore: true });
  };

  const renderList = useMemo(() => {
    if (marketplaceLoading) {
      return new Array(5).fill(null).map((_, index) => <CardSkeletonLoader key={index} />);
    }

    return marketplaceNfts?.length ? (
      marketplaceNfts?.map(nft => <Card key={nft.asset_id} data={nft} isMarketplace />)
    ) : (
      <Styled.GridResultNotFound>
        <Styled.TypographyResultNotFound variant="body">
          No results found.
        </Styled.TypographyResultNotFound>
      </Styled.GridResultNotFound>
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
      <Styled.Wrapper showFilter={showFilter}>
        <Filters
          filters={FILTERS}
          filtersTypes={FILTERS_TYPES}
          filtersIds={FILTERS_IDS}
          showFilter={showFilter}
        />
        <Styled.GridRenderList showFilter={showFilter} isMediumDevice={isMediumDevice}>
          {renderList}
        </Styled.GridRenderList>
      </Styled.Wrapper>
      {marketCount > marketplaceNfts?.length && !!marketplaceNfts?.length && (
        <Styled.GridLoadMore>
          <Styled.BlackButton onClick={handleLoadMore}>Load More</Styled.BlackButton>
        </Styled.GridLoadMore>
      )}
    </Grid>
  );
};

export default React.memo(MarketPlace);
