import { memo } from 'react';
import PropTypes from 'prop-types';
import { ChevronRight as ArrowRightIcon } from '@mui/icons-material';
import { useRouter } from 'next/router';

import { Button } from '~/base';
import { useBreakpoints } from '~/hooks';
import { COLLECTION_LIST_CONFIG } from '~/../collections_setup';

import Modal from '..';

const PurchaseNFTModal = ({ asset, onClose, ...props }) => {
  const title = 'Order Complete!';
  const router = useRouter();

  const { isSmallDevice } = useBreakpoints();
  const description = `Congratulations, you are now the
  proud owner of ${
    Object.values(COLLECTION_LIST_CONFIG)?.find(item => item.id === asset?.collection_id)?.mystery
      ? `${asset.collection.name.toUpperCase()} #????`
      : asset?.template?.metadata?.title
  }`;

  const handleClose = () => {
    router.push(router.asPath);
    onClose();
  };

  return (
    <Modal
      asset={asset}
      description={description}
      onClose={handleClose}
      title={title}
      descriptionSx={{ fontWeight: '600', maxWidth: '280px', mt: '16px', textAlign: 'center' }}
      height="300px"
      mobileHeight="50vh"
      titleSx={{ mt: isSmallDevice ? '50px' : '70px' }}
      {...props}>
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
