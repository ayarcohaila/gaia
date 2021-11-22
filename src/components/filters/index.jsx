import { Box, Grid } from '@mui/material';

import { FILTERS } from './constants';
import SelectCard from './select-card';

import { Accordion } from '..';

const Filters = () => {
  return (
    <Box bgcolor="#fff" borderRadius="16px" maxWidth="302px" ml={6} mt={6}>
      <Grid p="20px 22px 20px 12px">
        {FILTERS.map(({ id, label }) => (
          <Accordion key={id} title={label}>
            <SelectCard title="Sports" />
          </Accordion>
        ))}
      </Grid>
    </Box>
  );
};

export default Filters;
