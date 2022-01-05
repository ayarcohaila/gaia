export const FILTERS_CONSTANTS = {
  MIN_PRICE: 'minPrice',
  MAX_PRICE: 'maxPrice',
  COLLECTIONS: 'collections',
  PROPERTIES: 'properties',
  STATUS: 'status'
};

export const initialState = {
  appliedFiltersCount: 0,
  [FILTERS_CONSTANTS.MIN_PRICE]: '',
  [FILTERS_CONSTANTS.MAX_PRICE]: '',
  [FILTERS_CONSTANTS.COLLECTIONS]: [],
  [FILTERS_CONSTANTS.PROPERTIES]: {},
  [FILTERS_CONSTANTS.STATUS]: 'buyNow'
};

export const ACTION_TYPE = {
  APPLY_FILTERS: 'APPLY_FILTERS',
  CLEAR_FILTERS: 'CLEAR_FILTERS',
  SET_FILTER: 'SET_FILTER',
  RESET_PRICE: 'RESET_PRICE'
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE.APPLY_FILTERS: {
      const { minPrice, maxPrice, collections, properties } = state;
      const priceCount = minPrice || maxPrice ? 1 : 0;
      const collectionCount = collections.length ? 1 : 0;
      return {
        ...state,
        appliedFiltersCount: priceCount + collectionCount + properties.length + 1
      };
    }

    case ACTION_TYPE.CLEAR_FILTERS:
      return initialState;

    case ACTION_TYPE.SET_FILTER: {
      const { filter, value } = action.payload;
      return { ...state, [filter]: value };
    }
    case ACTION_TYPE.RESET_PRICE: {
      return { ...state, [FILTERS_CONSTANTS.MIN_PRICE]: '', [FILTERS_CONSTANTS.MAX_PRICE]: '' };
    }

    default:
      return state;
  }
}
