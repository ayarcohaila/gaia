import { memo, useState, useCallback, useEffect, useMemo, useReducer } from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { FilterList as FiltersIcon } from '@mui/icons-material';
import axios from 'axios';
import capitalize from 'lodash.capitalize';
import PropTypes from 'prop-types';

import Button from '~/base/button';
import { useAppContext } from '~/context/appProvider';
import CheckboxCard from './checkboxCard';
import useBreakpoints from '~/hooks/useBreakpoints';
import useToggle from '~/hooks/useToggle';
import useCollectionConfig from '~/hooks/useCollectionConfig';
import useDebounce from '~/hooks/useDebounce';
import Accordion from '~/components/accordion';
import Input from '~/base/input';
import Autocomplete from '~/base/autocomplete';
import usePrevious from '~/hooks/usePrevious';
import { ParsedTaxonomy } from '~/pages/api/nfl/filtersOptions';
import { ACTION_TYPE, reducer, initialState, NFL_ALL_DAY_FILTERS } from './reducer';
import { COLLECTION_LIST_CONFIG, COLLECTIONS_NAME } from '~/../collections_setup';

const sortFilterOptions = options => {
  if (options?.length > 1) {
    return options.sort((a, b) => {
      if (a.label < b.label) {
        return -1;
      }
      if (a.label > b.label) {
        return 1;
      }
      return 0;
    });
  }
  return options;
};

import * as Styled from './styles';

const DEFAULT_LIST_SIZE = 40;

const VIEW_ALL = 'viewAll';
const GET_URL = '/api/nfl/editions';
const GET_FILTERS_PROPERTIES = '/api/nfl/filtersOptions';

const NFL_ALL_DAY_FILTERS_TYPES = {
  MULTI: 'multi',
  TEXT: 'text',
  AUTOCOMPLETE: 'autocomplete'
};

const FiltersNFL = ({
  orderByUpdate,
  filtersTypes = NFL_ALL_DAY_FILTERS_TYPES,
  filtersIds = NFL_ALL_DAY_FILTERS,
  showFilter
}) => {
  const { isMediumDevice, isSmallDevice } = useBreakpoints();
  const [isMobileModalOpen, toggleMobileModal] = useToggle();
  const [hasChangeFilters, setHasChangeFilter] = useState(false);
  const { config } = useCollectionConfig();
  const { appData, handleAppData } = useAppContext();

  const filters = useMemo(
    () => [
      {
        id: NFL_ALL_DAY_FILTERS.PLAYER_NAME,
        label: 'Player Name',
        type: NFL_ALL_DAY_FILTERS_TYPES.AUTOCOMPLETE,
        options: appData?.filters?.player_name
      },
      {
        id: NFL_ALL_DAY_FILTERS.TEAM_NAME,
        label: 'Team Name',
        type: NFL_ALL_DAY_FILTERS_TYPES.AUTOCOMPLETE,
        options: appData?.filters?.team_name
      },
      {
        id: NFL_ALL_DAY_FILTERS.SET_NAME,
        label: 'Set Name',
        type: NFL_ALL_DAY_FILTERS_TYPES.AUTOCOMPLETE,
        options: appData?.filters?.set_name
      },
      {
        id: NFL_ALL_DAY_FILTERS.PLAYER_POSITION,
        label: 'Player Position',
        type: NFL_ALL_DAY_FILTERS_TYPES.MULTI,
        options: appData?.filters?.player_position
      },
      {
        id: NFL_ALL_DAY_FILTERS.PLAY_TYPE,
        label: 'Play Type',
        type: NFL_ALL_DAY_FILTERS_TYPES.MULTI,
        options: appData?.filters?.play_type
      },
      {
        id: NFL_ALL_DAY_FILTERS.TIER,
        label: 'Tier',
        type: NFL_ALL_DAY_FILTERS_TYPES.MULTI,
        options: appData?.filters?.tier
      }
    ],
    [appData?.filters, NFL_ALL_DAY_FILTERS_TYPES]
  );

  const [state, dispatch] = useReducer(reducer, {
    ...initialState
  });

  const [lastState, setLastState] = useState(state);
  const { appliedFiltersCount } = state;

  const setFilter = useCallback(
    async (filter, value) => {
      await dispatch({
        type: ACTION_TYPE.SET_FILTER,
        payload: {
          filter,
          value
        }
      });
    },
    [isMediumDevice, dispatch]
  );
  const appliedFilters = useMemo(() => {
    const filters = {
      ...(state.player_name && { player_name: state.player_name.value }),
      ...(state.team_name && { team_name: state.team_name.value }),
      ...(state.set_name && { set_name: state.set_name.value }),
      ...(state.player_position.length > 0 && { player_position: state.player_position }),
      ...(state.play_type.length > 0 && { play_type: state.play_type }),
      ...(state.tier.length > 0 && { tier: state.tier }),
      limit: DEFAULT_LIST_SIZE,
      offset: appData?.loadMore ? (appData?.page || 1) * DEFAULT_LIST_SIZE : 0,
      orderBy: appData?.marketplaceSort || { min_list_price: 'asc' }
    };

    return { ...filters };
  }, [appData?.page, appData?.marketplaceSort, state]);

  const getNfts = useDebounce(async filters => {
    handleAppData({ marketplaceLoading: true });

    const result = await axios.post(GET_URL, {
      ...filters
    });

    const { data } = await axios.post(GET_FILTERS_PROPERTIES, {});

    const appendedList =
      config?.id && !appData.loadMore
        ? result?.data?.nfts
        : [...appData?.marketplaceNfts, ...result?.data?.nfts];

    handleAppData({
      marketplaceNfts: appendedList,
      marketCount: result.data.marketCount,
      marketplaceLoading: false,
      filters: data.filters
    });
  }, 500);

  useEffect(() => {
    if (appliedFilters) {
      getNfts(appliedFilters);
    }
  }, [getNfts, appliedFilters]);

  useEffect(() => {
    if (isMediumDevice && hasChangeFilters) {
      setHasChangeFilter(false);
      getNfts(appliedFilters);
    }
  }, [isMediumDevice, getNfts, hasChangeFilters, appliedFilters]);

  useEffect(() => {
    if (isMediumDevice && appData.page) {
      getNfts(appliedFilters);
    }
  }, [isMediumDevice, getNfts, appData.pag, appliedFilters]);

  const handleCloseApplyFilters = useCallback(() => {
    dispatch({ type: ACTION_TYPE.RESTORE_FILTERS, payload: lastState });
    toggleMobileModal();
  }, [lastState]);

  const handleToggleFilters = useCallback(() => {
    setLastState(state);
    toggleMobileModal();
  }, [state, setLastState]);

  const handleClearFilters = useCallback(() => {
    handleAppData({ page: 0, marketplaceNfts: [] });
    dispatch({ type: ACTION_TYPE.CLEAR_FILTERS });
    getNfts(appliedFilters);
    toggleMobileModal();
  }, [getNfts]);

  const handleApplyFilters = useCallback(() => {
    setHasChangeFilter(true);
    dispatch({ type: ACTION_TYPE.APPLY_FILTERS });
    toggleMobileModal();
  }, [setHasChangeFilter]);

  useEffect(() => {
    if (isMediumDevice && isMobileModalOpen) {
      window.document.getElementsByTagName('html')[0].classList.add('stop-scrolling');
      window.document.body.classList.add('stop-scrolling');
    }
    return () => {
      window.document.getElementsByTagName('html')[0].classList.remove('stop-scrolling');
      window.document.body.classList.remove('stop-scrolling');
    };
  }, [isMediumDevice, isMobileModalOpen]);

  const handleMultipleCheck = useCallback(
    (filterName, option) => {
      const currentValue = state?.[filterName];
      const wasIncluded = currentValue && !!currentValue?.find(item => item === option);

      if (wasIncluded) {
        setFilter(
          filterName,
          currentValue.filter(item => item !== option)
        );
      } else {
        if (currentValue) {
          setFilter(filterName, [...currentValue, option]);
        } else {
          setFilter(filterName, [option]);
        }
      }
    },
    [setFilter, state]
  );

  const renderFilterContent = useCallback(
    ({ id, type, options }) => {
      const filteredOptions = options?.filter(opt => opt.value !== undefined);
      switch (type) {
        case filtersTypes.AUTOCOMPLETE:
          return (
            <Box
              mx="auto"
              mb="16px"
              mt="6px"
              p={isSmallDevice ? '0 15px' : '0'}
              width={isSmallDevice ? '90%' : '100%'}>
              <Autocomplete
                value={state[id]}
                options={sortFilterOptions(filteredOptions)}
                placeholder={'Search'}
                onChange={(event, newValue) => setFilter(id, newValue)}
              />
            </Box>
          );
        case filtersTypes.MULTI:
          return sortFilterOptions(options)?.map(option => {
            return (
              <Box key={option?.value} mx="auto" width={isMediumDevice ? '90%' : '100%'}>
                <CheckboxCard
                  data-cy={`multi-filter-${option?.label}`}
                  containerProps={{ sx: { mb: 1 } }}
                  isSelected={!!state?.[id]?.find(items => items === option?.value)}
                  onChange={() => handleMultipleCheck(id, option?.value)}
                  label={option?.label}
                />
              </Box>
            );
          });
        default:
          break;
      }
    },
    [isMediumDevice, state, setFilter, handleMultipleCheck]
  );

  const renderContent = useMemo(
    () => (
      <Styled.Content height="fit-content" width={isMediumDevice ? '80%' : 'auto'}>
        <Grid sx={{ boxSizing: 'border-box' }}>
          {filters.map((filter, index) => {
            return (
              <Accordion
                key={`$${filter?.id}-${index}`}
                contentSx={{ p: 0 }}
                hasDivider={!!index}
                title={filter?.label}>
                {renderFilterContent(filter)}
              </Accordion>
            );
          })}
        </Grid>
      </Styled.Content>
    ),
    [filters, isMediumDevice, renderFilterContent]
  );

  const renderMobileContent = useMemo(
    () => (
      <Styled.CustomDrawerContent>
        {filters.map((filter, index) => {
          return (
            <Box key={filter.id} width="100%">
              {!!index && <Divider sx={{ mt: 4 }} />}
              <Typography my={4} variant="h4" textAlign="center">
                {filter?.label}
              </Typography>
              {renderFilterContent(filter)}
            </Box>
          );
        })}
      </Styled.CustomDrawerContent>
    ),
    [filters, renderFilterContent]
  );

  return (
    <>
      {isMediumDevice ? (
        <Styled.FloatButton
          data-cy="button-filter-medium-device"
          endIcon={<FiltersIcon />}
          onClick={handleToggleFilters}>
          Filters {!!appliedFiltersCount && `(${appliedFiltersCount})`}
        </Styled.FloatButton>
      ) : (
        showFilter && renderContent
      )}
      {isMediumDevice && (
        <Styled.CustomDrawer
          hideBackdrop
          anchor="bottom"
          open={isMobileModalOpen}
          onClose={toggleMobileModal}>
          {renderMobileContent}
          <Styled.BottomBar container>
            <Styled.ClearButton onClick={handleClearFilters}>Clear</Styled.ClearButton>
            <Button
              data-cy="apply"
              disabled={state.changedFilters === 0}
              onClick={handleApplyFilters}>
              Apply
            </Button>
            <Styled.CloseButton data-cy="close" onClick={handleCloseApplyFilters}>
              Close
            </Styled.CloseButton>
          </Styled.BottomBar>
        </Styled.CustomDrawer>
      )}
    </>
  );
};

FiltersNFL.propTypes = {
  orderByUpdate: PropTypes.bool
};

FiltersNFL.defaultProps = {
  orderByUpdate: null
};

export default memo(FiltersNFL);
