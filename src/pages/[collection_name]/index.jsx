import { useState, useEffect, useMemo } from 'react';
import { Grid } from '@mui/material';

import { Divider } from '~/base';
import { gqlClient } from '~/config/apollo-client';
import {
  GET_COLLECTION_BY_ID,
  GET_NFTS_FOR_SALE,
  GET_SINGLE_NFTS_FOR_SALE
} from '~/store/server/queries';
import {
  CollectionBanner,
  CollectionsFilter,
  BrysonContent,
  BrysonDescription,
  Seo,
  CollectionList
} from '~/components';
import * as Styled from '~/styles/collection-name/styles';
import { useRouter } from 'next/router';
import { shuffleArray } from '~/utils/array';
import { useCollectionConfig } from '~/hooks';
import {
  COLLECTION_LIST_CONFIG,
  COLLECTIONS_NAME,
  COLLECTION_STATUS
} from '../../../collections_setup';

const DATA = {
  mainColor: '#270b5a',
  secondaryColor: '#4814a6'
};

const DEFAULT_LIST_SIZE = 40;

const Collection = ({ nft_sale_offer, nft_collection, pickedOffer, offerCount }) => {
  const [cursor, setCursor] = useState(0);
  const [bannerData, setBannerData] = useState(null);
  const [nftList, setNftList] = useState([]);
  const { collectionsNames } = useCollectionConfig();

  const {
    query: { collection_name }
  } = useRouter();

  const isBrysonCollection = collection_name === collectionsNames.BRYSON;

  useEffect(() => {
    if (nft_collection?.length) {
      setBannerData({ ...nft_collection[0], ...DATA });
    }
  }, [nft_collection]);

  useEffect(() => {
    if (nft_sale_offer) {
      const list = [...nft_sale_offer];
      setNftList(list?.splice(0, DEFAULT_LIST_SIZE));
    }
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

  const cursorLimit = useMemo(() => Math.ceil(offerCount / DEFAULT_LIST_SIZE) - 1, [offerCount]);

  if (isBrysonCollection) {
    return (
      <>
        <Seo title="Bryson DeChambeau" />
        <Grid>
          <CollectionBanner
            accountNumber={bannerData?.author}
            bannerAvatar="/collections/bryson/avatar.webp"
            bannerName="BrysonDeChambeau"
            bannerDescription={<BrysonDescription />}
            bgImg="/collections/bryson/video-poster.webp"
            mainColor="#517fb1"
            secondaryColor="#517fb1"
            sx={{
              backgroundPosition: '0% 0%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              margin: '0 auto',
              maxWidth: '1800px'
            }}
          />
          <Styled.Container>
            <Grid sx={{ margin: '24px 0' }}>
              <CollectionsFilter
                enableSort={false}
                nftQuantity={offerCount}
                setNftList={setNftList}
                sx={{ margin: '0 auto', maxWidth: '1800px' }}
              />
            </Grid>
            <Divider sx={{ margin: '0 auto', maxWidth: '1800px', marginBottom: '32px' }} />
            <BrysonContent data={pickedOffer} totalAvailable={offerCount} />
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
            <CollectionsFilter nftQuantity={offerCount} setNftList={setNftList} />
          </Grid>
          <Divider sx={{ marginBottom: '32px' }} />
          <Grid sx={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <CollectionList nfts={nftList} hasNftsForSale={!!offerCount} />
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

export async function getServerSideProps({ query }) {
  try {
    const collectionConfig = COLLECTION_LIST_CONFIG[query?.collection_name];
    const { nft_collection } = await gqlClient.request(GET_COLLECTION_BY_ID, {
      id: collectionConfig?.wallet
    });

    if (query.collection_name === COLLECTIONS_NAME.BRYSON) {
      const { nft_sale_offer } = await gqlClient.request(GET_SINGLE_NFTS_FOR_SALE, {
        id: collectionConfig?.wallet
      });
      const randomizedSalesOffers = shuffleArray(nft_sale_offer);

      if (!(collectionConfig?.status === COLLECTION_STATUS.SALE)) {
        return {
          props: {
            offerCount: randomizedSalesOffers.length,
            pickedOffer: randomizedSalesOffers[0]
          }
        };
      }
      return {
        props: {
          nft_sale_offer: [],
          nft_collection,
          pickedOffer: randomizedSalesOffers[0],
          offerCount: randomizedSalesOffers.length
        }
      };
    }

    const { nft_sale_offer } = await gqlClient.request(GET_NFTS_FOR_SALE, {
      id: collectionConfig?.wallet
    });
    const randomizedSalesOffers = shuffleArray(nft_sale_offer);
    return {
      props: {
        nft_sale_offer: randomizedSalesOffers,
        nft_collection,
        offerCount: randomizedSalesOffers.length
      }
    };
  } catch {
    return {
      props: {
        nft_collection: null
      }
    };
  }
}

export default Collection;
