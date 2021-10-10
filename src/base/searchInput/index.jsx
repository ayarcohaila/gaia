import React from 'react';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import * as Styled from './styles.js';
import PropTypes from 'prop-types';

const SearchInput = ({ endAdornment, placeholder, styles, ...props }) => {
  return (
    <Styled.Search
      disableUnderline
      placeholder={placeholder}
      styles={styles}
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
  endAdornment: PropTypes.node,
  styles: PropTypes.object
};

SearchInput.defaultProps = {
  placeholder: 'Search',
  endAdornment: null,
  styles: {}
};

export default React.memo(SearchInput);
