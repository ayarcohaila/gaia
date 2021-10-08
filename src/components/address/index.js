import { useState } from 'react';
import PropTypes from 'prop-types';

import { truncate } from '~/utils/string';

import * as styled from './styled';

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
    <styled.Container className="address" onClick={copyToClipboard} {...{ isFocused }}>
      <styled.Text>{shortenedAddress}</styled.Text>
      <styled.RectangleContainer>
        <styled.RectangleTop />
        <styled.RectangleBottom />
      </styled.RectangleContainer>
    </styled.Container>
  );
};

Address.propTypes = {
  children: PropTypes.string.isRequired
};

export default Address;
