import { memo, useState } from 'react';

import Modal from '..';
import * as Styled from './styles';

const SellNftModal = ({ ...props }) => {
  const [value, setValue] = useState('');

  return (
    <Modal {...props}>
      <Styled.Input
        endAdornment={<Styled.CustomButton>Post For Sale</Styled.CustomButton>}
        placeholder="Enter FLOW value"
        onChange={({ target: { value: targetValue } }) => setValue(targetValue)}
        value={value}
      />
    </Modal>
  );
};

export default memo(SellNftModal);
