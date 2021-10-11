import { memo, useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '..';
import * as Styled from './styles';

const SellNftModal = ({ onClose, onConfirm, ...props }) => {
  const [value, setValue] = useState('');

  const handlePostForSale = () => {
    //TODO: Implement NFT post for sale integration
    onConfirm();
    onClose();
  };

  return (
    <Modal description="Enter sale price in FLOW" onClose={onClose} title="Sell NFT" {...props}>
      <Styled.Input
        endAdornment={
          <Styled.CustomButton onClick={handlePostForSale}>Post For Sale</Styled.CustomButton>
        }
        placeholder="Enter FLOW value"
        onChange={({ target: { value: targetValue } }) => setValue(targetValue)}
        type="number"
        value={value}
      />
    </Modal>
  );
};

SellNftModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default memo(SellNftModal);
