import { useState } from 'react';
import PropTypes from 'prop-types';

import { truncate } from '~/utils/string';

import { Container, Text, RectangleTop, RectangleBottom, RectangleContainer } from './styled';

const Address = ({ children }) => {
  const [isFocused, setFocused] = useState(false);
  const shortenedAddress = truncate(children, 5, -3, '...');

  const copyToClipboard = () => {
    setFocused(true);
    navigator.clipboard.writeText(children);
    setTimeout(() => {
      setFocused(false);
    }, 3000);
  };

  return (
    <Container className="address" onClick={copyToClipboard} {...{ isFocused }}>
      <Text>{shortenedAddress}</Text>
      <RectangleContainer>
        <RectangleTop />
        <RectangleBottom />
      </RectangleContainer>
    </Container>
  );
};

Address.propTypes = {
  children: PropTypes.string.isRequired
};

export default Address;
