import { memo } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles.js';

const Input = ({ type, ...props }) => {
  return (
    <Styled.Input
      disableUnderline
      inputProps={{ inputMode: type === 'number ' ? 'numeric' : 'text' }}
      type={type}
      {...props}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string
};

Input.defaultProps = {
  type: 'text'
};

export default memo(Input);
