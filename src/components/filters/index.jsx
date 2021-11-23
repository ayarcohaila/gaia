import { memo, useCallback, useState } from 'react';
import { Box, Grid } from '@mui/material';

import { Accordion } from '..';
import { Button, Input } from '~/base';

import { FILTERS } from './constants';
import SelectCard from './select-card';

const Filters = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();

  const renderFilterContent = useCallback(
    ({ id, options }) => {
      switch (id) {
        case 'category':
          return options.map(({ id, ...props }) => (
            <SelectCard
              key={id}
              containerProps={{ sx: { mb: 1 } }}
              id={id}
              selectedOptions={selectedCategories}
              setSelectedOptions={setSelectedCategories}
              {...props}
            />
          ));

        case 'price':
          return (
            <Box>
              <Grid alignItems="center" container wrap="nowrap">
                <Input
                  onChange={({ target }) => setMinPrice(target.value)}
                  placeholder="(Flow) Min"
                  type="number"
                  value={minPrice}
                />
                <Input
                  ml={1}
                  onChange={({ target }) => setMaxPrice(target.value)}
                  placeholder="(Flow) Max"
                  type="number"
                  value={maxPrice}
                />
              </Grid>
              <Button disabled={!minPrice && !maxPrice} fullWidth>
                Apply
              </Button>
            </Box>
          );

        default:
          null;
      }
    },
    [selectedCategories, setSelectedCategories, minPrice, maxPrice]
  );

  return (
    <Box bgcolor="#fff" borderRadius="16px" maxWidth="302px" ml={6} mt={6}>
      <Grid p="20px 22px 20px 12px">
        {FILTERS.map(filter => (
          <Accordion key={filter?.id} contentSx={{ p: 0 }} title={filter?.label}>
            {renderFilterContent(filter)}
          </Accordion>
        ))}
      </Grid>
    </Box>
  );
};

export default memo(Filters);
