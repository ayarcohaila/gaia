import React from 'react';

import Seo from '~/components/seo';
import Collections from '~/components/collections';
import { gqlClient } from '~/config/apolloClient';

import { COLLECTION_LIST_CONFIG } from '../../../collections_setup';
import { GET_LOWER_NFT_PRICE_BY_COLLECTION } from '~/store/server/queries';

export default function CollectionsPage(props: any) {
  const { collections } = props;

  return (
    <>
      <Seo />
      <Collections collections={collections}></Collections>
    </>
  );
}

export async function getServerSideProps() {
  const collections = Object.values(COLLECTION_LIST_CONFIG)
    .map(collection => collection)
    .filter(collection => collection.displayOnCollectionsPage);

  const nftsPromise = collections.map(async collection => {
    if (!collection.displayOnCollectionsPage) return;

    const promise = gqlClient.request(GET_LOWER_NFT_PRICE_BY_COLLECTION, {
      collection_id: collection.id
    });

    return promise;
  });

  const allPromise = await (await Promise.all(nftsPromise)).filter(nft => nft !== null);
  const collectionsMapped = collections.map((collections, index) => {
    return {
      config: collections,
      nft: allPromise[index].nft[0]
    };
  });

  return { props: { collections: collectionsMapped } };
}
