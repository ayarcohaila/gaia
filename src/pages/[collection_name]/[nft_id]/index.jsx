import { Box, Grid, Typography, useTheme } from '@mui/material';

import { ProductDetailsTopSection, Seo } from '~/components';
import { gqlClient } from '~/config/apollo-client';
import { useBreakpoints } from '~/hooks';
import { GET_BALLERZ_NFT_BY_ID } from '~/store/server/queries';

const ProductDetails = ({ nft }) => {
  const {
    palette: { grey }
  } = useTheme();
  const { isSmallDevice } = useBreakpoints();

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
    <Box bgcolor={grey[200]}>
      <Seo title={`${title} | ${nft.collection.name} NFT Collection`} description={description} />
      <Grid m="0 auto" maxWidth="1280px" width={isSmallDevice ? '100%' : '90%'}>
        <ProductDetailsTopSection nft={nft} />
      </Grid>
    </Box>
  );
};

export async function getServerSideProps(ctx) {
  const {
    query: { nft_id }
  } = ctx;

  try {
    const { nft } = await gqlClient.request(GET_BALLERZ_NFT_BY_ID, { id: { id: nft_id } });
    if (!nft?.length) {
      return { props: { nft: null } };
    }
    return {
      props: { nft: nft[0] }
    };
  } catch (error) {
    console.error(error);
    return { props: { nft: null } };
  }
}

export default ProductDetails;
