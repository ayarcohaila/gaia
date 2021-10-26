import React, { useState, useMemo } from 'react';
import { Grid, CardActions, CardContent, CardMedia, Avatar, CircularProgress } from '@mui/material';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import {
  SellNftModal,
  TransferNftModal,
  CancelListingModal,
  OrderCompleteModal
} from '~/components';
import { useAuth, useToggle } from '~/hooks';
import formatIpfsImg from '~/utils/formatIpfsImg';

import * as Styled from './styled';
import { buy } from '~/flow/buy';

const CollectionCard = ({ data, isFake }) => {
  const route = useRouter();
  const { user, login } = useAuth();
  const [forSale, setForSale] = useState(false);
  const [loadingPurchase, setLoadingPurchase] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [displayModals, setDisplayModals] = useState(false);
  const [isSellNftModalOpen, toggleSellNftModal] = useToggle();
  const [isTransferNftModalOpen, toggleTransferNftModal] = useToggle();
  const [isCancelListingModalOpen, toggleCancelListingModal] = useToggle();
  const [isOrderCompleteModalOpen, toggleOrderCompleteModal] = useToggle();

  const img =
    process.env.NEXT_PUBLIC_MYSTERY_IMAGE === 'true'
      ? `/images/mystery-nft-2.gif`
      : formatIpfsImg(data?.nft?.template?.metadata?.img);

  const asset = { ...data, collectionName: 'BALLERZ', img };

  // TODO: Implement function
  const handlePurchaseClick = async () => {
    toast.info('Please wait, purchase in progress... ');
    try {
      setLoadingPurchase(true);
      await buy(data.listing_resource_id, process.env.NEXT_PUBLIC_MARKET_OWNER);
      toast.success(
        `Purchase completed successfully. In few minutes it will be available on your profile`
      );
      setLoadingPurchase(false);
      route.push(`/profile/${user?.addr}`);
    } catch (err) {
      toast.error('Unable to complete purchase.');
      console.error(err);
      setLoadingPurchase(false);
    }
  };

  const renderUserCardActions = useMemo(() => {
    return (
      <CardActions>
        {forSale ? (
          <Styled.CancelButtonContainer>
            <Styled.ListedText>Listed for sale</Styled.ListedText>
            <Styled.CancelButtonDivider />
            <Styled.CancelButton variant="text" onClick={() => toggleCancelListingModal()}>
              Cancel
            </Styled.CancelButton>
          </Styled.CancelButtonContainer>
        ) : (
          <>
            <Styled.SellButton onClick={() => toggleSellNftModal()}>Sell</Styled.SellButton>
            <Styled.TransferButton onClick={() => toggleTransferNftModal()}>
              Transfer
            </Styled.TransferButton>
          </>
        )}
      </CardActions>
    );
  }, [toggleSellNftModal, toggleTransferNftModal, toggleCancelListingModal, forSale]);

  return (
    <>
      <Styled.CustomCard>
        <Styled.CustomCardHeader
          avatar={<Avatar alt="ss" src={'/collections/user.png'} sx={{ width: 28, height: 28 }} />}
          title="BALLERZ"
        />
        <CardMedia
          sx={{ borderRadius: '20px', maxWidth: '275px' }}
          component="img"
          alt="NFT image"
          height="275"
          src={img}
        />
        <CardContent sx={{ paddingX: 0, paddingBottom: 0 }}>
          <Styled.NFTText>{data?.nft?.template?.metadata?.title}</Styled.NFTText>
        </CardContent>
        {(user?.addr === '0x5f14b7e68e0bc3c3' && route?.asPath === '0x5f14b7e68e0bc3c3') ||
        isFake ||
        displayModals ? (
          renderUserCardActions
        ) : (
          <Grid container justifyContent="center">
            <Styled.PurchaseButton
              onClick={user ? () => handlePurchaseClick(data) : login}
              disabled={loadingPurchase}>
              {loadingPurchase ? (
                <CircularProgress size={32} color="white" />
              ) : (
                `Purchase • ${Number(data.price).toFixed(2)}`
              )}
            </Styled.PurchaseButton>
          </Grid>
        )}
      </Styled.CustomCard>
      <SellNftModal
        asset={asset}
        hasPostedForSale={forSale}
        open={isSellNftModalOpen}
        onClose={toggleSellNftModal}
        onConfirm={() => setForSale(true)}
      />
      <TransferNftModal
        asset={asset}
        open={isTransferNftModalOpen}
        onClose={toggleTransferNftModal}
      />
      <CancelListingModal
        asset={asset}
        hasPostedForSale={forSale}
        open={isCancelListingModalOpen}
        onClose={toggleCancelListingModal}
        onConfirm={() => setForSale(true)}
      />
      <OrderCompleteModal open={isOrderCompleteModalOpen} onClose={toggleOrderCompleteModal} />
    </>
  );
};

CollectionCard.propTypes = {
  //TODO: Remove prop isFake on integration
  isFake: PropTypes.bool,
  sell: PropTypes.bool,
  transfer: PropTypes.bool,
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

CollectionCard.defaultProps = {
  isFake: false,
  sell: false,
  transfer: false
};

export default React.memo(CollectionCard);
