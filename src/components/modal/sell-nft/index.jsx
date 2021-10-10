import { memo, useState } from 'react';

import Modal from '..';
import * as Styled from './styles';

const SellNftModal = ({ ...props }) => {
  const [value, setValue] = useState('');

  const handlePostForSale = () => {
    //TODO: Implement NFT post for sale integration
  };

  return (
    <Modal description="Enter sale price in FLOW" title="Sell NFT" {...props}>
      <Styled.Input
        endAdornment={
          <Styled.CustomButton onClick={handlePostForSale}>Post For Sale</Styled.CustomButton>
        }
        type="number"
        placeholder="Enter FLOW value"
        onChange={({ target: { value: targetValue } }) => setValue(targetValue)}
        value={value}
      />
    </Modal>
  );
};

export default memo(SellNftModal);
