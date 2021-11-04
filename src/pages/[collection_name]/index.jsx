import { useState, useEffect, useMemo } from 'react';
import { Grid } from '@mui/material';
import { CollectionBanner, CollectionsFilter, Seo, CollectionList } from '~/components';
import { Divider } from '~/base';
import { gqlClient } from '~/config/apollo-client';

import { GET_COLLECTION_BY_ID, GET_BALLERZ_NFTS_FOR_SALE, GET_NFTS } from '~/store/server/queries';
import { ballerzCollection } from '../../config/config';

import * as Styled from '~/styles/collection-name/styles';

const DATA = {
  mainColor: '#270b5a',
  secondaryColor: '#4814a6'
};

const DEFAULT_LIST_SIZE = 40;
const BALLERZ_ID = ballerzCollection || 'db4ccc58-4398-4a66-87cd-5b0f6c6c21f3';

const Collection = ({ nft_sale_offer, nft_collection, getNFTs }) => {
  const [cursor, setCursor] = useState(0);
  const [bannerData, setBannerData] = useState(null);
  const [nftList, setNftList] = useState([]);

  useEffect(() => {
    if (nft_collection?.length) {
      setBannerData({ ...nft_collection[0], ...DATA });
    }
  }, [nft_collection]);

  useEffect(() => {
    const list = [...nft_sale_offer];
    setNftList(list?.splice(0, DEFAULT_LIST_SIZE));
  }, []);

  useEffect(() => {
    if (cursor) {
      const list = [...nft_sale_offer];
      setNftList(list?.splice(0, DEFAULT_LIST_SIZE * (cursor + 1)));
    }
  }, [cursor]);

  const handleLoadMore = () => {
    setCursor(prevState => prevState + 1);
  };

  const cursorLimit = useMemo(
    () => Math.ceil(nft_sale_offer.length / DEFAULT_LIST_SIZE) - 1,
    [nft_sale_offer.length]
  );

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
            <CollectionsFilter nftQuantity={nft_sale_offer.length} setNftList={setNftList} />
          </Grid>
          <Divider sx={{ marginBottom: '32px' }} />
          <Grid sx={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <CollectionList nfts={nftList} nftFullList={getNFTs} />
          </Grid>
          {cursorLimit > cursor && (
            <Grid container justifyContent="center" align="center" sx={{ margin: '32px 0 0' }}>
              <Styled.BlackButton onClick={handleLoadMore}>Load More</Styled.BlackButton>
            </Grid>
          )}
        </Styled.Container>
      </Grid>
    </>
  );
};

export async function getServerSideProps() {
  const { nft_collection } = await gqlClient.request(GET_COLLECTION_BY_ID, { id: BALLERZ_ID });

  const { nft_sale_offer } = await gqlClient.request(GET_BALLERZ_NFTS_FOR_SALE, { id: BALLERZ_ID });

  const { nft } = await gqlClient.request(GET_NFTS);

  return {
    props: { getNFTs: nft, nft_sale_offer, nft_collection }
  };
}

export default Collection;
