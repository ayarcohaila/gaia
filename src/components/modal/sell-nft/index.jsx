import { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import { loadTransaction } from '../../../utils/transactionsLoader';
import { isDapper } from '~/utils/currencyCheck';
import { sellItem } from '~/flow/sell';

import SuccessContent from '../success-content';
import Modal from '..';

import * as Styled from './styles';

const SellNftModal = ({
  hasPostedForSale,
  onClose,
  onConfirm,
  setLoading,
  loading,
  transaction,
  ...props
}) => {
  const [value, setValue] = useState('');

  const router = useRouter();
  const [tx, setTx] = useState(null);
  const [hasNftSuccessfullyPostedForSale, setHasNftSuccessfullyPostedForSale] =
    useState(hasPostedForSale);

  const handlePostForSale = async () => {
    //TODO: Implement NFT post for sale integration

    toast.info('Please wait, purchase in progress... ');
    try {
      setLoading(true);
      const txResult = await sellItem(transaction, props.asset.asset_id, value);
      toast.success(
        'Purchase completed successfully. In few minutes it will be available on the market'
      );
      if (txResult) {
        onConfirm();
        setHasNftSuccessfullyPostedForSale(true);
        setTx(txResult?.txId);
        setValue('');
        router.push('/ballerz');
      }
    } catch (err) {
      toast.error('Unable to complete purchase.');
      console.error(err);
    }
    setLoading(false);
  };

  const title = hasNftSuccessfullyPostedForSale ? 'Posted for  sale!' : 'Sell NFT';
  const description = hasNftSuccessfullyPostedForSale
    ? 'Your NFT has been successfully posted for sale:'
    : 'Enter sale price in FLOW';

  useEffect(() => {
    setHasNftSuccessfullyPostedForSale(hasPostedForSale);
  }, [hasPostedForSale]);

  return (
    <Modal description={description} onClose={onClose} title={title} {...props}>
      {hasNftSuccessfullyPostedForSale ? (
        <SuccessContent tx={tx} />
      ) : (
        <Styled.Input
          endAdornment={
            <Styled.CustomButton onClick={handlePostForSale} disabled={loading}>
              {loading ? <CircularProgress size={32} color="white" /> : 'Post For Sale'}
            </Styled.CustomButton>
          }
          placeholder="Enter FLOW value"
          onChange={({ target: { value: targetValue } }) => setValue(targetValue)}
          type="number"
          value={value}
        />
      )}
    </Modal>
  );
};

SellNftModal.propTypes = {
  hasPostedForSale: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  setLoading: PropTypes.func,
  loading: PropTypes.bool
};

SellNftModal.defaultProps = {
  setLoading: () => {},
  loading: false
};

export async function getServerSideProps() {
  const transaction = loadTransaction(isDapper ? 'sell' : 'sell_flowtoken');
  return {
    props: { transaction }
  };
}

export default memo(SellNftModal);
