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
  SNEAKERZ: 'sneakerz',
  SHAREEF_AIRDROP: 'shareef-airdrop',
  FLUNKS: 'flunks',
  HIPHOP_ARCHIVE: 'hiphop-archive'
};

export const COMING_STATUS = {
  COMING_SOON: 'coming-soon',
  SECONDARY_MKT: 'active-secondary-mkplace',
  PRIMARY_DROP: 'primary-drop-countdown'
};

export const UPCOMING_COLLECTIONS = {
  [COLLECTIONS_NAME.BALLERZ]: {
    id: process.env.NEXT_PUBLIC_BALLERZ_COLLECTION,
    buyLimit: 7,
    ipBanner: '/collections/ballerz/background.webp',
    ipLogo: '/collections/ballerz/iplogo.webp',
    secondaryColor: '#4814a6',
    collectionSize: 10000,
    comingStatus: COMING_STATUS.SECONDARY_MKT,
    collectionPath: '/ballerz',
    ipTextColor: '#FFF',
    ipMainColor: '#1d0048'
  },
  [COLLECTIONS_NAME.FLUNKS]: {
    id: COLLECTIONS_NAME.FLUNKS,
    collectionPath: '/flunks',
    comingStatus: COMING_STATUS.COMING_SOON,
    ipBanner: '/collections/flunks/background.webp',
    ipLogo: '/collections/flunks/iplogo.webp',
    ipMainColor: '#FFC6FF',
    ipTextColor: '#2b2a2b',
    collectionName: COLLECTIONS_NAME.FLUNKS
  },
  [COLLECTIONS_NAME.HIPHOP_ARCHIVE]: {
    id: COLLECTIONS_NAME.HIPHOP_ARCHIVE,
    collectionPath: '/hiphop-archive',
    comingStatus: COMING_STATUS.COMING_SOON,
    ipBanner: '/collections/hiphopArchive/background.webp',
    ipLogo: '/collections/hiphopArchive/iplogo.webp',
    ipMainColor: '#333333',
    ipTextColor: '#FFF',
    collectionName: COLLECTIONS_NAME.HIPHOP_ARCHIVE
  }
};

export const OTHER_COLLECTIONS = {
  [COLLECTIONS_NAME.SHAREEF]: {
    id: process.env.NEXT_PUBLIC_SHAREEF_COLLECTION,
    collectionName: COLLECTIONS_NAME.SHAREEF,
    collectionPath: '/shareef',
    pageTitle: "Shareef O'Neal",
    ipMainColor: '#40050F',
    ipTextColor: '#FFF',
    ipBanner: '/images/newToNFT/shareef.webp'
  },
  [COLLECTIONS_NAME.BRYSON]: {
    id: process.env.NEXT_PUBLIC_BRYSON_COLLECTION,
    collectionPath: '/bryson',
    collectionName: COLLECTIONS_NAME.BRYSON,
    pageTitle: 'Bryson DeChambeau',
    ipMainColor: '#517fb1',
    ipTextColor: '#FFF',
    ipBanner: '/images/newToNFT/bryson_banner.webp'
  }
};

export const COLLECTION_LIST_CONFIG = {
  [COLLECTIONS_NAME.SNEAKERZ]: {
    id: process.env.NEXT_PUBLIC_SNEAKERZ_COLLECTION,
    nftName: COLLECTIONS_NAME.SNEAKERZ,
    collectionName: COLLECTIONS_NAME.SNEAKERZ,
    status: COLLECTION_STATUS.SALE,
    saleType: COLLECTION_SALE_TYPE.SINGLE,
    mystery: false,
    buyLimit: 7,
    avatar: '/collections/sneakerz/avatar.webp',
    banner: '/collections/sneakerz/banner.webp',
    pageTitle: 'SNEAKERZ',
    mainColor: '#83cbda',
    secondaryColor: '#83cbda',
    collectionSize: 25000,
    collectionPath: '/sneakerz'
  },
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
    ipBanner: '/collections/ballerz/background.webp',
    ipLogo: '/collections/ballerz/iplogo.webp',
    pageTitle: 'BALLERZ',
    mainColor: '#270b5a',
    secondaryColor: '#4814a6',
    collectionSize: 10000,
    collectionPath: '/ballerz'
  },
  [COLLECTIONS_NAME.BRYSON]: {
    id: process.env.NEXT_PUBLIC_BRYSON_COLLECTION,
    nftName: COLLECTIONS_NAME.BRYSON,
    collectionName: COLLECTIONS_NAME.BRYSON,
    comingStatus: COMING_STATUS.SECONDARY_MKT,
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
    collectionPath: '/bryson'
  },
  [COLLECTIONS_NAME.SHAREEF]: {
    id: process.env.NEXT_PUBLIC_SHAREEF_COLLECTION,
    nftName: `Shareef O'Neal`,
    collectionName: COLLECTIONS_NAME.SHAREEF,
    comingStatus: COMING_STATUS.SECONDARY_MKT,
    status: COLLECTION_STATUS.SALE,
    mystery: false,
    buyLimit: 0,
    avatar: '/collections/shareef/avatar.webp',
    banner: '/collections/shareef/banner.webp',
    pageTitle: 'Shareef O’Neal',
    mainColor: '#4b1f87',
    secondaryColor: '#4b1f87',
    collectionSize: 1023,
    collectionPath: '/shareef'
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
    collectionPath: '/shareef'
  }
};

export default COLLECTION_LIST_CONFIG;
