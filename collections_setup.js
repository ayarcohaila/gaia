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
  BRYSON: 'bryson',
  SHAREEF: 'shareef',
  SHAREEF_AIRDROP: 'shareef-airdrop',
  NFL: 'nfl-all-day'
};

export const COLLECTION_LIST_CONFIG = {
  [COLLECTIONS_NAME.BALLERZ]: {
    id: process.env.NEXT_PUBLIC_BALLERZ_COLLECTION,
    nftName: 'baller',
    collectionName: COLLECTIONS_NAME.BALLERZ,
    status: COLLECTION_STATUS.SALE,
    saleType: COLLECTION_SALE_TYPE.MULTIPLE,
    mystery: false,
    buyLimit: 7,
    avatar: '/collections/ballerz/avatar.webp',
    banner: '/collections/ballerz/banner.webp',
    pageTitle: 'BALLERZ',
    mainColor: '#270b5a',
    secondaryColor: '#4814a6',
    collectionSize: 10000,
    displayOnCollectionsPage: true
  },
  [COLLECTIONS_NAME.BRYSON]: {
    id: process.env.NEXT_PUBLIC_BRYSON_COLLECTION,
    nftName: COLLECTIONS_NAME.BRYSON,
    collectionName: COLLECTIONS_NAME.BRYSON,
    status: COLLECTION_STATUS.SALE,
    saleType: COLLECTION_SALE_TYPE.SINGLE,
    mystery: false,
    buyLimit: 0,
    avatar: '/collections/bryson/avatar.webp',
    banner: '/collections/bryson/video-poster.webp',
    pageTitle: 'Bryson DeChambeau',
    mainColor: '#517fb1',
    secondaryColor: '#517fb1',
    collectionSize: 5000,
    displayOnCollectionsPage: true
  },
  [COLLECTIONS_NAME.SHAREEF]: {
    id: process.env.NEXT_PUBLIC_SHAREEF_COLLECTION,
    nftName: `Shareef O'Neal`,
    collectionName: COLLECTIONS_NAME.SHAREEF,
    status: COLLECTION_STATUS.SALE,
    mystery: false,
    buyLimit: 0,
    avatar: '/collections/shareef/avatar.webp',
    banner: '/collections/shareef/banner.webp',
    pageTitle: 'Shareef O’Neal',
    mainColor: '#4b1f87',
    secondaryColor: '#4b1f87',
    collectionSize: 1023,
    displayOnCollectionsPage: true
  },
  [COLLECTIONS_NAME.SHAREEF_AIRDROP]: {
    id: process.env.NEXT_PUBLIC_SHAREEF_AIRDROP_COLLECTION,
    nftName: 'Shareef O’Neal - Birthday',
    collectionName: COLLECTIONS_NAME.SHAREEF_AIRDROP,
    status: COLLECTION_STATUS.SALE,
    mystery: false,
    buyLimit: 0,
    avatar: '/collections/shareef/avatar.webp',
    banner: '/collections/shareef/banner.webp',
    pageTitle: 'Shareef O’Neal NFTs',
    mainColor: '#4b1f87',
    secondaryColor: '#4b1f87',
    collectionSize: 1023,
    displayOnCollectionsPage: true
  },
  [COLLECTIONS_NAME.NFL]: {
    id: process.env.NEXT_PUBLIC_NFLALLDAY_COLLECTION,
    nftName: 'NFL',
    collectionName: COLLECTIONS_NAME.NFL,
    status: COLLECTION_STATUS.SALE,
    mystery: false,
    buyLimit: 0,
    avatar: '/collections/nfl/avatar-white.svg',
    banner: '/collections/nfl/banner.webp',
    pageTitle: 'NFL All Day',
    mainColor: '#000000',
    secondaryColor: '#00000',
    collectionSize: 0,
    displayOnCollectionsPage: false
  }
};

export default COLLECTION_LIST_CONFIG;
