import { memo } from 'react';
import { Box, Grid } from '@mui/material';
import PropTypes from 'prop-types';

import { Input } from '~/base';

const InputRangeGroup = ({ max, min, maxPlaceholder, minPlaceholder, setMax, setMin }) => {
  return (
    <Box>
      <Grid alignItems="center" container wrap="nowrap">
        <Input
          inputMode="numeric"
          onChange={({ target }) => setMin(target.value)}
          pattern="[0-9]"
          placeholder={minPlaceholder}
          type="number"
          value={min}
        />
        <Input
          inputMode="numeric"
          ml={1}
          onChange={({ target }) => setMax(target.value)}
          pattern="[0-9]"
          placeholder={maxPlaceholder}
          type="number"
          value={max}
        />
      </Grid>
    </Box>
  );
};

InputRangeGroup.propTypes = {
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  maxPlaceholder: PropTypes.string,
  minPlaceholder: PropTypes.string,
  setMax: PropTypes.func.isRequired,
  setMin: PropTypes.func.isRequired
};

InputRangeGroup.defaultProps = {
  maxPlaceholder: 'Maximum',
  minPlaceholder: 'Minimum'
};

export default memo(InputRangeGroup);
