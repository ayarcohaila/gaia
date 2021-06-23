import React from 'react';
import PropTypes from 'prop-types';
import LogoStyled from './LogoStyled.js';

function Logo({ color = 'black' }) {
  return <LogoStyled alt="gaia" src={`/static/img/gaia_logo-${color}.png`} />;
}

Logo.propTypes = {
  color: PropTypes.oneOf(['black', 'white'])
};

export default Logo;
