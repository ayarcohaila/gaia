export const COLLECTION_STATUS = {
  NOT_STARTED: 'not started',
  SALE: 'sale',
  PAUSED: 'paused',
  FINISHED: 'finished'
};

export const COLLECTION_SALE_TYPE = {
  SINGLE: 'single',
  MULTIPLE: 'multiple',
  TIER: 'tier'
};

export const COLLECTIONS_NAME = {
  BALLERZ: 'ballerz',
  BRYSON: 'bryson'
};

export const COLLECTION_LIST_CONFIG = {
  [COLLECTIONS_NAME.BALLERZ]: {
    id: 2,
    wallet: process.env.NEXT_PUBLIC_BALLERZ_COLLECTION,
    nftName: 'baller',
    collectionName: COLLECTIONS_NAME.BALLERZ,
    status: COLLECTION_STATUS.PAUSED,
    saleType: COLLECTION_SALE_TYPE.MULTIPLE,
    mystery: false,
    buyLimit: 7,
    avatar: '/collections/ballerz/avatar.png',
    banner: '/collections/ballerz/banner.png'
  },
  [COLLECTIONS_NAME.BRYSON]: {
    id: 4,
    wallet: process.env.NEXT_PUBLIC_BRYSON_COLLECTION,
    nftName: COLLECTIONS_NAME.BRYSON,
    collectionName: COLLECTIONS_NAME.BRYSON,
    status: COLLECTION_STATUS.SALE,
    saleType: COLLECTION_SALE_TYPE.SINGLE,
    mystery: false,
    buyLimit: 0,
    avatar: '/collections/bryson/avatar.webp',
    banner: ''
  }
};

export default COLLECTION_LIST_CONFIG;
