import { useState, useEffect, useMemo } from 'react';
import { Box, Typography, Grid, Link, useTheme } from '@mui/material';

import { Button, Divider } from '~/base';
import { useAppContext } from '~/context';
import { ballerzCollection } from '~/config/config';
import { gqlClient } from '~/config/apollo-client';
import { GET_COLLECTION_BY_ID, GET_BALLERZ_NFTS_FOR_SALE, GET_NFTS } from '~/store/server/queries';
import { CollectionBanner, CollectionsFilter, Seo, CollectionList } from '~/components';

import * as Styled from '~/styles/collection-name/styles';
import { useRouter } from 'next/router';
import { shuffleArray } from '~/utils/array';
import { useBreakpoints } from '~/hooks';

const DATA = {
  mainColor: '#270b5a',
  secondaryColor: '#4814a6'
};

const DEFAULT_LIST_SIZE = 40;
const BALLERZ_ID = ballerzCollection || 'db4ccc58-4398-4a66-87cd-5b0f6c6c21f3';

const Collection = ({ nft_sale_offer, nft_collection, allNfts }) => {
  const {
    palette: { grey }
  } = useTheme();
  const { isMediumDevice } = useBreakpoints();
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
            bannerDescription={
              <>
                <Typography variant="h6">
                  Bryson DeChambeau’s premium NFT collection represents some of the most explosive
                  facets of the golf champion’s career.{' '}
                </Typography>
                <Typography mt={2} variant="h6">
                  His nickname, “The Scientist,” comes from his exciting and unconventional approach
                  to the game. Learn more at{' '}
                  <Link
                    color="#fff"
                    href="https://brysondechambeau.com"
                    target="_blank"
                    underline="hover">
                    brysondechambeau.com
                  </Link>
                </Typography>
              </>
            }
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
            <Grid
              alignItems="center"
              bgcolor="#fff"
              borderRadius="16px"
              container
              margin="0 auto"
              maxWidth="1280px"
              padding={isMediumDevice ? 2.5 : 4}
              width="100%">
              <img
                alt="DeChambeau vs Koepka poster"
                height="400px"
                src="/collections/de-chambeau/poster.webp"
                style={{
                  borderRadius: '24px',
                  margin: '0 auto',
                  height: isMediumDevice ? '300px' : 'auto',
                  maxWidth: '400px',
                  width: '95%'
                }}
              />
              <Box mx="auto" width={isMediumDevice ? '90%' : '40%'}>
                <Typography fontWeight="normal" mt={isMediumDevice ? 2 : 0} variant="h4">
                  Bryson DeChambeau
                </Typography>
                <Typography fontWeight="600" m="8px 0 20px" variant="h3">
                  Vegas Baby!
                </Typography>
                <Typography color={grey[700]} variant="h6">
                  Lifetime collectible with a once-in-a-lifetime opportunity! Not only is this the
                  first in a series of Bryson DeChambeau collectibles on Gaia, but you may also win
                  VIP passes for his invite-only event on Friday, November 26 in Las Vegas!
                </Typography>
                <Typography color={grey[700]} my={2} variant="h6">
                  Each NFT purchased is an entry to win; multiple NFT purchases allowed. Prize
                  includes $2,000 travel voucher.
                </Typography>
                <Typography color={grey[700]} component="span" variant="h6">
                  CONTEST ELIGIBLE FOR U.S. RESIDENTS ONLY.{' '}
                  <Link color={grey[700]} href="https://brysondechambeau.com" target="_blank">
                    See full rules
                  </Link>
                  .
                </Typography>
                <Button
                  sx={{ display: 'block', fontFamily: 'Work Sans', mt: 2, padding: '16px 40px' }}>
                  Purchase • $ 100.00
                </Button>
              </Box>
            </Grid>
            <Grid alignItems="center" container justifyContent="center" width="100%">
              <img
                alt="Las Vegas Sign"
                src="/collections/de-chambeau/las-vegas.webp"
                style={{
                  borderRadius: '24px',
                  margin: '24px 0',
                  maxHeight: '800px',
                  maxWidth: '1280px',
                  width: '95%'
                }}
              />
            </Grid>
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
