import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useContext, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import { Button } from '~/base';
import {
  InsufficientFundsModal,
  PurchaseErrorModal,
  OrderProcessing,
  VideoPlayer,
  SuccessPurchaseNFTModal
} from '~/components';
import { INSUFFICIENT_FUNDS } from '~/components/collectionCard';
import { buy } from '~/flow/buy';
import { useAuth, useBreakpoints, useToggle } from '~/hooks';
import { AuthContext } from '~/providers/AuthProvider';
import { loadTransaction } from '~/utils/transactionsLoader';
import formatIpfsImg from '~/utils/formatIpfsImg';
import { formatCurrencyValue } from '~/utils/formatCurrencyValue';

import { BUY_TX } from '~/constant';

import * as Styled from './styles';

const BrysonCollectionContent = ({ data, totalAvailable }) => {
  const { isMediumDevice, isSmallDevice } = useBreakpoints();
  const {
    palette: { grey }
  } = useTheme();
  const route = useRouter();
  const { login } = useAuth();
  const [isPurchaseNftModalOpen, togglePurchaseNftModal] = useToggle();
  const [isPurchaseErrorOpen, togglePurchaseError] = useToggle();
  const [isFundsErrorOpen, toggleFundsError] = useToggle();
  const [isProcessingModalOpen, toggleProcessingModal] = useToggle();

  const { hasSetup, user } = useContext(AuthContext);
  const [loadingPurchase, setLoadingPurchase] = useState(false);
  const [purchaseTxId, setPurchaseTxId] = useState(null);
  const [transaction, setTransaction] = useState();

  const handlePurchaseClick = async event => {
    event?.stopPropagation();
    if (!totalAvailable) {
      return;
    }
    try {
      setLoadingPurchase(true);
      toggleProcessingModal();
      const txResult = await buy(
        transaction.transactionScript,
        data.listing_resource_id,
        data?.nft?.owner,
        data?.price,
        user?.addr
      );
      if (txResult) {
        setPurchaseTxId(txResult?.txId);
        toggleProcessingModal();
        togglePurchaseNftModal();
        setLoadingPurchase(false);
      }
    } catch (err) {
      console.warn(err);
      toggleProcessingModal();
      if (err?.message?.includes(INSUFFICIENT_FUNDS)) {
        toggleFundsError();
      } else {
        togglePurchaseError();
      }
      setLoadingPurchase(false);
    }
  };

  const handleClosePurchaseModal = () => {
    togglePurchaseNftModal();
    setPurchaseTxId(null);
    route.push(route.asPath);
  };

  const handleLogin = event => {
    event?.stopPropagation();
    login();
  };

  const shouldDisablePurchaseButton = useMemo(
    () => loadingPurchase || (user && !hasSetup) || (user && !transaction) || !totalAvailable,
    [loadingPurchase, hasSetup, user, transaction, totalAvailable]
  );

  const purchaseButtonTitle = useMemo(() => {
    if (!totalAvailable) {
      return 'Sold Out';
    }
    return `Purchase • $ ${formatCurrencyValue(data?.price)}`;
  }, [data, totalAvailable]);

  useEffect(() => {
    (async () => {
      const tx = await loadTransaction(BUY_TX);
      setTransaction(tx);
    })();
  }, [loadTransaction]);

  return (
    <>
      <Styled.Container container>
        <VideoPlayer
          loop
          poster={formatIpfsImg(data?.nft?.template?.metadata?.img)}
          src={formatIpfsImg(data?.nft?.template?.metadata?.video)}
        />

        <Box mx="auto" width={isMediumDevice ? '90%' : '40%'}>
          <Typography fontWeight="normal" mt={isMediumDevice ? 2 : 0} variant="h4">
            Bryson DeChambeau
          </Typography>
          <Typography fontWeight="600" m="8px 0 20px" variant="h3">
            Vegas, Baby!
          </Typography>
          <Typography color={grey[700]} variant="h6">
            This is the first in a series of Bryson DeChambeau collectibles on Gaia -- and with
            ownership comes additional rewards and access in future drops.
          </Typography>

          <Grid container justifyContent="center" alignItems="center">
            <Button
              onClick={user ? handlePurchaseClick : handleLogin}
              disabled={shouldDisablePurchaseButton}
              sx={{
                display: 'block',
                fontFamily: 'Work Sans',
                margin: isSmallDevice ? '0 auto' : '0',
                mt: 2,
                padding: '16px 40px'
              }}>
              {purchaseButtonTitle}
            </Button>
          </Grid>
        </Box>
      </Styled.Container>
      <Grid alignItems="center" container justifyContent="center" width="100%">
        <Styled.BottomImage alt="Las Vegas Sign" src="/collections/bryson/las-vegas.webp" />
      </Grid>

      <SuccessPurchaseNFTModal
        open={isPurchaseNftModalOpen}
        onClose={handleClosePurchaseModal}
        tx={purchaseTxId}
        collectionsName={`Bryson's`}
      />
      <PurchaseErrorModal open={isPurchaseErrorOpen} onClose={togglePurchaseError} />
      <InsufficientFundsModal open={isFundsErrorOpen} onClose={toggleFundsError} />
      <OrderProcessing open={isProcessingModalOpen} onClose={toggleProcessingModal} />
    </>
  );
};

export default BrysonCollectionContent;
