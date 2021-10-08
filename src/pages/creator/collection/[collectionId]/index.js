import CollectionBanner from '~/components/collectionBanner';
import { Grid } from '@mui/material';

const BANNER_ITEM = [
  { value: '100K', description: 'Items' },
  { value: '5.5K', description: 'Owners' },
  { value: '41.39', description: 'Flor Price', price: true },
  { value: '161.0K', description: 'Volume Traded', price: true }
];

function Collection() {
  const accountNumber = '0xc562773b26ade24cd8a33c4870380E774BF8A6DE';
  const bannerName = '@Ballerz';
  const bannerDescription = "Buy and sell Ballerz NFTs on Gaia, the world's best NFT marketplace";
  const bgImg = '/static/img/home-banner.png';
  const mainColor = '#270b5a';
  const secondaryColor = '#4814a6';

  return (
    <Grid xs={12} pl="32px" pr="32px">
      <CollectionBanner
        accountNumber={accountNumber}
        bannerName={bannerName}
        bannerDescription={bannerDescription}
        bgImg={bgImg}
        mainColor={mainColor}
        secondaryColor={secondaryColor}
        bannerItems={BANNER_ITEM}
      />
    </Grid>
  );
}
export default Collection;
