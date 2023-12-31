import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import preval from 'preval.macro';
import { useRouter } from 'next/router';

import Button from '~/base/button';
import Loader from '~/base/spinnerLoader';
import useBreakpoints from '~/hooks/useBreakpoints';

import Modal from '..';
import SuccessContent from '../successContent';

import { cancelSale } from '~/flow/cancelSale';
import { loadTransaction } from '~/utils/transactionsLoader';

const CancelListingModal = ({ asset, onClose, onConfirm, ...props }) => {
  const { isExtraSmallDevice } = useBreakpoints();
  const [hasListingSuccessfullyCancelled, setHasListingSuccessfullyCancelled] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [loadingCancel, setLoadingCancel] = useState(false);
  const route = useRouter();
  const cancelSaleTx = preval`
  const fs = require('fs')
  const path = require('path'),
  filePath = path.join(__dirname, "../../../flow/transactions/cancel_all_sales.cdc");
  module.exports = fs.readFileSync(filePath, 'utf8')
  `;

  const handleCancelListing = async event => {
    event.stopPropagation();
    if (asset?.sale_offers && asset?.sale_offers.length > 0) {
      const activeOffers = asset.sale_offers.filter(offer => offer.status !== 'finished');
      if (activeOffers.length > 0) {
        try {
          setLoadingCancel(true);
          const transaction = await loadTransaction(cancelSaleTx);
          const txResult = await cancelSale(transaction.transactionScript, asset?.asset_id);
          if (txResult) {
            setTransactionId(txResult);
            setLoadingCancel(false);
            onConfirm();
            setHasListingSuccessfullyCancelled(true);
          }
        } catch (err) {
          setLoadingCancel(false);
          toast.error('Transaction failed');
          console.error(err);
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
    : `This will take down your listing for ${asset?.collection?.name} #${
        asset?.template?.metadata?.id || asset?.mint_number
      }`;

  const handleClose = () => {
    route.push(route.asPath);
    onClose();
  };

  return (
    <Modal
      asset={asset}
      description={description}
      descriptionSx={{ maxWidth: '250px', mt: '12px', textAlign: 'center' }}
      height="374px"
      onClose={handleClose}
      disableCloseButton={loadingCancel}
      title={title}
      titleSx={{ mt: isExtraSmallDevice ? '120px' : 15 }}
      {...props}>
      {hasListingSuccessfullyCancelled ? (
        <SuccessContent address={asset?.owner} tx={transactionId?.txId} />
      ) : (
        <Button onClick={handleCancelListing} disabled={loadingCancel}>
          {loadingCancel ? <Loader /> : 'Confirm'}
        </Button>
      )}
    </Modal>
  );
};

CancelListingModal.propTypes = {
  asset: PropTypes.object,
  hasPostedForSale: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func
};

CancelListingModal.defaultProps = {
  asset: {
    id: 1234,
    collectionName: 'BALLERZ',
    img: 'https://pbs.twimg.com/media/FA87bFnVEAE6iKc.jpg'
  },
  onConfirm: () => {}
};

export default memo(CancelListingModal);
