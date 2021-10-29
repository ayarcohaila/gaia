import { memo, useState } from 'react';
import { Typography, useTheme } from '@mui/material';
import { toast } from 'react-toastify';

import { Loader } from '~/base';
import Modal from '..';
import { transferNft } from '../../../flow/transferNft';
import ModalSuccessContent from '../success-content';

import * as Styled from './styles';
import { loadTransaction } from '~/utils/transactionsLoader';

const TransferNftModal = ({ ...props }) => {
  const [address, setAddress] = useState('');
  const [tx, setTx] = useState(null);
  const [hasNftSuccessfullyTransfered, setHasNftSuccessfullyTransfered] = useState(false);
  const [loadingTransfer, setLoadingTransfer] = useState(false);
  const {
    palette: { error }
  } = useTheme();

  const handleSendNft = async address => {
    toast.info('Please wait, transfer in progress... ');
    setLoadingTransfer(true);
    try {
      const transaction = await loadTransaction(window.location.origin, 'transfer_nft');
      const txResult = await transferNft(
        transaction.transactionScript,
        address,
        props.asset.asset_id
      );
      toast.success(`Transfer completed successfully. - ${txResult?.txId}`);
      setTx(txResult?.txId);
      setLoadingTransfer(false);
      setHasNftSuccessfullyTransfered(true);
    } catch (err) {
      setLoadingTransfer(false);
      toast.error('Unable to complete transference.');
      console.error(err);
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
        <ModalSuccessContent address={address} tx={tx} />
      ) : (
        <>
          <Typography color={error?.light} fontWeight="600" mb="24px" variant="subtitle1">
            WARNING: this action cannot be reversed.
          </Typography>
          <Styled.Input
            endAdornment={
              <Styled.CustomButton
                onClick={() => handleSendNft(address)}
                sx={{ width: loadingTransfer ? '240px' : '180px' }}
                disabled={loadingTransfer}>
                {loadingTransfer ? <Loader /> : 'Send NFT'}
              </Styled.CustomButton>
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
