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
import Accordion from '../accordion';
import InputRangeGroup from './inputRangeGroup';
import usePrevious from '~/hooks/usePrevious';

import { ACTION_TYPE, reducer, initialState, FILTERS_CONSTANTS } from './reducer';
import { COLLECTION_LIST_CONFIG } from '~/../collections_setup';

import * as Styled from './styles';
import { BALLERZ_COMPUTED_PROPERTIES } from '~/components/filters/constants';

const DEFAULT_LIST_SIZE = 40;

const VIEW_ALL = 'viewAll';
const GET_URL = '/api/marketplace';

const Filters = ({ orderByUpdate, filters, filtersTypes, filtersIds, showFilter }) => {
  const { isMediumDevice, isSmallDevice } = useBreakpoints();
  const [isMobileModalOpen, toggleMobileModal] = useToggle();
  const [hasChangeFilters, setHasChangeFilter] = useState(false);
  const { config } = useCollectionConfig();

  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    collections: config?.id
      ? [
          filters
            ?.find(item => item.id === FILTERS_CONSTANTS.COLLECTIONS)
            .options.find(item => item.id === config.id)
        ]
      : []
  });

  const [lastState, setLastState] = useState(state);

  const { appliedFiltersCount, status, minPrice, maxPrice, collections, properties } = state;
  const { appData, handleAppData } = useAppContext();

  const setFilter = useCallback(
    async (filter, value) => {
      await dispatch({
        type: ACTION_TYPE.SET_FILTER,
        payload: {
          filter,
          value
        }
      });
      if (!isMediumDevice) {
        handleAppData({ page: 0, marketplaceNfts: [] });
      } else {
        setHasChangeFilter(true);
        await dispatch({
          type: ACTION_TYPE.APPLY_FILTERS
        });
      }
    },
    [isMediumDevice, dispatch]
  );

  const handleSingleCheck = useCallback(
    async (filter, value) => {
      if (filter === FILTERS_CONSTANTS.STATUS && value === status) {
        return '';
      }

      if (filter === FILTERS_CONSTANTS.STATUS && value === VIEW_ALL) {
        dispatch({
          type: ACTION_TYPE.RESET_PRICE
        });
      }
      await dispatch({
        type: ACTION_TYPE.SET_FILTER,
        payload: {
          filter,
          value
        }
      });
      if (!isMediumDevice) {
        handleAppData({ page: 0, marketplaceNfts: [] });
      } else {
        setHasChangeFilter(true);
        await dispatch({
          type: ACTION_TYPE.APPLY_FILTERS
        });
      }
    },
    [status, dispatch, isMediumDevice]
  );

  const getNfts = useDebounce(async filters => {
    handleAppData({ marketplaceLoading: true });

    const result = await axios.post(GET_URL, {
      ...filters
    });

    const ids = [];
    const list = [];

    const unfilteredList =
      config?.id && !appData.loadMore
        ? result?.data?.nfts
        : [...appData?.marketplaceNfts, ...result?.data?.nfts];

    unfilteredList.filter(nft_item => {
      if (!ids.includes(nft_item.asset_id)) {
        ids.push(nft_item.asset_id);
        list.push(nft_item);
      }
    });

    handleAppData({
      marketplaceNfts: list,
      marketCount: result.data.marketCount,
      marketplaceLoading: false,
      loadMore: false
    });
  }, 500);

  useEffect(getNfts, [getNfts]);

  const appliedFilters = useMemo(() => {
    let priceFilters = [];
    {
      ('active');
    }
    let propertiesFilters = [];

    Object.values(properties)?.forEach(property => {
      Object.entries(property)?.forEach(([key, value]) => {
        Object.entries(value)?.forEach(([propKey, propValue]) => {
          if (propValue) {
            if (key === 'accessories') {
              propertiesFilters.push({ [key]: { _like: `%${propKey}%` } });
            } else {
              propertiesFilters.push({ [key]: { _eq: propKey } });
            }
          }
        });
      });
    });

    if (status !== 'buyNow') {
      priceFilters = [];
    } else {
      priceFilters.push({ last_active_price: { ['_gte']: minPrice ? Number(minPrice) : 0 } });
      priceFilters.push({
        last_active_price: { ['_lte']: maxPrice ? Number(maxPrice) : 2000000 }
      });
    }

    const collectionsFilter = collections?.length
      ? collections.map(item => ({
          collection_id: { _eq: item.id }
        }))
      : Object.values(COLLECTION_LIST_CONFIG).map(item => ({
          collection_id: { _eq: item.id }
        }));

    const filters = {
      price: priceFilters,
      isForSale: status === 'buyNow' ? { _eq: true } : {},
      collections: collectionsFilter,
      properties: propertiesFilters,
      offset: appData?.page * DEFAULT_LIST_SIZE,
      orderBy: appData?.marketplaceSort
    };

    return filters;
  }, [
    collections,
    status,
    maxPrice,
    minPrice,
    properties,
    orderByUpdate,
    appData?.page,
    appData?.marketplaceSort
  ]);

  useEffect(() => {
    if (!isMediumDevice) {
      getNfts(appliedFilters);
    }
  }, [getNfts, appliedFilters]);

  const handleApplyFilters = useCallback(async () => {
    handleAppData({ page: 0, marketplaceNfts: [] });
    getNfts(appliedFilters);
    setHasChangeFilter(false);
    toggleMobileModal();
  }, [getNfts, appliedFilters]);

  const handleCloseApplyFilters = useCallback(() => {
    setHasChangeFilter(false);
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
  }, [getNfts, appliedFilters]);

  const handleMultipleCheck = useCallback(
    (filterName, option) => {
      const isOptionAnObject = !!option?.id;
      const filterArray = state[filterName];

      if (isOptionAnObject) {
        setFilter(
          filterName,
          filterArray.find(item => item.id === option?.id)
            ? filterArray.filter(item => item.id !== option?.id)
            : [...filterArray, option]
        );
        if (
          filterName === FILTERS_CONSTANTS.COLLECTIONS &&
          option?.id === COLLECTION_LIST_CONFIG?.ballerz?.id
        ) {
          setFilter('properties', []);
        }
        return;
      }
      setFilter(
        filterName,
        filterArray.includes(option)
          ? filterArray.filter(item => item !== option)
          : [...filterArray, option]
      );
      handleAppData({ page: 0, marketplaceNfts: [] });
    },
    [setFilter, state]
  );

  const handleCheckProperties = useCallback(
    (collection, property, value) => {
      setFilter(filtersIds.PROPERTIES, {
        ...properties,
        [collection]: {
          ...properties?.[collection],
          [property]: {
            ...properties[collection]?.[property],
            [value]: !properties[collection]?.[property]?.[value]
          }
        }
      });
      handleAppData({ page: 0, marketplaceNfts: [] });
    },
    [properties]
  );

  const renderFilterContent = useCallback(
    ({ id, type, options }) => {
      switch (type) {
        case filtersTypes.RANGE:
          return (
            <Box mx="auto" width={isSmallDevice ? '90%' : '100%'}>
              <InputRangeGroup
                max={maxPrice}
                min={minPrice}
                disabled={status === VIEW_ALL}
                maxPlaceholder="(USD) Max"
                minPlaceholder="(USD) Min"
                setMax={value => setFilter('maxPrice', value)}
                setMin={value => setFilter('minPrice', value)}
              />
            </Box>
          );

        case filtersTypes.SINGLE:
          return options.map(option => (
            <Box key={option?.id} mx="auto" width={isMediumDevice ? '90%' : '100%'}>
              <CheckboxCard
                data-cy={`single-filter-${option?.id}`}
                containerProps={{ sx: { mb: 1 } }}
                isSelected={state[id] === option?.id}
                onChange={() => handleSingleCheck(id, option.id)}
                label={option?.label}
              />
            </Box>
          ));

        case filtersTypes.MULTI:
          return options.map(option => (
            <Box key={option?.id} mx="auto" width={isMediumDevice ? '90%' : '100%'}>
              <CheckboxCard
                data-cy={`multi-filter-${option?.label}`}
                containerProps={{ sx: { mb: 1 } }}
                isSelected={!!state[id].find(collection => collection.id === option?.id)}
                onChange={() => handleMultipleCheck(id, option)}
                label={option?.label}
              />
            </Box>
          ));
        default:
          break;
      }
    },
    [isMediumDevice, maxPrice, minPrice, collections, state]
  );

  const renderContent = useMemo(
    () => (
      <Styled.Content height="fit-content" width={isMediumDevice ? '80%' : 'auto'}>
        <Grid p="20px 22px 20px 12px" sx={{ boxSizing: 'border-box' }}>
          {filters.map((filter, index) => {
            if (config?.id && filter.id === FILTERS_CONSTANTS.COLLECTIONS) {
              return '';
            }
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
          {collections.map(collection => {
            const currentCollection = filters
              .find(item => item.id === filtersIds.COLLECTIONS)
              ?.options?.find(option => option.id === collection.id);
            return (
              !!currentCollection?.properties && (
                <Accordion
                  key={`lg-properties-${currentCollection?.id}`}
                  title={`${capitalize(currentCollection?.label)} Properties`}>
                  {Object.keys(currentCollection.properties).map(property => (
                    <Accordion key={property} title={capitalize(property)}>
                      <Styled.ValuesContainer>
                        {currentCollection.properties[property].map((option, index) => (
                          <CheckboxCard
                            key={`${property}-${option}-${index}`}
                            containerProps={{ sx: { mb: 1 } }}
                            isSelected={!!properties?.[currentCollection?.id]?.[property]?.[option]}
                            label={option}
                            amount={BALLERZ_COMPUTED_PROPERTIES[property][option]}
                            onChange={() =>
                              handleCheckProperties(currentCollection.id, property, option)
                            }
                          />
                        ))}
                      </Styled.ValuesContainer>
                    </Accordion>
                  ))}
                </Accordion>
              )
            );
          })}
        </Grid>
      </Styled.Content>
    ),
    [isMediumDevice, renderFilterContent, properties, collections]
  );

  const renderMobileContent = useMemo(
    () => (
      <Styled.CustomDrawerContent>
        {filters.map((filter, index) => {
          if (config?.id && filter.id === FILTERS_CONSTANTS.COLLECTIONS) {
            return '';
          }
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
        {collections.map(collection => {
          const currentCollection = filters
            .find(item => item.id === filtersIds.COLLECTIONS)
            ?.options?.find(option => option.id === collection.id);

          return (
            !!currentCollection?.properties && (
              <Box key={currentCollection?.id}>
                <Divider sx={{ mt: 4 }} />
                <Typography mt={2} variant="h4" textAlign="center">
                  {`${capitalize(currentCollection?.label)} Properties`}
                </Typography>
                <Box py="16px">
                  {Object.keys(currentCollection.properties).map((property, index) => (
                    <Accordion key={`${property}-${index}`} title={capitalize(property)}>
                      <Styled.ValuesContainer>
                        {currentCollection.properties[property].map(option => (
                          <CheckboxCard
                            key={`mobile-${currentCollection.id}-${property}-${option}`}
                            containerProps={{ sx: { mb: 1 } }}
                            isSelected={!!properties?.[currentCollection?.id]?.[property]?.[option]}
                            label={option}
                            amount={BALLERZ_COMPUTED_PROPERTIES[property][option]}
                            onChange={() =>
                              handleCheckProperties(currentCollection.id, property, option)
                            }
                          />
                        ))}
                      </Styled.ValuesContainer>
                    </Accordion>
                  ))}
                </Box>
              </Box>
            )
          );
        })}
      </Styled.CustomDrawerContent>
    ),
    [renderFilterContent, collections, properties]
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
            <Button data-cy="apply" onClick={handleApplyFilters} disabled={!hasChangeFilters}>
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

Filters.propTypes = {
  orderByUpdate: PropTypes.bool
};

Filters.defaultProps = {
  orderByUpdate: null
};

export default memo(Filters);
