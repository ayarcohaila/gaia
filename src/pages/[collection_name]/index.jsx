import React, { useMemo } from 'react';
import MarketPlace from '~/components/marketplace';
import { useRouter } from 'next/router';
import { gqlClient } from '~/config/apolloClient';
import { GET_COLLECTION_BY_ID } from '~/store/server/queries';
import useCollectionConfig from '~/hooks/useCollectionConfig';
import { hasSneakerzSell } from '~/config/config';
import { COLLECTION_LIST_CONFIG, COLLECTIONS_NAME } from '../../../collections_setup';
import { Grid } from '@mui/material';

import Seo from '~/components/seo';
import CollectionBanner from '~/components/collectionBanner';
import BrysonDescription from '~/components/collection/bryson/description';
import ShareefDescription from '~/components/collection/shareef/description';

const CUSTOM_BANNER_BACKGROUND = {
  sx: {
    backgroundPosition: '0% 0%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    margin: '0 auto'
  }
};

const Collection = ({ nft_collection }) => {
  const { config, collectionsNames } = useCollectionConfig();

  const {
    query: { collection_name }
  } = useRouter();

  const isBrysonCollection = collection_name === collectionsNames.BRYSON;
  const isShareefCollection = collection_name === collectionsNames.SHAREEF;

  const customStyleBanner = useMemo(() => {
    return {
      [collectionsNames.BRYSON]: {
        ...nft_collection[0],
        ...CUSTOM_BANNER_BACKGROUND,
        bannerDescription: <BrysonDescription />,
        accountNumber: nft_collection[0]?.author,
        bannerName: nft_collection[0]?.name
      },
      [collectionsNames.SHAREEF]: {
        ...nft_collection[0],
        ...CUSTOM_BANNER_BACKGROUND,
        bannerDescription: <ShareefDescription />,
        accountNumber: nft_collection[0]?.author,
        bannerName: nft_collection[0]?.name.replace(/[^\w]/gi, '')
      },
      [collectionsNames.BALLERZ]: {
        ...nft_collection[0],
        bannerDescription: nft_collection[0].description,
        accountNumber: nft_collection[0]?.author,
        bannerName: nft_collection[0]?.name
      },
      [collectionsNames.SNEAKERZ]: {
        ...nft_collection[0],
        bannerDescription: 'Stylish footwear with utility. Sneakerz.',
        accountNumber: '@sneakerz',
        bannerName: nft_collection[0]?.name
      }
    };
  }, [isBrysonCollection, isShareefCollection]);

  return (
    <>
      <Seo title={config.pageTitle} description={customStyleBanner[collection_name]?.description} />
      <Grid>
        <CollectionBanner
          bannerAvatar={config?.avatar}
          bannerDescription={customStyleBanner?.description}
          bgImg={config?.banner}
          mainColor={config.mainColor}
          fullBgPosition={isBrysonCollection || isShareefCollection}
          secondaryColor={config.secondaryColor}
          {...customStyleBanner[collection_name]}
        />
        <MarketPlace />
      </Grid>
    </>
  );
};

export async function getServerSideProps({ query }) {
  try {
    if (!Object.values(COLLECTIONS_NAME).includes(query?.collection_name)) {
      return { notFound: true };
    }

    if (query.collection_name === COLLECTIONS_NAME.SNEAKERZ && !hasSneakerzSell) {
      return { notFound: true };
    }

    const collectionConfig = COLLECTION_LIST_CONFIG[query?.collection_name];
    const { nft_collection } = await gqlClient.request(GET_COLLECTION_BY_ID, {
      id: collectionConfig?.id
    });

    return {
      props: {
        nft_collection
      }
    };
  } catch {
    return {
      props: {
        nft_collection: null
      }
    };
  }
}

export default Collection;
