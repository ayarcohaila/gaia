import { CollectionBanner } from '~/components';
import { Grid } from '@mui/material';

function Collection() {
  const accountNumber = '0xc562773b26ade24cd8a33c4870380E774BF8A6DE';
  const bannerName = '@Ballerz';
  const bannerDescription =
    "BALLERZ is a basketball-inspired generative NFT set launching on the Flow blockchain. Collect your favorite teams and jersey numbers, and show everyone you're a true baller";
  const bgImg = '/collections/ballerz-1200x630.jpg';
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
      />
    </Grid>
  );
}
export default Collection;
