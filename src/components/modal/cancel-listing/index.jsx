import { memo, useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from '~/base';
import useBreakpoints from '~/hooks/useBreakpoints';

import Modal from '..';
import SuccessContent from '../success-content';

const CancelListingModal = ({ asset, onClose, onConfirm, ...props }) => {
  const { isExtraSmallDevice } = useBreakpoints();
  const [hasListingSuccessfullyCancelled, setHasListingSuccessfullyCancelled] = useState(false);

  const handleCancelListing = () => {
    //TODO: Implement cancel listing integration
    onConfirm();
    setHasListingSuccessfullyCancelled(true);
  };

  const title = hasListingSuccessfullyCancelled ? 'Cancelled' : 'Cancel Listing';
  const description = hasListingSuccessfullyCancelled
    ? 'Your listing has been successfully cancelled'
    : `This will take down your listing for ${asset?.collectionName} #${asset?.id}`;

  return (
    <Modal
      asset={asset}
      description={description}
      descriptionSx={{ maxWidth: '250px', mt: '12px', textAlign: 'center' }}
      height="374px"
      onClose={onClose}
      title={title}
      titleSx={{ mt: isExtraSmallDevice ? '120px' : '84px' }}
      {...props}>
      {hasListingSuccessfullyCancelled ? (
        <SuccessContent />
      ) : (
        <Button onClick={handleCancelListing}>Confirm</Button>
      )}
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
