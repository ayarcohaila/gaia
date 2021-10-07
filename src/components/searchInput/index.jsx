import React from 'react';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import * as Styled from './styled.js';
import PropTypes from 'prop-types';

const SearchInput = ({ endAdornment = null, placeholder = 'Search', ...props }) => {
  return (
    <Styled.Search
      disableUnderline
      placeholder={placeholder}
      endAdornment={
        endAdornment || (
          <InputAdornment position="end">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        )
      }
      {...props}
    />
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string
};

export default React.memo(SearchInput);
