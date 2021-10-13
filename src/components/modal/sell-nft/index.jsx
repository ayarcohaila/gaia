import { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '..';
import SuccessContent from '../success-content';
import * as Styled from './styles';

const SellNftModal = ({ hasPostedForSale, onClose, onConfirm, ...props }) => {
  const [value, setValue] = useState('');
  const [hasNftSuccessfullyPostedForSale, setHasNftSuccessfullyPostedForSale] =
    useState(hasPostedForSale);

  const handlePostForSale = () => {
    //TODO: Implement NFT post for sale integration
    if (value) {
      onConfirm();
      setHasNftSuccessfullyPostedForSale(true);
      setValue('');
    }
  };

  const title = hasNftSuccessfullyPostedForSale ? 'Posted for  sale!' : 'Sell NFT';
  const description = hasNftSuccessfullyPostedForSale
    ? 'Your NFT has been successfully posted for sale:'
    : 'Enter sale price in FLOW';

  useEffect(() => {
    setHasNftSuccessfullyPostedForSale(hasPostedForSale);
  }, [hasPostedForSale]);

  return (
    <Modal description={description} onClose={onClose} title={title} {...props}>
      {hasNftSuccessfullyPostedForSale ? (
        <SuccessContent />
      ) : (
        <Styled.Input
          endAdornment={
            <Styled.CustomButton onClick={handlePostForSale}>Post For Sale</Styled.CustomButton>
          }
          placeholder="Enter FLOW value"
          onChange={({ target: { value: targetValue } }) => setValue(targetValue)}
          type="number"
          value={value}
        />
      )}
    </Modal>
  );
};

SellNftModal.propTypes = {
  hasPostedForSale: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default memo(SellNftModal);
