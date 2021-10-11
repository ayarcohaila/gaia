import { memo } from 'react';
import PropTypes from 'prop-types';

import Modal from '..';
import { Button } from '~/base';
import useBreakpoints from '~/hooks/useBreakpoints';

const CancelListingModal = ({ asset, onClose, onConfirm, ...props }) => {
  const { isExtraSmallDevice } = useBreakpoints();

  const handleCancelListing = () => {
    //TODO: Implement cancel listing integration
    onClose();
    onConfirm();
  };

  return (
    <Modal
      asset={asset}
      description={`This will take down your listing for ${asset?.collectionName} #${asset?.id}`}
      descriptionSx={{ maxWidth: '250px', mt: '12px', textAlign: 'center' }}
      height="374px"
      onClose={onClose}
      title="Cancel Listing"
      titleSx={{ mt: isExtraSmallDevice ? '120px' : '72px' }}
      {...props}>
      <Button onClick={handleCancelListing}>Confirm</Button>
    </Modal>
  );
};

CancelListingModal.propTypes = {
  asset: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

CancelListingModal.defaultProps = {
  asset: {
    id: 1234,
    collectionName: 'BALLERZ',
    image: 'https://pbs.twimg.com/media/FA87bFnVEAE6iKc.jpg'
  }
};

export default memo(CancelListingModal);
