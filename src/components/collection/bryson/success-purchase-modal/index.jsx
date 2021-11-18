import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link, useTheme } from '@mui/material';

import { Modal } from '~/components';

const SuccessPurchaseNFTModal = ({ open, onClose, tx }) => {
  const {
    palette: { grey }
  } = useTheme();

  return (
    <Modal
      asset={null}
      description="Congratulations! You have successfully purchased Bryson's collectible. Here's the link of your transaction:"
      descriptionSx={{ maxWidth: '80%', textAlign: 'center', wordBreak: 'break-word' }}
      open={open}
      onClose={onClose}
      title="Purchase Successful"
      titleSx={{ my: 4 }}>
      <Link
        href={`https://flowscan.org/transaction/${tx}`}
        sx={{
          color: grey[600],
          maxWidth: '80%',
          textAlign: 'center',
          wordBreak: 'break-word'
        }}
        target="_blank"
        underline="hover">{`https://flowscan.org/transaction/${tx}`}</Link>
    </Modal>
  );
};

SuccessPurchaseNFTModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  tx: PropTypes.string.isRequired
};

export default memo(SuccessPurchaseNFTModal);
