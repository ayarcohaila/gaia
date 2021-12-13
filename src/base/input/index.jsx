import { memo } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles.js';

const Input = ({ inputMode, type, ...props }) => {
  return <Styled.Input disableUnderline inputProps={{ inputMode }} type={type} {...props} />;
};

Input.propTypes = {
  inputMode: PropTypes.string,
  type: PropTypes.string
};

Input.defaultProps = {
  inputMode: 'text',
  type: 'text'
};

export default memo(Input);
