import { memo, useEffect, useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { CircularProgress, Grid } from '@mui/material';
import preval from 'preval.macro';
import { useRouter } from 'next/router';

import axios from 'axios';

import Modal from '..';
import SuccessContent from '../successContent';
import { loadTransaction } from '../../../utils/transactionsLoader';
import { isDapper } from '~/utils/currencyCheck';
import { sellItem } from '~/flow/sell';
import useBreakpoints from '~/hooks/useBreakpoints';

import * as Styled from './styles';

const SellNftModal = ({
  hasPostedForSale,
  onClose,
  onConfirm,
  setLoading,
  loading,
  collectionId,
  ...props
}) => {
  const [value, setValue] = useState('');
  const route = useRouter();
  const { isExtraSmallDevice } = useBreakpoints();
  const [tx, setTx] = useState(null);
  const [hasNftSuccessfullyPostedForSale, setHasNftSuccessfullyPostedForSale] =
    useState(hasPostedForSale);
  const [valueError, setValueError] = useState(false);
  const [isFloorPriceError, setIsFloorPriceError] = useState(false);
  const [belowFloorPercentage, setBelowFloorPercentage] = useState(null);
  const [errorText, setErrorText] = useState('');
  const buttonDisable = useMemo(
    () => loading || valueError || !value || isFloorPriceError,
    [loading, valueError, value, isFloorPriceError]
  );

  const getCollectionFloorValueById = async collectionId => {
    try {
      const response = await axios.post('/api/collectionFloorPrice', {
        collectionId
      });
      return response.data.floorPrice;
    } catch (error) {
      console.error(error);
    }
  };

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

  const checkFloorValue = async () => {
    setLoading(true);
    const floorPrice = await getCollectionFloorValueById(collectionId);
    const minFloorPrice = (floorPrice / 100) * 90;
    if (floorPrice > 0 && value <= minFloorPrice) {
      let floorPercentage = (100 - (value * 100) / floorPrice).toFixed(2);
      setBelowFloorPercentage(floorPercentage);
      setIsFloorPriceError(true);
    } else {
      handlePostForSale();
    }
    setLoading(false);
  };

  const handlePostForSale = async () => {
    try {
      setLoading(true);
      setIsFloorPriceError(false);
      const transaction = await loadTransaction(sellTx);
      const txResult = await sellItem(
        transaction.transactionScript,
        props.asset.asset_id,
        value,
        props.asset.collection.collection_id
      );
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

  const handleValue = useCallback(({ target: { value } }) => {
    const parsedValue = value.replace(/[^0-9]/g, '');
    setValue(parsedValue);
    setIsFloorPriceError(false);
    if (Number(parsedValue) < 1 && parsedValue !== '') {
      setValueError(true);
      setErrorText('Value must be $1 or greater.');
    } else if (Number(parsedValue) > 2000000) {
      setValueError(true);
      setErrorText(`Value must be $2,000,000 or lower.`);
    } else {
      setValueError(false);
      setErrorText('');
    }
  }, []);

  const handleClose = () => {
    route.push(route.asPath);
    onClose();
  };

  const handleStartOver = () => {
    setValue('');
    setIsFloorPriceError(false);
  };

  return (
    <Modal
      description={description}
      descriptionSx={{ textAlign: 'center' }}
      onClose={handleClose}
      title={title}
      disableCloseButton={loading}
      titleSx={{ mt: '120px' }}
      mobileHeight={isFloorPriceError ? '75vh' : isExtraSmallDevice ? '70vh' : '60vh'}
      height={isFloorPriceError ? '450px' : '350px'}
      {...props}>
      {hasNftSuccessfullyPostedForSale ? (
        <SuccessContent address={props.asset.owner} tx={tx} />
      ) : (
        <Grid container alignItems="center" justifyContent="center" direction="column">
          <Styled.Input
            endAdornment={
              <Styled.CustomButton onClick={checkFloorValue} disabled={buttonDisable}>
                {loading ? <CircularProgress size={32} color="white" /> : 'Post For Sale'}
              </Styled.CustomButton>
            }
            placeholder="USD Sale Price"
            onChange={handleValue}
            value={value}
            error={valueError}
          />
          {valueError && <Styled.InputError error>{errorText}</Styled.InputError>}
          {isFloorPriceError && (
            <>
              <Styled.InputError error>
                <b>WARNING</b>: Sale price is {belowFloorPercentage}% below floor price. Do you wish
                to continue?
              </Styled.InputError>
              <Grid container justifyContent="center">
                <Styled.FloorPriceButton onClick={handlePostForSale}>
                  Yes, Proceed
                </Styled.FloorPriceButton>
                <Styled.FloorPriceButton startOver onClick={handleStartOver}>
                  No, Start Over
                </Styled.FloorPriceButton>
              </Grid>
            </>
          )}
          <Styled.FeesContent valueError={valueError}>
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
  loading: PropTypes.bool,
  collectionId: PropTypes.string
};

SellNftModal.defaultProps = {
  setLoading: () => {},
  onConfirm: () => {},
  loading: false
};

export default memo(SellNftModal);
