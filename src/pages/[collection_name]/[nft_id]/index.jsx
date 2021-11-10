import { Box, Grid, Typography, useTheme } from '@mui/material';

import { ProductDetailsTopSection, Seo } from '~/components';

import { gqlClient } from '~/config/apollo-client';
import { GET_BALLERZ_NFT_BY_ID } from '~/store/server/queries';

const ProductDetails = ({ nft }) => {
  const {
    palette: { grey }
  } = useTheme();

  const title = nft?.template?.metadata?.title;
  const description = nft?.template?.metadata?.description;

  if (!nft) {
    return (
      <Grid alignItems="center" bgcolor={grey[200]} container height="40vh" justifyContent="center">
        <Typography variant="h4">Page not found</Typography>
      </Grid>
    );
  }

  return (
    <Box bgcolor={grey[200]} m="0 auto" maxWidth="1280px">
      <Seo title={title} description={description} />
      <ProductDetailsTopSection nft={nft} />
    </Box>
  );
};

export async function getServerSideProps(ctx) {
  const {
    query: { nft_id }
  } = ctx;

  const { nft } = await gqlClient.request(GET_BALLERZ_NFT_BY_ID, { id: { id: nft_id } });

  if (!nft?.length) {
    return { props: { nft: null } };
  }

  return {
    props: { nft: nft[0] }
  };
}

export default ProductDetails;
