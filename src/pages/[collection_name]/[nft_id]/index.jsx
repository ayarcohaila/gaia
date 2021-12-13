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
import { ATTRIBUTES_ORDER, BALLERZ_COMPUTED_PROPERTIES } from '~/utils/constants';

const ProductDetails = ({ nft, attributesOrder, ballerzComputedProps }) => {
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
        <ProductDetailsTopSection
          nft={nft}
          attributesOrder={attributesOrder}
          ballerzComputedProps={ballerzComputedProps}
        />
      </Grid>
    </Box>
  );
};

export async function getStaticPaths() {
  const collections = Object.values(COLLECTION_LIST_CONFIG).map(item => ({
    collection_id: { _eq: item.id }
  }));
  const { nft_template } = await gqlClient.request(GET_NFTS_IDS, { collections });

  const ballerzCollectionPaths = nft_template.map(nft => ({
    params: { collection_name: COLLECTIONS_NAME.BALLERZ, nft_id: String(nft?.id) }
  }));

  const { nft_collection } = await gqlClient.request(GET_NFTS_MINT_NUMBER, {
    collection_id: COLLECTION_LIST_CONFIG[COLLECTIONS_NAME.BRYSON].id
  });
  const { nfts } = nft_collection[0];
  const brysonCollectionPaths = nfts.map(nft => ({
    params: { collection_name: COLLECTIONS_NAME.BRYSON, nft_id: String(nft?.mint_number) }
  }));

  const allPaths = [...ballerzCollectionPaths, ...brysonCollectionPaths];
  const thousandPaths = allPaths.slice(0, 100);
  return { paths: thousandPaths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const { collection_name, nft_id } = params;
  const brysonConfig = COLLECTION_LIST_CONFIG[COLLECTIONS_NAME.BRYSON];
  const shareefConfig = COLLECTION_LIST_CONFIG[COLLECTIONS_NAME.SHAREEF];

  const attributesOrder = ATTRIBUTES_ORDER;
  const ballerzComputedProps = BALLERZ_COMPUTED_PROPERTIES;

  try {
    if (collection_name === COLLECTIONS_NAME.BRYSON) {
      const { nft } = await gqlClient.request(GET_NFT_BY_MINT_NUMBER, {
        filter: {
          collection_id: { _eq: brysonConfig.id },
          mint_number: { _eq: nft_id }
        }
      });
      if (!nft?.length || !(brysonConfig.status === COLLECTION_STATUS.SALE)) {
        return { notFound: true };
      }
      return {
        props: { nft: nft[0], attributesOrder, ballerzComputedProps },
        revalidate: 60 // 1 min
      };
    }

    if (collection_name === COLLECTIONS_NAME.SHAREEF) {
      const { nft } = await gqlClient.request(GET_NFT_BY_MINT_NUMBER, {
        filter: {
          collection_id: { _eq: shareefConfig.id },
          asset_id: { _eq: nft_id }
        }
      });
      if (!nft?.length || !(shareefConfig.status === COLLECTION_STATUS.SALE)) {
        return { notFound: true };
      }
      return {
        props: { nft: nft[0], attributesOrder, ballerzComputedProps },
        revalidate: 60 // 1 min
      };
    }

    const { nft } = await gqlClient.request(GET_NFT_BY_ID, { id: { id: params?.nft_id } });
    if (!nft?.length) {
      return { notFound: true };
    }
    return {
      props: { nft: nft[0], attributesOrder, ballerzComputedProps },
      revalidate: 60 // 1 min
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default ProductDetails;
