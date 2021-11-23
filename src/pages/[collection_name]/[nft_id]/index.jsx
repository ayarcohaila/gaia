import { Box, Grid, useTheme } from '@mui/material';

import { ProductDetailsTopSection, Seo } from '~/components';
import { gqlClient } from '~/config/apollo-client';
import { useBreakpoints } from '~/hooks';
import {
  GET_NFTS_IDS,
  GET_NFTS_MINT_NUMBER,
  GET_NFT_BY_ID,
  GET_NFT_BY_MINT_NUMBER
} from '~/store/server/queries';
import {
  COLLECTION_LIST_CONFIG,
  COLLECTIONS_NAME,
  COLLECTION_STATUS
} from '../../../../collections_setup';

const ProductDetails = ({ nft }) => {
  const {
    palette: { grey }
  } = useTheme();
  const { isSmallDevice } = useBreakpoints();

  const title = nft?.template?.metadata?.title;
  const description = nft?.template?.metadata?.description;

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
    params: { collection_name: COLLECTIONS_NAME.BALLERZ, nft_id: String(nft?.id) }
  }));

  const { nft_collection } = await gqlClient.request(GET_NFTS_MINT_NUMBER, {
    collection_id: COLLECTION_LIST_CONFIG[COLLECTIONS_NAME.BRYSON].wallet
  });
  const { nfts } = nft_collection[0];
  const brysonCollectionPaths = nfts.map(nft => ({
    params: { collection_name: COLLECTIONS_NAME.BRYSON, nft_id: String(nft?.mint_number) }
  }));
  return { paths: [...ballerzCollectionPaths, ...brysonCollectionPaths], fallback: false };
}

export async function getStaticProps({ params }) {
  const { collection_name, nft_id } = params;
  const brysonConfig = COLLECTION_LIST_CONFIG[COLLECTIONS_NAME.BRYSON];
  try {
    if (collection_name === COLLECTIONS_NAME.BRYSON) {
      const { nft } = await gqlClient.request(GET_NFT_BY_MINT_NUMBER, {
        collection_id: brysonConfig.id,
        mint_number: nft_id
      });
      if (!nft?.length || !(brysonConfig.status === COLLECTION_STATUS.SALE)) {
        return { notFound: true };
      }
      return {
        props: { nft: nft[0] },
        revalidate: 60 * 7.5 // 7.5 minutes
      };
    }

    const { nft } = await gqlClient.request(GET_NFT_BY_ID, { id: { id: params?.nft_id } });
    if (!nft?.length) {
      return { notFound: true };
    }
    return {
      props: { nft: nft[0] },
      revalidate: 60 * 60 // 1 hour
    };
  } catch {
    return { notFound: true };
  }
}

export default ProductDetails;
