import { memo } from 'react';
import PropTypes from 'prop-types';
import { Typography, useTheme } from '@mui/material';
import { ChevronRight as ArrowRightIcon } from '@mui/icons-material';

import { Button } from '~/base';
import { useBreakpoints, useCollectionConfig } from '~/hooks';

import Modal from '..';

const PurchaseNFTModal = ({ asset, onClose, ...props }) => {
  const { config } = useCollectionConfig();
  const title = 'Order Complete!';

  const { isExtraSmallDevice, isSmallDevice } = useBreakpoints();
  const {
    palette: { grey }
  } = useTheme();
  const description = `Congratulations, you are now the
  proud owner of ${
    config.mystery ? `${config.nftName.toUpperCase()} #????` : asset?.nft?.template?.metadata?.title
  }`;

  return (
    <Modal
      asset={asset}
      description={description}
      onClose={onClose}
      title={title}
      descriptionSx={{ fontWeight: '600', maxWidth: '280px', mt: '16px', textAlign: 'center' }}
      height="518px"
      mobileHeight={isExtraSmallDevice ? '80vh' : '75vh'}
      titleSx={{ mt: isSmallDevice ? '108px' : '24px' }}
      {...props}>
      <Typography
        sx={{
          color: grey[600],
          fontWeight: '600',
          m: '8px 0 24px',
          maxWidth: '80%',
          textAlign: 'center'
        }}
        variant="h5">
        <Typography
          component="span"
          sx={{ color: grey[600], fontWeight: '600', textDecoration: 'underline' }}
          variant="h5">
          Please Note
        </Typography>
        : To ensure fairness, BALLERZ listings have been randomized for everyone. The identity of
        your BALLER will be revealed on Wednesday, November 10.
      </Typography>
      <Button
        endIcon={<ArrowRightIcon />}
        onClick={onClose}
        sx={{
          height: isSmallDevice ? 'auto' : '40px',
          mt: '24px'
        }}>
        Go to My Account
      </Button>
    </Modal>
  );
};

PurchaseNFTModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func,
  asset: PropTypes.object.isRequired
};

PurchaseNFTModal.defaultProps = {
  onConfirm: () => {}
};

export default memo(PurchaseNFTModal);
