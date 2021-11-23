import { useRouter } from 'next/router';
import collections, {
  COLLECTION_STATUS,
  COLLECTION_SALE_TYPE,
  COLLECTIONS_NAME
} from '../../collections_setup';

export default function useCollectionConfig(id) {
  const router = useRouter();

  const config = id
    ? Object.values(collections).find(collection => collection.id === id)
    : collections[router?.query?.collection_name];

  return {
    config,
    collections,
    collectionsNames: COLLECTIONS_NAME,
    statusOptions: COLLECTION_STATUS,
    saleTypeOptions: COLLECTION_SALE_TYPE
  };
}
