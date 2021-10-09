import { useState } from 'react';
import PropTypes from 'prop-types';

import { truncate } from '~/utils/string';

import * as Styled from './styles';

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
    <Styled.Container className="address" onClick={copyToClipboard} {...{ isFocused }}>
      <Styled.Text>{shortenedAddress}</Styled.Text>
      <Styled.RectangleContainer>
        <Styled.RectangleTop />
        <Styled.RectangleBottom />
      </Styled.RectangleContainer>
    </Styled.Container>
  );
};

Address.propTypes = {
  children: PropTypes.string.isRequired
};

export default Address;
