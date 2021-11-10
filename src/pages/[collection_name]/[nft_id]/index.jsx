import { Box, useTheme } from '@mui/material';

import { ProductDetailsTopSection, Seo } from '~/components';

import { gqlClient } from '~/config/apollo-client';
import { GET_BALLERZ_NFT_BY_ID } from '~/store/server/queries';

const ProductDetails = props => {
  const {
    palette: { grey }
  } = useTheme();

  return (
    <Box bgcolor={grey[200]} m="0 auto" maxWidth="1280px">
      <Seo title="Product Details" />
      <ProductDetailsTopSection nft={props.nft} />
    </Box>
  );
};

export async function getServerSideProps(ctx) {
  const {
    query: { nft_id }
  } = ctx;

  const { nft } = await gqlClient.request(GET_BALLERZ_NFT_BY_ID, { id: { id: nft_id } });

  return {
    props: { nft: nft[0] }
  };
}

export default ProductDetails;
