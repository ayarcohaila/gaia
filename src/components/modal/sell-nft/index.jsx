import { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { CircularProgress, Grid } from '@mui/material';
import axios from 'axios';
import preval from 'preval.macro';
import { useRouter } from 'next/router';

import Modal from '..';
import SuccessContent from '../success-content';
import { loadTransaction } from '../../../utils/transactionsLoader';
import { isDapper } from '~/utils/currencyCheck';
import { sellItem } from '~/flow/sell';
import { useBreakpoints } from '~/hooks';

import * as Styled from './styles';

const SellNftModal = ({ hasPostedForSale, onClose, onConfirm, setLoading, loading, ...props }) => {
  const [value, setValue] = useState('');
  const route = useRouter();
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
      await axios.post('/api/update-transaction-status', {
        filters: {
          collection_id: { _eq: props.asset.collection_id },
          asset_id: { _eq: props.asset.asset_id },
          mint_number: { _eq: props.asset.mint_number }
        }
      });
      if (txResult) {
        onConfirm();
        setTx(txResult?.txId);
        setHasNftSuccessfullyPostedForSale(true);
        setValue('');
      }
    } catch (err) {
      toast.error('Unable to complete listing');
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

  const handleClose = () => {
    route.push(route.asPath);
    onClose();
  };

  return (
    <Modal
      description={description}
      descriptionSx={{ textAlign: 'center' }}
      onClose={handleClose}
      title={title}
      titleSx={{ mt: '120px' }}
      mobileHeight={isExtraSmallDevice ? '70vh' : '60vh'}
      {...props}>
      {hasNftSuccessfullyPostedForSale ? (
        <SuccessContent address={props.asset.owner} tx={tx} />
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
            <Styled.FeeText feeValue>5%</Styled.FeeText>
            <Styled.FeeText>Creator Royalty</Styled.FeeText>
            <Styled.FeeText feeValue>5%</Styled.FeeText>
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
