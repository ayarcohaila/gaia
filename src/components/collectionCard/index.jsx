import React, { useEffect, useState, useContext } from 'react';
import { Grid, CardContent, CardMedia, Avatar } from '@mui/material';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { Loader } from '~/base';
import {
  PurchaseNFTModal,
  PurchaseErrorModal,
  InsufficientFundsModal,
  BlockLayer,
  MaximumPurchaseLimit,
  OrderProcessing
} from '~/components';
import { useAuth, useBreakpoints, useToggle } from '~/hooks';
import formatIpfsImg from '~/utils/formatIpfsImg';
import { isDapper } from '~/utils/currencyCheck';
import { loadTransaction } from '~/utils/transactionsLoader';
import * as Styled from './styled';
import { buy } from '~/flow/buy';
import { listNfts } from '~/flow/listNfts';
import { AuthContext } from '~/providers/AuthProvider';

const SHOULD_HIDE_DATA = process.env.NEXT_PUBLIC_MYSTERY_IMAGE === 'true';
const SET_ID = process.env.NEXT_PUBLIC_BALLERZ_SETID;
const INSUFFICIENT_FUNDS =
  'Amount withdrawn must be less than or equal than the balance of the Vault';

const CollectionCard = ({ data }) => {
  const route = useRouter();
  const { user, login } = useAuth();
  const { isSmallDevice } = useBreakpoints();
  const [loadingPurchase, setLoadingPurchase] = useState(false);
  const [purchaseTxId, setPurchaseTxId] = useState(null);
  const [ownNFTs, setOwnNFTs] = useState([]);
  const [transaction, setTransaction] = useState(null);
  const [isPurchaseNftModalOpen, togglePurchaseNftModal] = useToggle();
  const [isPurchaseErrorOpen, togglePurchaseError] = useToggle();
  const [isFundsErrorOpen, toggleFundsError] = useToggle();
  const [isMaximumModalOpen, toggleMaximumModal] = useToggle();
  const [isProcessingModalOpen, toggleProcessingModal] = useToggle();
  const { hasSetup } = useContext(AuthContext);

  const img = SHOULD_HIDE_DATA
    ? '/images/mystery-nft.gif'
    : formatIpfsImg(data?.nft?.template?.metadata?.img);

  const handlePurchaseClick = async () => {
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

  useEffect(() => {
    (async () => {
      if (!!user && Object.keys(user).length) {
        const NFTs = await listNfts(user?.addr, SET_ID);
        const tx = await loadTransaction(
          window.location.origin,
          isDapper ? 'buy' : 'buy_flowtoken'
        );
        setTransaction(tx);
        setOwnNFTs(NFTs);
      }
    })();
  }, [user, listNfts, loadTransaction, isDapper]);

  return (
    <>
      <Styled.CustomCard>
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
              onClick={user ? () => handlePurchaseClick(data) : login}
              disabled={loadingPurchase || (user && !hasSetup)}>
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
      <OrderProcessing
        open={isProcessingModalOpen}
        onClose={isSmallDevice ? toggleProcessingModal : null}
      />
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
