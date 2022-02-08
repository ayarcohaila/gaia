import {
  BALLERZ_PROPERTIES,
  SHAREEF_PROPERTIES
} from '~/components/filters/filtersDefault/constants';
import { COLLECTION_LIST_CONFIG, COLLECTIONS_NAME } from '~/../collections_setup';

export const FILTERS_TYPES = {
  SINGLE: 'single',
  MULTI: 'multi',
  RANGE: 'range'
};

export const FILTERS_IDS = {
  PRICE: 'price',
  STATUS: 'status',
  COLLECTIONS: 'collections',
  PROPERTIES: 'properties',
  RARITY: 'rarity'
};

export const FILTERS = [
  {
    id: FILTERS_IDS.PRICE,
    label: 'Price',
    type: FILTERS_TYPES.RANGE
  },
  {
    id: FILTERS_IDS.STATUS,
    label: 'Status',
    type: FILTERS_TYPES.SINGLE,
    options: [
      {
        id: 'buyNow',
        label: 'Buy Now'
      },
      {
        id: 'viewAll',
        label: 'View All'
      }
    ]
  },
  {
    id: FILTERS_IDS.COLLECTIONS,
    label: 'Collection',
    type: FILTERS_TYPES.MULTI,
    options: [
      {
        id: COLLECTION_LIST_CONFIG.ballerz.id,
        label: 'BALLERZ',
        properties: BALLERZ_PROPERTIES
      },
      {
        id: COLLECTION_LIST_CONFIG.bryson.id,
        label: 'Bryson DeChambeau'
      },
      {
        id: COLLECTION_LIST_CONFIG.shareef.id,
        label: COLLECTION_LIST_CONFIG.shareef.nftName,
        properties: SHAREEF_PROPERTIES
      }
    ]
  }
];
