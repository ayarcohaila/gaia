import React from 'react';
import * as Styled from './styles.js';
import PropTypes from 'prop-types';

const Divider = ({ customProps, ...props }) => {
  return <Styled.Divider customProps={customProps} {...props} />;
};

Divider.propTypes = {
  customProps: PropTypes.shape({})
};

Divider.defaultProps = {
  customProps: {}
};
export default React.memo(Divider);
