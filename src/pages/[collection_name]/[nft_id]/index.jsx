import { Box, useTheme } from '@mui/material';

import { ProductDetailsTopSection, Seo } from '~/components';

import { gqlClient } from '~/config/apollo-client';
import { GET_BALLERZ_NFT_BY_ID } from '~/store/server/queries';

const ProductDetails = ({ nft }) => {
  const {
    palette: { grey }
  } = useTheme();

  const title = nft?.template?.metadata?.title;
  const description = nft?.template?.metadata?.description;

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

  return {
    props: { nft: nft[0] }
  };
}

export default ProductDetails;
