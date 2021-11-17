import { useState, useEffect, useMemo } from 'react';
import { Grid } from '@mui/material';

import { Divider } from '~/base';
import { useAppContext } from '~/context';
import { ballerzCollection } from '~/config/config';
import { gqlClient } from '~/config/apollo-client';
import { GET_COLLECTION_BY_ID, GET_BALLERZ_NFTS_FOR_SALE, GET_NFTS } from '~/store/server/queries';
import {
  CollectionBanner,
  CollectionsFilter,
  DeChambeauContent,
  DeChambeauDescription,
  Seo,
  CollectionList
} from '~/components';
import * as Styled from '~/styles/collection-name/styles';
import { useRouter } from 'next/router';
import { shuffleArray } from '~/utils/array';

const DATA = {
  mainColor: '#270b5a',
  secondaryColor: '#4814a6'
};

const DEFAULT_LIST_SIZE = 40;
const BALLERZ_ID = ballerzCollection || 'db4ccc58-4398-4a66-87cd-5b0f6c6c21f3';

const Collection = ({ nft_sale_offer, nft_collection, allNfts }) => {
  const [cursor, setCursor] = useState(0);
  const [bannerData, setBannerData] = useState(null);
  const [nftList, setNftList] = useState([]);
  const {
    query: { collection_name }
  } = useRouter();
  const isDeChambeauCollection = collection_name === 'de-chambeau';

  const { handleAppData } = useAppContext();

  useEffect(() => {
    handleAppData({ allNfts });
  }, []);

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

  if (isDeChambeauCollection) {
    return (
      <>
        <Seo title="DeChambeau" />
        <Grid>
          <CollectionBanner
            accountNumber={bannerData?.author}
            bannerAvatar="/collections/de-chambeau/avatar.webp"
            bannerName="BrysonDeChambeau"
            bannerDescription={<DeChambeauDescription />}
            bgImg="/collections/de-chambeau/video-poster.webp"
            mainColor="#517fb1"
            secondaryColor="#517fb1"
            sx={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
          />
          <Styled.Container>
            <Grid sx={{ margin: '24px 0' }}>
              <CollectionsFilter
                enableSort={false}
                nftQuantity={nft_sale_offer.length}
                setNftList={setNftList}
              />
            </Grid>
            <Divider sx={{ marginBottom: '32px' }} />
            <DeChambeauContent />
          </Styled.Container>
        </Grid>
      </>
    );
  }

  return (
    <>
      <Seo title={bannerData?.name.toUpperCase() || ''} />
      <Grid>
        <CollectionBanner
          bannerAvatar="/collections/user.png"
          accountNumber={bannerData?.author}
          bannerName={bannerData?.name}
          bannerDescription={
            bannerData?.description ||
            `BALLERZ is a league of 10,000 randomly-generated basketball players, ready to flex
          on the Flow blockchain. Limit 7 per wallet. BALLERZ reveal on Wednesday, November
          10.`
          }
          bgImg={'/templates/collections/ballerz.png' || bannerData?.image}
          mainColor={bannerData?.mainColor}
          secondaryColor={bannerData?.secondaryColor}
        />
        <Styled.Container>
          <Grid sx={{ margin: '24px 0' }}>
            <CollectionsFilter nftQuantity={nft_sale_offer.length} setNftList={setNftList} />
          </Grid>
          <Divider sx={{ marginBottom: '32px' }} />
          <Grid sx={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <CollectionList nfts={nftList} hasNftsForSale={!!nft_sale_offer.length} />
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
    props: { allNfts: nft, nft_sale_offer: shuffleArray(nft_sale_offer), nft_collection }
  };
}

export default Collection;
