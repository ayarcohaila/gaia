import React, { useContext, useState, useMemo, useCallback, useEffect } from 'react';
import { useTheme } from '@emotion/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Typography, Divider, Grid } from '@mui/material';

import { buy } from '~/flow/buy';
import { Button, Loader } from '~/base';
import {
  InsufficientFundsModal,
  PurchaseErrorModal,
  OrderProcessing,
  VideoPlayer
} from '~/components';

import { useBreakpoints, useToggle, useAuth } from '~/hooks';
import { AuthContext } from '~/providers/AuthProvider';
import { INSUFFICIENT_FUNDS } from '~/components/collectionCard';
import SuccessPurchaseModal from '../success-purchase-modal';
import { loadTransaction } from '~/utils/transactionsLoader';
import { BUY_TX } from '~/constant';
import formatIpfsImg from '~/utils/formatIpfsImg';

import * as Styled from './styles';

const ShareefCollectionContent = ({ data }) => {
  const {
    palette: { grey }
  } = useTheme();
  const { login } = useAuth();
  const route = useRouter();
  const { isMediumDevice, isExtraMediumDevice } = useBreakpoints();
  const [isPurchaseNftModalOpen, togglePurchaseNftModal] = useToggle();
  const [isPurchaseErrorOpen, togglePurchaseError] = useToggle();
  const [isFundsErrorOpen, toggleFundsError] = useToggle();
  const [isProcessingModalOpen, toggleProcessingModal] = useToggle();
  const [purchaseTxId, setPurchaseTxId] = useState(null);
  const { hasSetup, user } = useContext(AuthContext);
  const [loadingPurchase, setLoadingPurchase] = useState(false);
  const [loadingTransaction, setLoadingTransaction] = useState(false);
  const [transaction, setTransaction] = useState(null);

  const shouldDisablePurchaseButton = useMemo(
    () => loadingPurchase || (user && !hasSetup) || (user && !transaction),
    [loadingPurchase, hasSetup, user, transaction]
  );

  const handleClosePurchaseModal = () => {
    togglePurchaseNftModal();
    setPurchaseTxId(null);
  };

  const handlePurchaseClick = nft => async event => {
    event?.stopPropagation();
    try {
      setLoadingPurchase(true);
      toggleProcessingModal();
      const txResult = await buy(
        transaction.transactionScript,
        nft.listing_resource_id,
        nft?.nft?.owner,
        nft?.price,
        user?.addr
      );
      if (txResult) {
        setPurchaseTxId(txResult?.txId);
        toggleProcessingModal();
        togglePurchaseNftModal();
        setLoadingPurchase(false);
        route.push(route.asPath);
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

  const handleLogin = async event => {
    event?.stopPropagation();
    await login();
    route.push(route.asPath);
  };

  useEffect(() => {
    (async () => {
      setLoadingTransaction(true);
      const tx = await loadTransaction(BUY_TX);
      setTransaction(tx);
      setLoadingTransaction(false);
    })();
  }, [BUY_TX, loadTransaction, setLoadingTransaction]);

  const contentSection = useMemo(
    () => (
      <Grid item>
        <Styled.ContentSection container>
          <Styled.ContentSectionItem item xs={isMediumDevice ? 12 : 4}>
            <Image
              src="/collections/shareef/raffle.png"
              alt="raffle"
              width="283px"
              height="283px"
            />
          </Styled.ContentSectionItem>
          <Styled.ContentSectionItem
            item
            xs={isMediumDevice ? 12 : 8}
            pl={!isMediumDevice && '20px'}>
            <Typography variant="h4" mb="10px" mt={isMediumDevice && '30px'}>
              EXCLUSIVE RAFFLES
            </Typography>
            <Styled.TextContainer>
              <Typography variant="h5" fontWeight="normal">
                {`Just by holding NFTs from Shareef's genesis collection, you'll be entered to win one
              of:`}
              </Typography>
              <Typography variant="h5" fontWeight="normal">
                <Grid component="ul">
                  <Grid component="li">
                    Custom Shareef BALLERZ (minted into the original 10k set)
                  </Grid>
                  <Grid component="li">Signed pair of game-worn sneakers</Grid>
                  <Grid component="li">Meet-and-greet with Shareef</Grid>
                  <Grid component="li">Play a game of Fortnite with Shareef</Grid>
                </Grid>
                <Styled.CustomLinkText
                  href="/collections/shareef/Shareef_Sweepstakes_Rules.pdf"
                  target="_blank">
                  Read the official rules
                </Styled.CustomLinkText>
              </Typography>
            </Styled.TextContainer>
          </Styled.ContentSectionItem>
        </Styled.ContentSection>
        <Divider />
        <Styled.ContentSection container>
          <Styled.ContentSectionItem item xs={isMediumDevice ? 12 : 4}>
            <Image
              src="/collections/shareef/benefits.jpeg"
              alt="benefits"
              width="283px"
              height="283px"
            />
          </Styled.ContentSectionItem>
          <Styled.ContentSectionItem
            item
            xs={isMediumDevice ? 12 : 8}
            pl={!isMediumDevice && '20px'}>
            <Typography variant="h4" mb="10px" mt={isMediumDevice && '30px'}>
              HOLDER BENEFITS
            </Typography>
            <Typography variant="h5" fontWeight="normal" mb="20px">
              {`Genesis Collection holders will receive early access to future O'Neal releases,
              airdropped never-before-seen family photos, and eligible to win autographed jerseys,
              digital wearables, in-person experiences and more.`}
              <br />
              <br />
              {`We're also pleased to introduce an O'Neal Discord coming in Winter/Spring 2022, with
              exclusive channels set aside for holders and behind-the-scenes access to O'Neal family
              content.`}
              <br />
              <br />
              {`We're committed to rewarding those who are here at the beginning. Rookie trading
              cards, future sneaker or clothing lines, metaverse experiences -- ownership of O'Neal
              NFTs is your gateway to become a part of the family.`}
            </Typography>
          </Styled.ContentSectionItem>
        </Styled.ContentSection>
      </Grid>
    ),
    [isMediumDevice]
  );

  const renderCard = useCallback(
    sale => {
      return (
        <Styled.CustomCard md={4} sm={12} item container styled={{ border: '1px solid red' }}>
          <VideoPlayer
            loop
            src={formatIpfsImg(sale?.nft?.template?.metadata?.video)}
            poster={formatIpfsImg(sale?.nft?.template?.metadata?.img)}
            height={[
              !isExtraMediumDevice ? 'auto' : '400px',
              !isMediumDevice ? 'auto' : '400px',
              !isMediumDevice ? 'auto' : '400px',
              !isMediumDevice ? 'auto' : '400px'
            ]}
            width={[
              !isExtraMediumDevice ? 'auto' : '332px',
              !isExtraMediumDevice ? 'auto' : '332px',
              '332px',
              'auto'
            ]}
          />

          <Typography variant="h4" mt="10px">
            {`${sale?.nft?.template?.metadata?.rarity} Edition`}
          </Typography>
          <Typography variant="h6" mb="16px">
            {`Limited Edition of ${sale?.nft?.template?.metadata?.editions}`}
          </Typography>
          {!!sale?.collectionRemaining && (
            <Button
              onClick={user ? handlePurchaseClick(sale) : handleLogin}
              disabled={shouldDisablePurchaseButton}
              sx={{
                width: '100%',
                marginBottom: '16px',
                maxWidth: '332px'
              }}>
              {loadingTransaction ? (
                <Loader disableText />
              ) : (
                <Typography variant="h6" fontWeight="600" letterSpacing={1}>
                  Purchase - ${Number(sale?.price).toFixed(2)}
                </Typography>
              )}
            </Button>
          )}
          <Typography variant="h6" color={grey[600]}>
            {sale?.collectionRemaining} available
          </Typography>
        </Styled.CustomCard>
      );
    },
    [loadingTransaction, shouldDisablePurchaseButton, user, handlePurchaseClick]
  );

  return (
    <>
      <Styled.Container container>
        {renderCard(data.goldEdition)}
        {renderCard(data.silverEdition)}
        {renderCard(data.bronzeEdition)}
      </Styled.Container>
      <Grid container justifyContent="center">
        {contentSection}
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

export default React.memo(ShareefCollectionContent);
