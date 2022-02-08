export const NFL_ALL_DAY_FILTERS = {
  PLAYER_NAME: 'player_name',
  TEAM_NAME: 'team_name',
  SET_NAME: 'set_name',
  PLAY_TYPE: 'play_type',
  PLAYER_POSITION: 'player_position',
  TIER: 'tier'
};

export const initialState = {
  changedFilters: 0,
  [NFL_ALL_DAY_FILTERS.PLAYER_NAME]: '',
  [NFL_ALL_DAY_FILTERS.TEAM_NAME]: '',
  [NFL_ALL_DAY_FILTERS.SET_NAME]: '',
  [NFL_ALL_DAY_FILTERS.PLAY_TYPE]: [],
  [NFL_ALL_DAY_FILTERS.PLAYER_POSITION]: [],
  [NFL_ALL_DAY_FILTERS.TIER]: []
};

export const ACTION_TYPE = {
  APPLY_FILTERS: 'APPLY_FILTERS',
  CLEAR_FILTERS: 'CLEAR_FILTERS',
  SET_FILTER: 'SET_FILTER',
  RESET_PRICE: 'RESET_PRICE',
  RESTORE_FILTERS: 'RESTORE_FILTERS'
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPE.CLEAR_FILTERS:
      return initialState;

    case ACTION_TYPE.APPLY_FILTERS:
      return { ...state, changedFilters: 0 };

    case ACTION_TYPE.SET_FILTER: {
      const { filter, value } = action.payload;
      return { ...state, [filter]: value, changedFilters: state.changedFilters + 1 };
    }
    case ACTION_TYPE.RESTORE_FILTERS: {
      return { ...action.payload, changedFilters: 0 };
    }

    default:
      return state;
  }
}
