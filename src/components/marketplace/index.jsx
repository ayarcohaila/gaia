import { Grid } from '@mui/material';
import dynamic from 'next/dynamic';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import CardSkeletonLoader from '~/base/cardSkeletonLoader';
import BrowseHeader from '~/components/browseHeader';
import Filters from '~/components/filters';
import { FILTERS, FILTERS_IDS, FILTERS_TYPES } from '~/components/filters/browseFilters';
import { useAppContext } from '~/context/appProvider';
import useBreakpoints from '~/hooks/useBreakpoints';
import * as Styled from './styles';

const Card = dynamic(() => import('~/components/card'));

const MarketPlace = () => {
  const [showFilter, setShowFilter] = useState(true);
  const { isMediumDevice } = useBreakpoints();

  const {
    appData: { page, marketCount, marketplaceLoading, marketplaceNfts, cardRef, imgRef },
    handleAppData
  } = useAppContext();

  const handleShowFilters = () => {
    setShowFilter(prevState => !prevState);
  };

  const handleLoadMore = () => {
    handleAppData({ page: page + 1, loadMore: true });
  };

  useEffect(() => {
    if (!marketplaceLoading && imgRef) {
      handleScrollPosition();
    }
    if (!imgRef) {
      window.scrollTo(0, 0);
    }
  }, [marketplaceLoading, imgRef]);

  const handleScrollPosition = useCallback(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const elementRef = document?.getElementById(`${cardRef}`);
    if (isSafari) {
      elementRef.scrollIntoView();
    } else {
      elementRef.scrollIntoView({ block: 'start' });
    }
  }, [cardRef]);

  const setPosition = id => {
    handleAppData({ cardRef: `card-${id}`, imgRef: id });
  };

  const renderList = useMemo(() => {
    if (marketplaceLoading) {
      return new Array(5).fill(null).map((_, index) => <CardSkeletonLoader key={index} />);
    }

    return marketplaceNfts?.length ? (
      marketplaceNfts?.map(nft => (
        <Card key={nft.asset_id} data={nft} hasPrice setPosition={setPosition} />
      ))
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
