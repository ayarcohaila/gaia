import { Box, Grid, Typography, useTheme } from '@mui/material';

import { ProductDetailsTopSection, Seo } from '~/components';
import { gqlClient } from '~/config/apollo-client';
import { useBreakpoints } from '~/hooks';
import {
  GET_NFTS_IDS,
  GET_NFTS_MINT_NUMBER,
  GET_NFT_BY_ID,
  GET_NFT_BY_MINT_NUMBER
} from '~/store/server/queries';
import { COLLECTIONS, COLLECTION_ID } from '~/constant';

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

export async function getStaticPaths() {
  const { nft_template } = await gqlClient.request(GET_NFTS_IDS);
  const ballerzCollectionPaths = nft_template.map(nft => ({
    params: { collection_name: COLLECTIONS.BALLERZ, nft_id: String(nft?.id) }
  }));

  const { nft_collection } = await gqlClient.request(GET_NFTS_MINT_NUMBER, {
    collection_id: COLLECTION_ID[COLLECTIONS.BRYSON]
  });
  const { nfts } = nft_collection[0];
  const brysonCollectionPaths = nfts.map(nft => ({
    params: { collection_name: COLLECTIONS.BRYSON, nft_id: String(nft?.mint_number) }
  }));
  return { paths: [...ballerzCollectionPaths, ...brysonCollectionPaths], fallback: false };
}

export async function getStaticProps({ params }) {
  const { collection_name, nft_id } = params;
  try {
    if (collection_name === COLLECTIONS.BRYSON) {
      const { nft } = await gqlClient.request(GET_NFT_BY_MINT_NUMBER, {
        collection_id: COLLECTION_ID[collection_name],
        mint_number: nft_id
      });
      if (!nft?.length) {
        return { props: { nft: null } };
      }
      return {
        props: { nft: nft[0] },
        revalidate: 60 * 7.5 // 7.5 minutes
      };
    }

    const { nft } = await gqlClient.request(GET_NFT_BY_ID, { id: { id: params?.nft_id } });
    if (!nft?.length) {
      return { props: { nft: null } };
    }
    return {
      props: { nft: nft[0] },
      revalidate: 60 * 60 // 1 hour
    };
  } catch {
    return { props: { nft: null } };
  }
}

export default ProductDetails;
