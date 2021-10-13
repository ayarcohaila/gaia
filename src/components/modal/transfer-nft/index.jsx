import { memo, useMemo, useState } from 'react';
import { Box, Grid, IconButton, Typography, useTheme } from '@mui/material';
import { ContentCopy as CopyIcon } from '@mui/icons-material';
import { toast } from 'react-toastify';

import useCopyToClipboard from '~/hooks/useCopyToClipboard';
import Modal from '..';
import * as Styled from './styles';

const TransferNftModal = ({ ...props }) => {
  const [address, setAddress] = useState('');
  const [hasNftSuccessfullyTransfered, setHasNftSuccessfullyTransfered] = useState(false);
  const {
    palette: { error, grey }
  } = useTheme();
  const [, copy] = useCopyToClipboard();

  const handleSendNft = () => {
    //TODO: Implement NFT post for sale integration
    if (address) {
      setHasNftSuccessfullyTransfered(true);
    }
  };

  const handleCopyWalletAddress = () => {
    copy(address);
    toast.success('Wallet address copied to clipboard!');
  };

  const renderInitialContent = useMemo(
    () => (
      <>
        <Typography color={error?.light} fontWeight="600" mb="24px" variant="subtitle1">
          WARNING: this action cannot be reversed.
        </Typography>
        <Styled.Input
          endAdornment={<Styled.CustomButton onClick={handleSendNft}>Send NFT</Styled.CustomButton>}
          placeholder="Enter Wallet Address"
          onChange={({ target: { value } }) => setAddress(value)}
          value={address}
        />
      </>
    ),
    [address, handleSendNft]
  );

  const renderFinalContent = useMemo(
    () => (
      <Grid
        alignItems="center"
        bgcolor={grey[300]}
        borderRadius="10px"
        container
        height="56px"
        justifyContent="space-between"
        maxWidth="254px"
        mt="24px"
        p="14px 20px 20px">
        <Typography color={grey[600]} fontFamily="IBMPlexMono" fontWeight="600" variant="subtitle1">
          Wallet:
        </Typography>
        <Box width="104px">
          <Typography
            color={grey[700]}
            fontFamily="IBMPlexMono"
            fontWeight="600"
            noWrap
            variant="subtitle1">
            {address}
          </Typography>
        </Box>
        <IconButton p="0" onClick={handleCopyWalletAddress}>
          <CopyIcon sx={{ color: grey[700], fontSize: '14px' }} />
        </IconButton>
      </Grid>
    ),
    [address, copy]
  );

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
      {hasNftSuccessfullyTransfered ? renderFinalContent : renderInitialContent}
    </Modal>
  );
};

export default memo(TransferNftModal);
