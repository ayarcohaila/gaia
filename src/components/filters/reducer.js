export const initialState = {
  appliedFiltersCount: 0,
  minPrice: '',
  maxPrice: '',
  selectedCollections: []
};

export const ACTION_TYPE = {
  APPLY_FILTERS: 'APPLY_FILTERS',
  CLEAR_FILTERS: 'CLEAR_FILTERS',
  SET_FILTER: 'SET_FILTER'
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE.APPLY_FILTERS: {
      const { maxPrice, minPrice, selectedCollections } = state;
      const priceCount = minPrice || maxPrice ? 1 : 0;
      const collectionCount = selectedCollections.length ? 1 : 0;
      return { ...state, appliedFiltersCount: priceCount + collectionCount };
    }

    case ACTION_TYPE.CLEAR_FILTERS:
      return initialState;

    case ACTION_TYPE.SET_FILTER: {
      const { filter, value } = action.payload;
      return { ...state, [filter]: value };
    }
    default:
      return;
  }
}
