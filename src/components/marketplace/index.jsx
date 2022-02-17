import { Grid } from '@mui/material';
import dynamic from 'next/dynamic';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import CardSkeletonLoader from '~/base/cardSkeletonLoader';
import BrowseHeader from '~/components/browseHeader';
import Filters from '~/components/filters';
import { FILTERS, FILTERS_IDS, FILTERS_TYPES } from '~/components/filters/browseFilters';
import COLLECTION_LIST_CONFIG from 'collections_setup';
import { hasSneakerzSell } from '~/config/config';
import { useAppContext } from '~/context/appProvider';
import useBreakpoints from '~/hooks/useBreakpoints';
import * as Styled from './styles';

const Card = dynamic(() => import('~/components/card'));

const MarketPlace = () => {
  const [showFilter, setShowFilter] = useState(true);
  const { isMediumDevice } = useBreakpoints();

  const parsedFilter = FILTERS.map(filter => {
    if (filter.id === FILTERS_IDS.COLLECTIONS) {
      return {
        ...filter,
        options: filter.options.filter(option => {
          if (option.id === COLLECTION_LIST_CONFIG.sneakerz.id) {
            return hasSneakerzSell;
          } else {
            return true;
          }
        })
      };
    }
    return filter;
  });

  const {
    appData: { page, marketCount, marketplaceLoading, marketplaceNfts, cardRef, imgRef },
    handleAppData
  } = useAppContext();

  useEffect(() => {
    // This is to prevent the miss ordination when the user come back from some collections page
    handleAppData({
      marketplaceSort: { last_active_price: 'asc' },
      page: 0,
      marketplaceNfts: []
    });
  }, []);

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
  }, [marketplaceLoading, imgRef]);

  const handleScrollPosition = useCallback(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const elementRef = document?.getElementById(`${cardRef}`);
    if (elementRef) {
      if (isSafari) {
        elementRef.scrollIntoView();
      } else {
        elementRef.scrollIntoView({ block: 'start' });
      }
    }
  }, [cardRef]);

  const setPosition = id => {
    handleAppData({ cardRef: `card-${id}`, imgRef: id });
  };

  const renderList = useMemo(() => {
    if (marketplaceLoading) {
      return new Array(5).fill(null).map((_, index) => <CardSkeletonLoader key={index} />);
    }

    return marketplaceNfts?.map(nft => (
      <Card key={nft.asset_id} data={nft} hasPrice setPosition={setPosition} />
    ));
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
          filters={parsedFilter}
          filtersTypes={FILTERS_TYPES}
          filtersIds={FILTERS_IDS}
          showFilter={showFilter}
        />

        {marketplaceLoading || marketplaceNfts?.length ? (
          <Styled.GridRenderList showFilter={showFilter} isMediumDevice={isMediumDevice}>
            {renderList}
          </Styled.GridRenderList>
        ) : (
          <Styled.GridResultNotFound>
            <Styled.TypographyResultNotFound variant="body">
              No results found.
            </Styled.TypographyResultNotFound>
          </Styled.GridResultNotFound>
        )}
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
