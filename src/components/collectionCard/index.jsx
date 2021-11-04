import React, { useState } from 'react';
import { Grid, CardContent, CardMedia, Avatar, Skeleton } from '@mui/material';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import { Loader } from '~/base';
import {
  PurchaseNFTModal,
  PurchaseErrorModal,
  InsufficientFundsModal,
  BlockLayer,
  MaximumPurchaseLimit,
  OrderProcessing
} from '~/components';
import { useAuth, useToggle } from '~/hooks';
import formatIpfsImg from '~/utils/formatIpfsImg';
import { isDapper } from '~/utils/currencyCheck';
import { loadTransaction } from '~/utils/transactionsLoader';
import { GET_NFTS_BY_ADDRESS } from '~/store/server/queries';

import * as Styled from './styled';
import { buy } from '~/flow/buy';

const SHOULD_HIDE_DATA = process.env.NEXT_PUBLIC_MYSTERY_IMAGE === 'true';
const INSUFFICIENT_FUNDS =
  'Amount withdrawn must be less than or equal than the balance of the Vault';

const CollectionCard = ({ data }) => {
  const route = useRouter();
  const { user, login } = useAuth();
  const [loaded, setLoaded] = useState(false);
  const [loadingPurchase, setLoadingPurchase] = useState(false);
  const [purchaseTxId, setPurchaseTxId] = useState(null);
  const [isPurchaseNftModalOpen, togglePurchaseNftModal] = useToggle();
  const [isPurchaseErrorOpen, togglePurchaseError] = useToggle();
  const [isFundsErrorOpen, toggleFundsError] = useToggle();
  const [isMaximumModalOpen, toggleMaximumModal] = useToggle();
  const [isProcessingModalOpen, toggleProcessingModal] = useToggle();

  const { data: userNFTs } = useQuery(GET_NFTS_BY_ADDRESS, {
    variables: { address: user?.addr }
  });

  const img = SHOULD_HIDE_DATA
    ? '/images/mystery-nft.gif'
    : formatIpfsImg(data?.nft?.template?.metadata?.img);

  // TODO: Implement function
  const handlePurchaseClick = async () => {
    if (userNFTs.nft.length >= Number(process.env.NEXT_PUBLIC_USER_NFTS_LIMIT)) {
      toggleMaximumModal();
      return;
    }
    try {
      setLoadingPurchase(true);
      toggleProcessingModal();
      const transaction = await loadTransaction(
        window.location.origin,
        isDapper ? 'buy' : 'buy_flowtoken'
      );

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

  return (
    <>
      <Styled.CustomCard>
        <Styled.CustomCardHeader
          avatar={<Avatar alt="ss" src={'/collections/user.png'} sx={{ width: 28, height: 28 }} />}
          title="BALLERZ"
        />
        <Skeleton
          variant="rect"
          width="275px"
          height={275}
          sx={{ borderRadius: '20px', display: loaded && 'none' }}
        />
        <CardMedia
          sx={{ borderRadius: '20px', maxWidth: '275px', display: !loaded && 'none' }}
          component="img"
          alt="NFT image"
          height="275"
          onLoad={() => setLoaded(true)}
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
              onClick={user ? () => handlePurchaseClick(data) : login}
              disabled={loadingPurchase}>
              {loadingPurchase ? <Loader /> : `Purchase • $${Number(data.price).toFixed(2)}`}
            </Styled.PurchaseButton>
          </Grid>
        )}
      </Styled.CustomCard>
      <PurchaseNFTModal
        asset={{ ...data, img }}
        open={isPurchaseNftModalOpen}
        onClose={handleClosePurchaseModal}
        tx={purchaseTxId}
      />
      <BlockLayer active={loadingPurchase} />
      <PurchaseErrorModal open={isPurchaseErrorOpen} onClose={togglePurchaseError} />
      <InsufficientFundsModal open={isFundsErrorOpen} onClose={toggleFundsError} />
      <MaximumPurchaseLimit open={isMaximumModalOpen} onClose={toggleMaximumModal} />
      <OrderProcessing open={isProcessingModalOpen} />
    </>
  );
};

CollectionCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.string,
    nft: PropTypes.shape({
      asset_id: PropTypes.number,
      nft_template: PropTypes.shape({
        id: PropTypes.string,
        metadata: PropTypes.shape({
          title: PropTypes.string,
          img: PropTypes.string
        })
      })
    })
  }).isRequired
};

export default React.memo(CollectionCard);
