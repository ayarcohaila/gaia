import { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';

import { Button } from '~/base';
import { useBreakpoints } from '~/hooks';

import Modal from '..';
import SuccessContent from '../success-content';

import { cancelSale } from '~/flow/cancelSale';

const CancelListingModal = ({ asset, hasPostedForSale, onClose, onConfirm, ...props }) => {
  const { isExtraSmallDevice } = useBreakpoints();
  const [hasListingSuccessfullyCancelled, setHasListingSuccessfullyCancelled] = useState(false);
  const [loadingCancel, setLoadingCancel] = useState(false);

  // console.log(asset);

  const handleCancelListing = async () => {
    if (asset?.sale_offers && asset?.sale_offers.length > 0) {
      const activeOffers = asset.sale_offers.filter(offer => offer.status !== 'finished');
      if (activeOffers.length > 0) {
        for (let offer of activeOffers) {
          try {
            setLoadingCancel(true);
            const txResult = await cancelSale(offer.listing_resource_id);
            setLoadingCancel(false);
            if (txResult) {
              onConfirm();
              setHasListingSuccessfullyCancelled(true);
            }
          } catch (err) {
            toast.error('Transaction failed');
            console.error(err);
          }
        }
      } else {
        toast.error('No active offers');
      }
    } else {
      toast.error('No active offers');
    }
  };

  const title = hasListingSuccessfullyCancelled ? 'Cancelled' : 'Cancel Listing';
  const description = hasListingSuccessfullyCancelled
    ? 'Your listing has been successfully cancelled'
    : `This will take down your listing for ${asset?.collectionName} #${asset?.template?.metadata?.number}`;

  useEffect(() => {
    setHasListingSuccessfullyCancelled(!hasPostedForSale);
  }, [hasPostedForSale]);

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
        <Button onClick={handleCancelListing} disabled={loadingCancel}>
          {loadingCancel ? <CircularProgress size={32} color="white" /> : 'Confirm'}
        </Button>
      )}
    </Modal>
  );
};

CancelListingModal.propTypes = {
  asset: PropTypes.object,
  hasPostedForSale: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

CancelListingModal.defaultProps = {
  asset: {
    id: 1234,
    collectionName: 'BALLERZ',
    img: 'https://pbs.twimg.com/media/FA87bFnVEAE6iKc.jpg'
  }
};

export default memo(CancelListingModal);
