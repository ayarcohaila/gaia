import { Box, Grid, useTheme } from '@mui/material';

import ProductDetailsTopSection from '~/components/productDetails/topSection';
import Seo from '~/components/seo';
import { gqlClient } from '~/config/apolloClient';
import useBreakpoints from '~/hooks/useBreakpoints';
import { GET_NFT_BY_ID, GET_NFT_BY_MINT_NUMBER } from '~/store/server/queries';
import {
  COLLECTION_LIST_CONFIG,
  COLLECTIONS_NAME,
  COLLECTION_STATUS
} from '../../../../collections_setup';
import { ATTRIBUTES_ORDER, BALLERZ_COMPUTED_PROPERTIES } from '~/components/filters/constants';
import listNFTOffers from '~/utils/fetchNFTOffers';
import formatIpfsImg from '~/utils/formatIpfsImg';

const ProductDetails = ({ nft, attributesOrder, ballerzComputedProps, hasMultipleOffers }) => {
  const {
    palette: { grey }
  } = useTheme();
  const { isSmallDevice } = useBreakpoints();

  const title = nft?.template?.metadata?.title;
  const description = nft?.template?.metadata?.description;
  const img = nft?.template?.metadata?.img;

  return (
    <Box bgcolor={grey[200]}>
      <Seo
        title={`${title} | ${nft.collection.name} NFT Collection`}
        description={description}
        imgURL={formatIpfsImg(img)}
      />
      <Grid m="0 auto" maxWidth="1280px" width={isSmallDevice ? '100%' : '90%'}>
        <ProductDetailsTopSection
          nft={nft}
          attributesOrder={attributesOrder}
          ballerzComputedProps={ballerzComputedProps}
          hasMultipleOffers={hasMultipleOffers}
        />
      </Grid>
    </Box>
  );
};

export async function getServerSideProps({ params }) {
  const { collection_name, nft_id } = params;
  const brysonConfig = COLLECTION_LIST_CONFIG[COLLECTIONS_NAME.BRYSON];
  const shareefConfig = COLLECTION_LIST_CONFIG[COLLECTIONS_NAME.SHAREEF];
  const shareefAirdropConfig = COLLECTION_LIST_CONFIG[COLLECTIONS_NAME.SHAREEF_AIRDROP];

  const attributesOrder = ATTRIBUTES_ORDER;
  const ballerzComputedProps = BALLERZ_COMPUTED_PROPERTIES;

  let hasMultipleOffers = false;

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

      const brysonOwner = nft[0]?.owner;
      try {
        const brysonOffers = await listNFTOffers(brysonOwner, nft[0]?.asset_id.toString());
        hasMultipleOffers = brysonOffers.length > 1;
      } catch (err) {
        hasMultipleOffers = false;
      }

      return {
        props: { nft: nft[0], attributesOrder, ballerzComputedProps, hasMultipleOffers }
      };
    }

    if (collection_name === COLLECTIONS_NAME.SHAREEF_AIRDROP) {
      const { nft } = await gqlClient.request(GET_NFT_BY_MINT_NUMBER, {
        filter: {
          collection_id: { _eq: shareefAirdropConfig.id },
          asset_id: { _eq: nft_id }
        }
      });

      if (!nft?.length || !(shareefAirdropConfig.status === COLLECTION_STATUS.SALE)) {
        return { notFound: true };
      }

      const shareefOwner = nft[0]?.owner;

      try {
        const shareefOffers = await listNFTOffers(shareefOwner, nft[0]?.asset_id.toString());
        hasMultipleOffers = shareefOffers.length > 1;
      } catch (err) {
        hasMultipleOffers = false;
      }

      return {
        props: { nft: nft[0], attributesOrder, ballerzComputedProps, hasMultipleOffers }
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

      const shareefOwner = nft[0]?.owner;
      try {
        const shareefOffers = await listNFTOffers(shareefOwner, nft[0]?.asset_id.toString());
        hasMultipleOffers = shareefOffers.length > 1;
      } catch (err) {
        hasMultipleOffers = false;
      }

      return {
        props: { nft: nft[0], attributesOrder, ballerzComputedProps, hasMultipleOffers }
      };
    }

    const { nft } = await gqlClient.request(GET_NFT_BY_ID, {
      id: { id: params?.nft_id },
      collection_id: process.env.NEXT_PUBLIC_BALLERZ_COLLECTION
    });

    if (!nft?.length) {
      return { notFound: true };
    }

    const owner = nft[0]?.owner;
    try {
      const offers = await listNFTOffers(owner, nft[0]?.asset_id.toString());
      hasMultipleOffers = offers?.length > 1;
    } catch (err) {
      hasMultipleOffers = false;
    }

    return {
      props: { nft: nft[0], attributesOrder, ballerzComputedProps, hasMultipleOffers }
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default ProductDetails;
