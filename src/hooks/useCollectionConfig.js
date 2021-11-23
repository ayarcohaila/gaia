import { useMemo } from 'react';
import { useRouter } from 'next/router';
import collections, {
  COLLECTION_STATUS,
  COLLECTION_SALE_TYPE,
  COLLECTIONS_NAME
} from '../../collections_setup';

export default function useCollectionConfig(id) {
  const {
    query: { collection_name }
  } = useRouter();

  const config = useMemo(
    () =>
      id
        ? Object.values(collections).find(collection => collection.id === id)
        : collections[collection_name],
    [id, collection_name]
  );

  return {
    config,
    collections,
    collectionsNames: COLLECTIONS_NAME,
    statusOptions: COLLECTION_STATUS,
    saleTypeOptions: COLLECTION_SALE_TYPE
  };
}
