import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link, useTheme } from '@mui/material';

import { Modal } from '~/components';
import { Button } from '~/base';

const SuccessPurchaseNFTModal = ({ open, onClose, tx }) => {
  const {
    palette: { white }
  } = useTheme();

  return (
    <Modal
      asset={null}
      description="Congratulations! You have successfully purchased Bryson's collectible. Here's the link of your transaction:"
      descriptionSx={{ maxWidth: '80%', textAlign: 'center', wordBreak: 'break-word' }}
      open={open}
      onClose={onClose}
      title="Purchase Successful"
      titleSx={{ mt: 15 }}>
      <Link
        component={Button}
        href={`https://flowscan.org/transaction/${tx}`}
        sx={{
          maxWidth: '80%',
          textAlign: 'center',
          wordBreak: 'break-word',
          color: white.main
        }}
        target="_blank">
        {'View on Flowscan'}
      </Link>
    </Modal>
  );
};

SuccessPurchaseNFTModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  tx: PropTypes.string
};

export default memo(SuccessPurchaseNFTModal);
