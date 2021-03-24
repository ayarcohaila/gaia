import React from 'react';
import Img from 'react-cool-img';
import styled from 'styled-components';

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  z-index: 0;
`;

function CustomImg({ src, alt }) {
  return <StyledImg src={src} alt={alt} />;
}

export default CustomImg;
