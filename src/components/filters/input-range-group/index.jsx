import { memo } from 'react';
import { Box, Grid } from '@mui/material';
import PropTypes from 'prop-types';

import { Input } from '~/base';

const INVALID_KEYS = ['e', 'E', '+', '-'];

const InputRangeGroup = ({ max, min, maxPlaceholder, minPlaceholder, setMax, setMin }) => {
  const handleChange = ({ target: { name, value } }) => {
    const isMinField = name === 'min';
    if (Number(value) < 1) {
      return isMinField ? setMin('') : setMax('');
    }
    return isMinField ? setMin(value) : setMax(value);
  };

  const handleKeyDown = event => {
    if (INVALID_KEYS.includes(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <Box>
      <Grid alignItems="center" container wrap="nowrap">
        <Input
          name="min"
          inputMode="numeric"
          onChange={handleChange}
          pattern="[0-9]"
          placeholder={minPlaceholder}
          type="number"
          onKeyDown={handleKeyDown}
          inputProps={{ min: 1 }}
          value={min}
        />
        <Input
          inputMode="numeric"
          ml={1}
          name="max"
          onChange={handleChange}
          pattern="[0-9]"
          onKeyDown={handleKeyDown}
          placeholder={maxPlaceholder}
          inputProps={{ min: 1 }}
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
