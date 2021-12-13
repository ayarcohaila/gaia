import { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { CircularProgress, Grid } from '@mui/material';
import { loadTransaction } from '../../../utils/transactionsLoader';
import { isDapper } from '~/utils/currencyCheck';
import { sellItem } from '~/flow/sell';

import SuccessContent from '../success-content';
import Modal from '..';

import * as Styled from './styles';
import preval from 'preval.macro';
import { useBreakpoints } from '~/hooks';

const SellNftModal = ({ hasPostedForSale, onClose, onConfirm, setLoading, loading, ...props }) => {
  const [value, setValue] = useState('');

  const { isExtraSmallDevice } = useBreakpoints();
  const [tx, setTx] = useState(null);
  const [hasNftSuccessfullyPostedForSale, setHasNftSuccessfullyPostedForSale] =
    useState(hasPostedForSale);
  const sellTx = isDapper
    ? preval`
    const fs = require('fs')
    const path = require('path'),
    filePath = path.join(__dirname, "../../../flow/transactions/dapper/sell.cdc");
    module.exports = fs.readFileSync(filePath, 'utf8')
    `
    : preval`
    const fs = require('fs')
    const path = require('path'),
    filePath = path.join(__dirname, "../../../flow/transactions/flowToken/sell.cdc");
    module.exports = fs.readFileSync(filePath, 'utf8')
    `;

  const handlePostForSale = async () => {
    try {
      setLoading(true);
      const transaction = await loadTransaction(sellTx);
      const txResult = await sellItem(
        transaction.transactionScript,
        props.asset.asset_id,
        value,
        props.asset.collection.collection_id
      );
      toast.success(
        'Sale offer completed successfully. In few minutes it will be available on the market'
      );
      if (txResult) {
        onConfirm();
        setHasNftSuccessfullyPostedForSale(true);
        setTx(txResult?.txId);
        setValue('');
        onClose();
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
    : 'Enter sale price in USD';

  useEffect(() => {
    setHasNftSuccessfullyPostedForSale(hasPostedForSale);
  }, [hasPostedForSale]);

  return (
    <Modal
      description={description}
      descriptionSx={{ textAlign: 'center' }}
      onClose={onClose}
      title={title}
      titleSx={{ mt: 15 }}
      mobileHeight={isExtraSmallDevice ? '70vh' : '60vh'}
      {...props}>
      {hasNftSuccessfullyPostedForSale ? (
        <SuccessContent tx={tx} />
      ) : (
        <Grid container alignItems="center" justifyContent="center" direction="column">
          <Styled.Input
            endAdornment={
              <Styled.CustomButton onClick={handlePostForSale} disabled={loading}>
                {loading ? <CircularProgress size={32} color="white" /> : 'Post For Sale'}
              </Styled.CustomButton>
            }
            placeholder="USD Sale Price"
            onChange={({ target: { value: targetValue } }) => setValue(targetValue)}
            type="number"
            value={value}
          />
          <Styled.FeesContent>
            <Styled.FeeText>Marketplace Fee</Styled.FeeText>
            <Styled.FeeText feeValue>2.5%</Styled.FeeText>
            <Styled.FeeText>Creator Royalty</Styled.FeeText>
            <Styled.FeeText feeValue>10.0%</Styled.FeeText>
          </Styled.FeesContent>
        </Grid>
      )}
    </Modal>
  );
};

SellNftModal.propTypes = {
  hasPostedForSale: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func,
  setLoading: PropTypes.func,
  loading: PropTypes.bool
};

SellNftModal.defaultProps = {
  setLoading: () => {},
  onConfirm: () => {},
  loading: false
};

export default memo(SellNftModal);
