import { Fragment, memo, useCallback, useMemo, useReducer } from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { FilterList as FiltersIcon } from '@mui/icons-material';

import { Button } from '~/base';
import { useBreakpoints, useToggle } from '~/hooks';
import { Accordion, Modal } from '..';

import { FILTERS, FILTERS_TYPES, FILTERS_IDS } from './constants';
import CheckboxCard from './checkbox-card';
import InputRangeGroup from './input-range-group';
import { ACTION_TYPE, reducer, initialState } from './reducer';
import * as Styled from './styles';
import { capitalize } from 'lodash';

const Filters = () => {
  const { isExtraSmallDevice, isMediumDevice, isSmallDevice } = useBreakpoints();
  const [isMobileModalOpen, toggleMobileModal] = useToggle();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { appliedFiltersCount, minPrice, maxPrice, collections, properties } = state;

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
                maxPlaceholder="(Flow) Max"
                minPlaceholder="(Flow) Min"
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
        <Grid p="20px 22px 20px 12px">
          {FILTERS.map((filter, index) => (
            <Accordion
              key={filter?.id}
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
                  key={`properties-${currentCollection?.id}`}
                  title={`${capitalize(currentCollection?.id)} Properties`}>
                  {Object.keys(currentCollection.properties).map(property => (
                    <Accordion key={property} title={capitalize(property)}>
                      <Styled.ValuesContainer>
                        {currentCollection.properties[property].map(option => (
                          <CheckboxCard
                            key={`${property}-${option}`}
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
                  {`${capitalize(currentCollection.id)} Properties`}
                </Typography>
                <Box py="16px">
                  {Object.keys(currentCollection.properties).map(property => (
                    <Accordion key={property} title={capitalize(property)}>
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

export default memo(Filters);
