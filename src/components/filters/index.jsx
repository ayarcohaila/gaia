import { memo, useCallback } from 'react';
import { Box, Grid } from '@mui/material';

import { FILTERS } from './constants';
import SelectCard from './select-card';

import { Accordion } from '..';

const Filters = () => {
  const renderOptions = useCallback(
    options =>
      options.map(({ id, ...props }) => (
        <SelectCard key={id} containerProps={{ sx: { mb: 1 } }} {...props} />
      )),
    []
  );

  return (
    <Box bgcolor="#fff" borderRadius="16px" maxWidth="302px" ml={6} mt={6}>
      <Grid p="20px 22px 20px 12px">
        {FILTERS.map(({ id, label, options }) => (
          <Accordion key={id} title={label}>
            {!!options?.length && renderOptions(options)}
          </Accordion>
        ))}
      </Grid>
    </Box>
  );
};

export default memo(Filters);
