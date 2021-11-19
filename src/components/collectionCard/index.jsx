import React, { useState, useContext } from 'react';
import { Grid, CardContent, CardMedia, Avatar } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Loader } from '~/base';
import {
  PurchaseNFTModal,
  PurchaseErrorModal,
  InsufficientFundsModal,
  MaximumPurchaseLimit,
  OrderProcessing
} from '~/components';
import { useAuth, useToggle } from '~/hooks';

import * as Styled from './styled';
import { buy } from '~/flow/buy';
import { AuthContext } from '~/providers/AuthProvider';

const SHOULD_HIDE_DATA = process.env.NEXT_PUBLIC_MYSTERY_IMAGE === 'true';
export const INSUFFICIENT_FUNDS =
  'Amount withdrawn must be less than or equal than the balance of the Vault';

const CollectionCard = ({ data, ownNFTs, transaction }) => {
  const route = useRouter();
  const { login } = useAuth();
  const [loadingPurchase, setLoadingPurchase] = useState(false);
  const [purchaseTxId, setPurchaseTxId] = useState(null);
  const [isPurchaseNftModalOpen, togglePurchaseNftModal] = useToggle();
  const [isPurchaseErrorOpen, togglePurchaseError] = useToggle();
  const [isFundsErrorOpen, toggleFundsError] = useToggle();
  const [isMaximumModalOpen, toggleMaximumModal] = useToggle();
  const [isProcessingModalOpen, toggleProcessingModal] = useToggle();
  const { hasSetup, user } = useContext(AuthContext);

  const img = SHOULD_HIDE_DATA ? '/images/mystery-nft.gif' : data?.nft?.template?.metadata?.img;

  const handlePurchaseClick = async event => {
    event?.stopPropagation();
    try {
      if (ownNFTs.length >= Number(process.env.NEXT_PUBLIC_USER_NFTS_LIMIT)) {
        toggleMaximumModal();
        return;
      }
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

  const renderContent = () => (
    <Styled.CustomCard sx={{ cursor: SHOULD_HIDE_DATA ? 'auto' : 'pointer' }}>
      <Styled.CustomCardHeader
        avatar={<Avatar alt="ss" src={'/collections/user.png'} sx={{ width: 28, height: 28 }} />}
        title="BALLERZ"
      />
      {/* TODO: Implement logic to display skeleton loading */}
      <CardMedia
        sx={{ borderRadius: '20px', maxWidth: '275px' }}
        component="img"
        alt="NFT image"
        height="275"
        src={img}
      />

      <CardContent sx={{ paddingX: 0, paddingBottom: 0 }}>
        <Styled.NFTText>
          {SHOULD_HIDE_DATA ? 'BALLER #????' : data?.nft?.template?.metadata?.title}
        </Styled.NFTText>
      </CardContent>
      {data?.nft?.owner === user?.addr ? (
        <Styled.CancelButtonContainer>
          <Styled.ListedText>Listed for sale</Styled.ListedText>
        </Styled.CancelButtonContainer>
      ) : (
        <Grid container justifyContent="center">
          <Styled.PurchaseButton
            onClick={user ? handlePurchaseClick : handleLogin}
            disabled={loadingPurchase || (user && !hasSetup) || (user && !transaction)}>
            {loadingPurchase ? <Loader /> : `Purchase • $${Number(data.price).toFixed(2)}`}
          </Styled.PurchaseButton>
        </Grid>
      )}
    </Styled.CustomCard>
  );

  return (
    <>
      {SHOULD_HIDE_DATA ? (
        renderContent()
      ) : (
        <Link
          href={`/${route.query.collection_name}/${data?.nft?.template?.metadata?.id}`}
          passHref>
          {renderContent()}
        </Link>
      )}
      <PurchaseNFTModal
        asset={{ ...data, img }}
        open={isPurchaseNftModalOpen}
        onClose={handleClosePurchaseModal}
        tx={purchaseTxId}
      />
      <PurchaseErrorModal open={isPurchaseErrorOpen} onClose={togglePurchaseError} />
      <InsufficientFundsModal open={isFundsErrorOpen} onClose={toggleFundsError} />
      <MaximumPurchaseLimit open={isMaximumModalOpen} onClose={toggleMaximumModal} />
      <OrderProcessing open={isProcessingModalOpen} onClose={toggleProcessingModal} />
    </>
  );
};

export default React.memo(CollectionCard);
