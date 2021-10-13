import { useState, useMemo } from 'react';
import { CardActions, CardContent, CardMedia, Avatar, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import useToggle from '~/hooks/useToggle';
import useAuth from '~/hooks/useAuth';
import {
  SellNftModal,
  TransferNftModal,
  CancelListingModal,
  OrderCompleteModal
} from '~/components';

import * as Styled from './styled';

const NFTCard = ({ nft, isFake }) => {
  const route = useRouter();
  const { user, login } = useAuth();
  const [forSale, setForSale] = useState(false);
  const [isSellNftModalOpen, toggleSellNftModal] = useToggle();
  const [isTransferNftModalOpen, toggleTransferNftModal] = useToggle();
  const [isCancelListingModalOpen, toggleCancelListingModal] = useToggle();
  const [isOrderCompleteModalOpen, toggleOrderCompleteModal] = useToggle();

  // TODO: Implement function
  const handlePurchaseClick = () => {};

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
          title="Ballerz"
        />
        <CardMedia
          sx={{ borderRadius: '20px', maxWidth: '275px' }}
          component="img"
          alt="ss"
          height="275"
          src={`/templates/${nft.img}`}
        />
        <CardContent sx={{ paddingX: 0, paddingBottom: 0 }}>
          <Styled.NFTText>{`BALLER #${nft.id}`}</Styled.NFTText>
        </CardContent>
        {(user?.addr === '0x5f14b7e68e0bc3c3' && route?.asPath === '0x5f14b7e68e0bc3c3') ||
        isFake ? (
          renderUserCardActions
        ) : (
          <Grid container justifyContent="center">
            <Styled.PurchaseButton onClick={user ? handlePurchaseClick : login}>
              Purchase • $200 USD
            </Styled.PurchaseButton>
          </Grid>
        )}
      </Styled.CustomCard>
      <SellNftModal
        hasPostedForSale={forSale}
        open={isSellNftModalOpen}
        onClose={toggleSellNftModal}
        onConfirm={() => setForSale(true)}
      />
      <TransferNftModal open={isTransferNftModalOpen} onClose={toggleTransferNftModal} />
      <CancelListingModal
        hasPostedForSale={forSale}
        open={isCancelListingModalOpen}
        onClose={toggleCancelListingModal}
        onConfirm={() => setForSale(false)}
      />
      <OrderCompleteModal open={isOrderCompleteModalOpen} onClose={toggleOrderCompleteModal} />
    </>
  );
};

NFTCard.propTypes = {
  //TODO: Remove prop isFake on integration
  isFake: PropTypes.bool,
  sell: PropTypes.bool,
  transfer: PropTypes.bool
};

NFTCard.defaultProps = {
  isFake: false,
  sell: false,
  transfer: false
};

export default NFTCard;
