import React, { useState, useContext } from 'react';
import { Grid, CardContent, CardMedia, Avatar } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Loader } from '~/base';
import {
  PurchaseNFTModal,
  PurchaseErrorModal,
  InsufficientFundsModal,
  OrderProcessing
} from '~/components';
import { useAuth, useToggle } from '~/hooks';

import * as Styled from './styled';
import { buy } from '~/flow/buy';
import { AuthContext } from '~/providers/AuthProvider';
import { useCollectionConfig } from '~/hooks';
import formatIpfsImg from '~/utils/formatIpfsImg';

export const INSUFFICIENT_FUNDS =
  'Amount withdrawn must be less than or equal than the balance of the Vault';

const CollectionCard = ({ data, transaction }) => {
  const route = useRouter();
  const { login } = useAuth();
  const [loadingPurchase, setLoadingPurchase] = useState(false);
  const [purchaseTxId, setPurchaseTxId] = useState(null);
  const [isPurchaseNftModalOpen, togglePurchaseNftModal] = useToggle();
  const [isPurchaseErrorOpen, togglePurchaseError] = useToggle();
  const [isFundsErrorOpen, toggleFundsError] = useToggle();
  const [isProcessingModalOpen, toggleProcessingModal] = useToggle();
  const { hasSetup, user } = useContext(AuthContext);

  const { config } = useCollectionConfig();

  const img = config?.mystery
    ? '/images/mystery-nft.gif'
    : formatIpfsImg(data?.nft?.template?.metadata?.img);

  const handlePurchaseClick = async event => {
    event?.stopPropagation();
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

  const renderContent = () => (
    <Styled.CustomCard sx={{ cursor: config?.mystery ? 'auto' : 'pointer' }}>
      <Styled.CustomCardHeader
        avatar={<Avatar alt="ss" src={config.avatar} sx={{ width: 28, height: 28 }} />}
        title={config?.collectionName?.toUpperCase()}
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
          {config.mystery
            ? `${config?.name?.toUpperCase()} #????`
            : data?.nft?.template?.metadata?.title}
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
      {config?.mystery ? (
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
      <OrderProcessing open={isProcessingModalOpen} onClose={toggleProcessingModal} />
    </>
  );
};

export default React.memo(CollectionCard);
