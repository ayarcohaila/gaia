import { memo, useCallback, useMemo, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { FilterList as FiltersIcon } from '@mui/icons-material';

import { useBreakpoints, useToggle } from '~/hooks';
import { Accordion, Modal } from '..';

import { FILTERS } from './constants';
import CheckboxCard from './checkbox-card';
import InputRangeGroup from './input-range-group';
import * as Styled from './styles';

const Filters = () => {
  const { isSmallDevice } = useBreakpoints();
  const [isMobileModalOpen, toggleMobileModal] = useToggle();
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();

  const renderFilterContent = useCallback(
    ({ id, options }) => {
      if (id === 'collection') {
        return options.map(option => (
          <CheckboxCard
            key={option?.id}
            containerProps={{ sx: { mb: 1 } }}
            id={option?.id}
            label={option?.label}
            selectedOptions={selectedCollections}
            setSelectedOptions={setSelectedCollections}
          />
        ));
      }

      return (
        <InputRangeGroup
          max={maxPrice}
          min={minPrice}
          maxPlaceholder="(Flow) Max"
          minPlaceholder="(Flow) Min"
          setMax={setMaxPrice}
          setMin={setMinPrice}
        />
      );
    },
    [selectedCollections, setSelectedCollections, minPrice, maxPrice]
  );

  const renderContent = useMemo(
    () => (
      <Box
        bgcolor="#fff"
        borderRadius="16px"
        maxWidth="302px"
        ml={6}
        mt={6}
        width={isSmallDevice ? '80%' : 'auto'}>
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
      </Box>
    ),
    [renderFilterContent]
  );

  const renderMobileContent = useMemo(() => {
    {
      return FILTERS.map(filter => (
        <Box key={filter?.id} width="90%">
          <Typography my={4} variant="h4" textAlign="center">
            {filter?.label}
          </Typography>
          {renderFilterContent(filter)}
        </Box>
      ));
    }
  }, [renderFilterContent]);

  return (
    <>
      {isSmallDevice ? (
        <Styled.FloatButton endIcon={<FiltersIcon />} onClick={toggleMobileModal}>
          Filters (2)
        </Styled.FloatButton>
      ) : (
        renderContent
      )}
      {isSmallDevice && (
        <Modal asset={null} open={isMobileModalOpen} onClose={toggleMobileModal}>
          {renderMobileContent}
        </Modal>
      )}
    </>
  );
};

export default memo(Filters);
