import { Box, Grid, Link, Typography, useTheme } from '@mui/material';
import { useContext, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import { Button } from '~/base';
import {
  InsufficientFundsModal,
  PurchaseErrorModal,
  OrderProcessing,
  VideoPlayer
} from '~/components';
import { INSUFFICIENT_FUNDS } from '~/components/collectionCard';
import { BUY_BRYSON_TX } from '~/constant';
import { buy } from '~/flow/buy';
import { useAuth, useBreakpoints, useToggle } from '~/hooks';
import { AuthContext } from '~/providers/AuthProvider';
import { loadTransaction } from '~/utils/transactionsLoader';
import formatIpfsImg from '~/utils/formatIpfsImg';

import * as Styled from './styles';
import SuccessPurchaseModal from '../success-purchase-modal';
import { isBrysonSaleEnabled } from '~/constant/collection';

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
    if (!isBrysonSaleEnabled || !totalAvailable) {
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
    route.push(`/profile/${user?.addr}`);
  };

  const handleLogin = event => {
    event?.stopPropagation();
    login();
  };

  const shouldDisablePurchaseButton = useMemo(
    () =>
      loadingPurchase ||
      (user && !hasSetup) ||
      (user && !transaction) ||
      !isBrysonSaleEnabled ||
      !totalAvailable,
    [loadingPurchase, hasSetup, isBrysonSaleEnabled, user, transaction, totalAvailable]
  );

  const purchaseButtonTitle = useMemo(() => {
    if (!totalAvailable) {
      return 'Sold Out';
    }
    return isBrysonSaleEnabled
      ? `Purchase • $ ${Number(data?.price)?.toFixed(2)}`
      : 'On Sale Nov 19 at 1pm PT';
  }, [data, isBrysonSaleEnabled, totalAvailable]);

  useEffect(() => {
    (async () => {
      const tx = await loadTransaction(BUY_BRYSON_TX);
      setTransaction(tx);
    })();
  }, [BUY_BRYSON_TX, loadTransaction]);

  return (
    <>
      <Styled.Container container>
        <VideoPlayer
          poster={formatIpfsImg(data.nft.template.metadata.img)}
          src={formatIpfsImg(data.nft.template.metadata.video)}
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
          <Typography color={grey[700]} my={3} variant="h6">
            One lucky winner will receive 2 VIP Passes to a Hospitality Suite at the invite-only
            Bryson DeChambeau vs. Brooks Koepka Showdown at the Wynn Golf Course in Las Vegas. Prize
            includes $2,000 travel voucher.
          </Typography>
          <Typography color={grey[700]} component="span" variant="h6">
            CONTEST ELIGIBLE FOR U.S. RESIDENTS ONLY.{' '}
            <Link color={grey[700]} href="/collections/bryson/rules.pdf" target="_blank">
              See full rules
            </Link>
            .
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
          <Typography color={grey[600]} fontWeight="normal" mt={2} variant="subtitle1">
            Winner will be selected on November 22. Event will be held on November 26 in Las Vegas,
            NV. Vaccination rules & restrictions apply. By purchasing, you agree to be contacted by
            Dapper Labs if you are selected as the winning entry.
          </Typography>
        </Box>
      </Styled.Container>
      <Grid alignItems="center" container justifyContent="center" width="100%">
        <Styled.BottomImage alt="Las Vegas Sign" src="/collections/bryson/las-vegas.webp" />
      </Grid>

      <SuccessPurchaseModal
        open={isPurchaseNftModalOpen}
        onClose={handleClosePurchaseModal}
        tx={purchaseTxId}
      />
      <PurchaseErrorModal open={isPurchaseErrorOpen} onClose={togglePurchaseError} />
      <InsufficientFundsModal open={isFundsErrorOpen} onClose={toggleFundsError} />
      <OrderProcessing open={isProcessingModalOpen} onClose={toggleProcessingModal} />
    </>
  );
};

export default BrysonCollectionContent;
