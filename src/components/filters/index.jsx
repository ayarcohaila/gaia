import { memo, useCallback, useEffect, useMemo, useReducer } from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { FilterList as FiltersIcon } from '@mui/icons-material';
import axios from 'axios';
import { capitalize, debounce } from 'lodash';
import PropTypes from 'prop-types';

import { Button } from '~/base';
import { useAppContext } from '~/context';
import CheckboxCard from './checkbox-card';
import { useBreakpoints, useToggle } from '~/hooks';
import { Accordion, Modal } from '..';
import InputRangeGroup from './input-range-group';

import { FILTERS, FILTERS_TYPES, FILTERS_IDS } from './constants';
import { ACTION_TYPE, reducer, initialState } from './reducer';
import { COLLECTION_LIST_CONFIG } from '~/../collections_setup';

import * as Styled from './styles';

const Filters = ({ orderByUpdate }) => {
  const { isExtraSmallDevice, isMediumDevice, isSmallDevice } = useBreakpoints();
  const [isMobileModalOpen, toggleMobileModal] = useToggle();

  const [state, dispatch] = useReducer(reducer, initialState);
  const { appliedFiltersCount, status, minPrice, maxPrice, collections, properties } = state;
  const { handleAppData } = useAppContext();

  const handleApplyFilters = useCallback(() => {
    dispatch({ type: ACTION_TYPE.APPLY_FILTERS });
    toggleMobileModal();
  }, [dispatch, toggleMobileModal]);

  const setFilter = useCallback(
    (filter, value) => {
      dispatch({
        type: ACTION_TYPE.SET_FILTER,
        payload: {
          filter,
          value
        }
      });
    },
    [dispatch]
  );

  const handleSingleCheck = useCallback(
    (filter, value) => {
      dispatch({
        type: ACTION_TYPE.SET_FILTER,
        payload: {
          filter,
          value
        }
      });
    },
    [dispatch]
  );

  const getNfts = useCallback(
    debounce(async filters => {
      handleAppData({ marketplaceLoading: true });
      const result = await axios.post(`/api/marketplace`, {
        ...filters
      });
      handleAppData({ marketplaceNfts: result.data.nfts, marketplaceLoading: false });
    }, 500),
    []
  );

  const appliedFilters = useMemo(() => {
    let priceFilters = [];
    let propertiesFilters = [];

    Object.values(properties)?.forEach(property => {
      Object.entries(property)?.forEach(([key, value]) => {
        Object.entries(value)?.forEach(([propKey, propValue]) => {
          if (propValue) {
            propertiesFilters.push({ metadata: { _contains: { [key]: propKey } } });
          }
        });
      });
    });

    if (minPrice) {
      priceFilters.push({ sale_offers: { parsed_price: { _gte: minPrice } } });
    }
    if (maxPrice) {
      priceFilters.push({ sale_offers: { parsed_price: { _lte: maxPrice } } });
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
      orderUpdate: orderByUpdate === null ? null : 'desc'
    };

    return filters;
  }, [collections, status, maxPrice, minPrice, properties, orderByUpdate]);

  useEffect(() => {
    getNfts(appliedFilters);
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
        if (filterName === 'selectedCollections' && option?.id === 'ballerz') {
          setFilter('selectedProperties', []);
        }
        return;
      }
      setFilter(
        filterName,
        filterArray.includes(option)
          ? filterArray.filter(item => item !== option)
          : [...filterArray, option]
      );
    },
    [setFilter, state]
  );

  const handleCheckProperties = useCallback(
    (collection, property, value) => {
      setFilter(FILTERS_IDS.PROPERTIES, {
        ...properties,
        [collection]: {
          ...properties?.[collection],
          [property]: {
            ...properties[collection]?.[property],
            [value]: !properties[collection]?.[property]?.[value]
          }
        }
      });
    },
    [properties]
  );

  const renderFilterContent = useCallback(
    ({ id, type, options }) => {
      switch (type) {
        case FILTERS_TYPES.RANGE:
          return (
            <Box mx="auto" width={isSmallDevice ? '90%' : '100%'}>
              <InputRangeGroup
                max={maxPrice}
                min={minPrice}
                maxPlaceholder="(USD) Max"
                minPlaceholder="(USD) Min"
                setMax={value => setFilter('maxPrice', value)}
                setMin={value => setFilter('minPrice', value)}
              />
            </Box>
          );

        case FILTERS_TYPES.SINGLE:
          return options.map(option => (
            <Box key={option?.id} mx="auto" width={isSmallDevice ? '90%' : '100%'}>
              <CheckboxCard
                containerProps={{ sx: { mb: 1 } }}
                isSelected={state[id] === option?.id}
                onChange={() => handleSingleCheck(id, option.id)}
                label={option?.label}
              />
            </Box>
          ));
        case FILTERS_TYPES.MULTI:
          return options.map(option => (
            <Box key={option?.id} mx="auto" width={isMediumDevice ? '90%' : '100%'}>
              <CheckboxCard
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
          {FILTERS.map((filter, index) => (
            <Accordion
              key={`$${filter?.id}-${index}`}
              contentSx={{ p: 0 }}
              hasDivider={!!index}
              title={filter?.label}>
              {renderFilterContent(filter)}
            </Accordion>
          ))}
          {collections.map(collection => {
            const currentCollection = FILTERS.find(
              item => item.id === FILTERS_IDS.COLLECTIONS
            )?.options?.find(option => option.id === collection.id);
            return (
              !!currentCollection.properties && (
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
      <Box>
        {FILTERS.map((filter, index) => (
          <Box key={filter.id} width="100%">
            {!!index && <Divider sx={{ mt: 4 }} />}
            <Typography my={4} variant="h4" textAlign="center">
              {filter?.label}
            </Typography>
            {renderFilterContent(filter)}
          </Box>
        ))}
        {collections.map(collection => {
          const currentCollection = FILTERS.find(
            item => item.id === FILTERS_IDS.COLLECTIONS
          )?.options?.find(option => option.id === collection.id);

          return (
            !!currentCollection.properties && (
              <>
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
                            onChange={() =>
                              handleCheckProperties(currentCollection.id, property, option)
                            }
                          />
                        ))}
                      </Styled.ValuesContainer>
                    </Accordion>
                  ))}
                </Box>
              </>
            )
          );
        })}
      </Box>
    ),
    [renderFilterContent, collections, properties]
  );

  return (
    <>
      {isMediumDevice ? (
        <Styled.FloatButton endIcon={<FiltersIcon />} onClick={toggleMobileModal}>
          Filters {!!appliedFiltersCount && `(${appliedFiltersCount})`}
        </Styled.FloatButton>
      ) : (
        renderContent
      )}
      {isMediumDevice && (
        <Modal
          arrowSx={{ top: -70 }}
          asset={null}
          contentSx={{ justifyContent: 'flex-start' }}
          mobileHeight={isExtraSmallDevice ? '85vh' : '77.5vh'}
          height={isMediumDevice ? '464px' : '358px'}
          open={isMobileModalOpen}
          onClose={toggleMobileModal}
          shouldRenderSwiperOnMobile
          marginTop="188px">
          {renderMobileContent}
          <Styled.BottomBar container>
            <Styled.ClearButton onClick={() => dispatch({ type: ACTION_TYPE.CLEAR_FILTERS })}>
              Clear
            </Styled.ClearButton>
            <Button onClick={handleApplyFilters}>Apply</Button>
            <Styled.CloseButton onClick={toggleMobileModal}>Close</Styled.CloseButton>
          </Styled.BottomBar>
        </Modal>
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
