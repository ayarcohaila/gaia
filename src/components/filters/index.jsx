import { Fragment, memo, useCallback, useMemo, useReducer } from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { FilterList as FiltersIcon } from '@mui/icons-material';

import { Button } from '~/base';
import { useBreakpoints, useToggle } from '~/hooks';
import { Accordion, Modal } from '..';

import { FILTERS } from './constants';
import CheckboxCard from './checkbox-card';
import InputRangeGroup from './input-range-group';
import { ACTION_TYPE, reducer, initialState } from './reducer';
import * as Styled from './styles';

const Filters = () => {
  const { isExtraSmallDevice, isSmallDevice } = useBreakpoints();
  const [isMobileModalOpen, toggleMobileModal] = useToggle();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { appliedFiltersCount, minPrice, maxPrice, selectedCollections } = state;

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

  const renderFilterContent = useCallback(
    ({ id, options }) => {
      if (id === 'collection') {
        return options.map(option => (
          <Box key={option?.id} mx="auto" width={isSmallDevice ? '90%' : '100%'}>
            <CheckboxCard
              containerProps={{ sx: { mb: 1 } }}
              id={option?.id}
              isSelected={selectedCollections.includes(option?.id)}
              onChange={() =>
                setFilter(
                  'selectedCollections',
                  selectedCollections.includes(option?.id)
                    ? selectedCollections.filter(filter => filter !== option?.id)
                    : [...selectedCollections, option?.id]
                )
              }
              label={option?.label}
            />
          </Box>
        ));
      }

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
    },
    [isSmallDevice, minPrice, maxPrice, selectedCollections]
  );

  const renderContent = useMemo(
    () => (
      <Styled.Content width={isSmallDevice ? '80%' : 'auto'}>
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
        </Grid>
      </Styled.Content>
    ),
    [isSmallDevice, renderFilterContent]
  );

  const renderMobileContent = useMemo(() => {
    {
      return FILTERS.map((filter, index) => (
        <Fragment key={filter?.id}>
          <Box width="100%">
            {!!index && <Divider sx={{ mt: 4 }} />}
            <Typography my={4} variant="h4" textAlign="center">
              {filter?.label}
            </Typography>
            {renderFilterContent(filter)}
          </Box>
          <Styled.BottomBar container>
            <Styled.ClearButton onClick={() => dispatch({ type: ACTION_TYPE.CLEAR_FILTERS })}>
              Clear
            </Styled.ClearButton>
            <Button onClick={handleApplyFilters}>Apply</Button>
            <Styled.CloseButton onClick={toggleMobileModal}>Close</Styled.CloseButton>
          </Styled.BottomBar>
        </Fragment>
      ));
    }
  }, [renderFilterContent]);

  return (
    <>
      {isSmallDevice ? (
        <Styled.FloatButton endIcon={<FiltersIcon />} onClick={toggleMobileModal}>
          Filters {!!appliedFiltersCount && `(${appliedFiltersCount})`}
        </Styled.FloatButton>
      ) : (
        renderContent
      )}
      {isSmallDevice && (
        <Modal
          arrowSx={{ top: -70 }}
          asset={null}
          contentSx={{ justifyContent: 'flex-start' }}
          mobileHeight={isExtraSmallDevice ? '85vh' : '65vh'}
          open={isMobileModalOpen}
          onClose={toggleMobileModal}>
          {renderMobileContent}
        </Modal>
      )}
    </>
  );
};

export default memo(Filters);
