import React from 'react';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import * as Styled from './styles.js';
import PropTypes from 'prop-types';

const SearchInput = ({ endAdornment, placeholder, ...props }) => {
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
  placeholder: PropTypes.string,
  endAdornment: PropTypes.node
};

SearchInput.defaultProps = {
  placeholder: 'Search',
  endAdornment: null
};

export default React.memo(SearchInput);
