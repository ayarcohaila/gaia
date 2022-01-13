import { memo } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Link, useTheme } from '@mui/material';

import { Modal } from '~/components';
import { Button } from '~/base';

const SuccessPurchaseNFTModal = ({ open, onClose, tx, collectionsName }) => {
  const router = useRouter();
  const {
    palette: { white }
  } = useTheme();
  const handleClose = () => {
    router.push(router.asPath);
    onClose();
  };
  return (
    <Modal
      asset={null}
      description={`Congratulations! You have successfully purchased ${collectionsName} collectible. Here's the link of your transaction:`}
      descriptionSx={{ maxWidth: '80%', textAlign: 'center', wordBreak: 'break-word' }}
      open={open}
      onClose={handleClose}
      title="Purchase Successful"
      titleSx={{ mt: 15 }}>
      <Link
        href={`${process.env.NEXT_PUBLIC_FLOW_SCAN}transaction/${tx}`}
        sx={{
          maxWidth: '80%',
          textAlign: 'center',
          wordBreak: 'break-word',
          color: white.main
        }}
        target="_blank"
        rel="noreferrer noreferrer"
        style={{ textDecoration: 'none' }}>
        <Button>{'View on Flowscan'}</Button>
      </Link>
    </Modal>
  );
};

SuccessPurchaseNFTModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  tx: PropTypes.string,
  collectionsName: PropTypes.string
};

export default memo(SuccessPurchaseNFTModal);
