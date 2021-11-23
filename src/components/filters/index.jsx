import { memo, useCallback, useState } from 'react';
import { Box, Grid } from '@mui/material';

import { Accordion } from '..';

import { FILTERS } from './constants';
import CheckboxCard from './checkbox-card';
import InputRangeGroup from './input-range-group';

const Filters = () => {
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

  return (
    <Box bgcolor="#fff" borderRadius="16px" maxWidth="302px" ml={6} mt={6}>
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
  );
};

export default memo(Filters);
