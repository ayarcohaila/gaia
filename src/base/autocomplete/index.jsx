import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import * as Styled from './styles.js';

const AutocompleteInput = ({ options, placeholder, value, onChange, ...props }) => {
  return (
    <Styled.Autocomplete
      options={options}
      value={value}
      onChange={onChange}
      renderInput={params => <TextField {...params} label={placeholder} />}
    />
  );
};

AutocompleteInput.defaultProps = {
  placeholder: 'Search...',
  options: [],
  styles: {}
};

export default React.memo(AutocompleteInput);
