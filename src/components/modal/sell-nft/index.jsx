import { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '..';
import SuccessContent from '../success-content';
import * as Styled from './styles';

import { sellItem } from '~/flow/sell';
import { toast } from 'react-toastify';

const SellNftModal = ({ hasPostedForSale, onClose, onConfirm, ...props }) => {
  const [value, setValue] = useState('');
  const [hasNftSuccessfullyPostedForSale, setHasNftSuccessfullyPostedForSale] =
    useState(hasPostedForSale);

  const handlePostForSale = async () => {
    //TODO: Implement NFT post for sale integration

    toast.info('Please wait, purchase in progress... ');
    try {
      const txResult = await sellItem(props.asset.asset_id, value);
      toast.success(`Purchase completed successfully. - ${txResult?.txId}`);
      if (txResult) {
        onConfirm();
        setHasNftSuccessfullyPostedForSale(true);
        setValue('');
      }
      // @TODO: Include success modal here
    } catch (err) {
      toast.error('Unable to complete purchase.');
      console.error(err);
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
