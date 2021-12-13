import PropTypes from 'prop-types';

import * as Styled from './styles';

const Button = ({ children, ...props }) => {
  return <Styled.Button {...props}>{children}</Styled.Button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
