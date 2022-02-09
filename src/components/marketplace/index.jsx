import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Grid } from '@mui/material';
import dynamic from 'next/dynamic';

import {
  FILTERS,
  FILTERS_IDS,
  FILTERS_TYPES
} from '~/components/filters/filtersDefault/browseFilters';

import CardSkeletonLoader from '~/base/cardSkeletonLoader';
import CardFill from '~/components/cards/cardCollection/cardFill';
import BrowseHeader from '~/components/browseHeader';
import { useAppContext } from '~/context/appProvider';
import { COLLECTIONS_NAME } from 'collections_setup';
import useBreakpoints from '~/hooks/useBreakpoints';
import CardFilled from '~/components/cards/cardCollection';
import Filters from '~/components/filters/filtersDefault';
import FiltersNFL from '~/components/filters/filtersNfl';

import * as Styled from './styles';
import CardTemplate from '../cards/cardNFLEdition';

const Card = dynamic(() => import('~/components/cards/cardDefault'));

const Marketplace = ({ collectionName }) => {
  const [showFilter, setShowFilter] = useState(true);
  const { isMediumDevice } = useBreakpoints();

  const {
    appData: { page, marketCount, marketplaceLoading, marketplaceNfts, cardRef, imgRef },
    handleAppData
  } = useAppContext();

  const handleShowFilters = () => {
    setShowFilter(prevState => !prevState);
  };

  const handleLoadMore = e => {
    e.preventDefault();
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

    return marketplaceNfts?.map((nft, index) => {
      if (collectionName === COLLECTIONS_NAME.NFL) {
        return (
          <CardTemplate
            key={nft.edition_id}
            data={nft}
            collectionName={collectionName}
            setPosition={setPosition}
          />
        );
      } else {
        return <Card key={nft.asset_id} data={nft} hasPrice setPosition={setPosition} />;
      }
    });
  }, [marketplaceNfts, marketplaceLoading]);

  const renderFilter = useMemo(() => {
    if (collectionName === COLLECTIONS_NAME?.NFL) {
      return <FiltersNFL showFilter={showFilter} />;
    }
    return (
      <Filters
        filters={FILTERS}
        filtersTypes={FILTERS_TYPES}
        filtersIds={FILTERS_IDS}
        showFilter={showFilter}
      />
    );
  });

  return (
    <Grid>
      <BrowseHeader
        handleShowFilters={handleShowFilters}
        showFilter={showFilter}
        totalShowing={marketplaceNfts?.length}
        available={marketCount || 0}
        withBorder={false}
        collectionName={collectionName}
      />
      <Styled.Wrapper showFilter={showFilter}>
        {renderFilter}
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

export default React.memo(Marketplace);
