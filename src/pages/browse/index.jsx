import { Grid } from '@mui/material';
import { useState, useMemo, useEffect } from 'react';

import CardSkeletonLoader from '~/base/card-skeleton-loader';
import { BrowseHeader, Filters, BrowseCard, Seo } from '~/components';
import { useBreakpoints } from '~/hooks';
import { useAppContext } from '~/context';
import { COLLECTION_LIST_CONFIG } from '~/../collections_setup';

import * as Styled from '~/styles/browse-page/styles';

const DEFAULT_LIST_SIZE = 40;

const Browse = () => {
  const [showFilter, setShowFilter] = useState(true);
  const [cursor, setCursor] = useState(0);
  const [nftList, setNftList] = useState([]);

  const { isMediumDevice } = useBreakpoints();

  const {
    appData: { marketplaceLoading, marketplaceNfts }
  } = useAppContext();

  const handleShowFilters = () => {
    setShowFilter(!showFilter);
  };

  const filteredNfts = useMemo(() => {
    return (
      marketplaceNfts?.filter(nft =>
        Object.values(COLLECTION_LIST_CONFIG).find(item => item.id === nft.collection_id)
      ) || []
    );
  }, [marketplaceNfts]);

  const cursorLimit = useMemo(
    () => Math.ceil(filteredNfts?.length / DEFAULT_LIST_SIZE) - 1,
    [filteredNfts]
  );

  const handleLoadMore = () => {
    setCursor(prevState => prevState + 1);
  };

  useEffect(() => {
    if (cursor) {
      const list = [...filteredNfts];
      setNftList(list?.splice(0, DEFAULT_LIST_SIZE * (cursor + 1)));
    } else {
      const list = [...filteredNfts];
      setNftList(list?.splice(0, DEFAULT_LIST_SIZE));
    }
  }, [cursor, filteredNfts]);

  return (
    <>
      <Seo title="Browse All NFTs" />
      <BrowseHeader
        handleShowFilters={handleShowFilters}
        showFilter={showFilter}
        totalShowing={filteredNfts?.length}
      />
      <Grid container alignItems="center" justifyContent="center" mt={isMediumDevice && '24px'}>
        <Styled.Container>
          {!!showFilter && <Filters />}
          <Grid sx={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {marketplaceLoading
              ? new Array(5).fill(null).map((_, index) => <CardSkeletonLoader key={index} />)
              : nftList?.map(nft => <BrowseCard key={nft.id} data={nft} />)}
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
