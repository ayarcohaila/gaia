import React, { useState } from 'react';
import { Grid, CardContent, CardMedia, Avatar, Skeleton } from '@mui/material';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import { Loader } from '~/base';
import { PurchaseNFTModal, PurchaseErrorModal, InsufficientFundsModal } from '~/components';
import { useAuth, useToggle } from '~/hooks';
import formatIpfsImg from '~/utils/formatIpfsImg';

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
  const [isPurchaseErrorOpen, togglePurchaseErrorOpen] = useToggle();
  const [isFundsErrorOpen, toggleFundsErrorOpen] = useToggle();

  const img = SHOULD_HIDE_DATA
    ? '/images/mystery-nft.gif'
    : formatIpfsImg(data?.nft?.template?.metadata?.img);

  // TODO: Implement function
  const handlePurchaseClick = async () => {
    toast.info('Please wait, purchase in progress... ');
    try {
      setLoadingPurchase(true);
      const txResult = await buy(data.listing_resource_id, data?.nft?.owner);

      if (txResult) {
        setPurchaseTxId(txResult?.txId);
        togglePurchaseNftModal();
        toast.success(
          `Purchase completed successfully. In few minutes it will be available on your profile`
        );
        setLoadingPurchase(false);
      }
    } catch (err) {
      if (err?.message?.includes(INSUFFICIENT_FUNDS)) {
        toggleFundsErrorOpen();
      } else {
        togglePurchaseErrorOpen();
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
      <PurchaseErrorModal open={isPurchaseErrorOpen} onClose={togglePurchaseErrorOpen} />
      <InsufficientFundsModal open={isFundsErrorOpen} onClose={toggleFundsErrorOpen} />
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
