import { memo } from 'react';
import PropTypes from 'prop-types';
import { ChevronRight as ArrowRightIcon } from '@mui/icons-material';

import { Button } from '~/base';
import Modal from '..';
import SuccessContent from '../success-content';

import { useAuth, useBreakpoints } from '~/hooks';

const SHOULD_HIDE_DATA = process.env.NEXT_PUBLIC_MYSTERY_IMAGE === 'true';

const PurchaseNFTModal = ({ asset, onClose, tx, ...props }) => {
  const { user } = useAuth();
  const title = 'Order Complete!';
  const { isSmallDevice } = useBreakpoints();
  const description = `Congratulations, you are now the
  proud owner of ${SHOULD_HIDE_DATA ? 'BALLER #????' : asset?.nft?.template?.metadata?.title}`;

  return (
    <Modal
      asset={asset}
      description={description}
      onClose={onClose}
      title={title}
      descriptionSx={{ maxWidth: '280px', mt: '16px', textAlign: 'center' }}
      height="518px"
      mobileHeight="77.5vh"
      titleSx={{ mt: '108px' }}
      {...props}>
      <SuccessContent address={user?.addr} tx={tx} />
      <Button
        endIcon={<ArrowRightIcon />}
        onClick={onClose}
        sx={{
          height: isSmallDevice ? 'auto' : '40px',
          mt: '24px'
        }}>{`Go to My Ballerz`}</Button>
    </Modal>
  );
};

PurchaseNFTModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func,
  tx: PropTypes.string,
  asset: PropTypes.object.isRequired
};

PurchaseNFTModal.defaultProps = {
  onConfirm: () => {},
  tx: ''
};

export default memo(PurchaseNFTModal);
