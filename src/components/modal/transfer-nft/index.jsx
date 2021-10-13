import { memo, useState } from 'react';
import { Typography, useTheme } from '@mui/material';

import Modal from '..';
import ModalSuccessContent from '../success-content';
import * as Styled from './styles';

const TransferNftModal = ({ ...props }) => {
  const [address, setAddress] = useState('');
  const [hasNftSuccessfullyTransfered, setHasNftSuccessfullyTransfered] = useState(false);
  const {
    palette: { error }
  } = useTheme();

  const handleSendNft = () => {
    //TODO: Implement NFT post for sale integration
    if (address) {
      setHasNftSuccessfullyTransfered(true);
    }
  };

  return (
    <Modal
      description={
        hasNftSuccessfullyTransfered
          ? 'Your NFT has been successfully transfered to:'
          : 'Enter wallet address to transfer to.'
      }
      descriptionSx={{ m: '8px 0 4px', maxWidth: '270px', textAlign: 'center' }}
      height="382px"
      title={hasNftSuccessfullyTransfered ? 'Transfered!' : 'Transfer NFT'}
      titleSx={{ mt: '96px' }}
      {...props}>
      {hasNftSuccessfullyTransfered ? (
        <ModalSuccessContent address={address} />
      ) : (
        <>
          <Typography color={error?.light} fontWeight="600" mb="24px" variant="subtitle1">
            WARNING: this action cannot be reversed.
          </Typography>
          <Styled.Input
            endAdornment={
              <Styled.CustomButton onClick={handleSendNft}>Send NFT</Styled.CustomButton>
            }
            placeholder="Enter Wallet Address"
            onChange={({ target: { value } }) => setAddress(value)}
            value={address}
          />
        </>
      )}
    </Modal>
  );
};

export default memo(TransferNftModal);
