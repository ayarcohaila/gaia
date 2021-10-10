import { memo, useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '..';
import * as Styled from './styles';

const SellNftModal = ({ onClose, ...props }) => {
  const [value, setValue] = useState('');

  const handlePostForSale = () => {
    //TODO: Implement NFT post for sale integration
    onClose();
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

SellNftModal.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default memo(SellNftModal);
