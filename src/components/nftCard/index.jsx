import React, { useState, useMemo } from 'react';
import { Grid, CardActions, CardContent, CardMedia, Avatar } from '@mui/material';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import {
  SellNftModal,
  TransferNftModal,
  CancelListingModal,
  OrderCompleteModal
} from '~/components';
import { useAuth, useToggle } from '~/hooks';
import formatIpfsImg from '~/utils/formatIpfsImg';

import * as Styled from './styled';

const NFTCard = ({ data, isFake }) => {
  const route = useRouter();
  const { user, login } = useAuth();
  const [forSale, setForSale] = useState(false);
  const [displayModals, setDisplayModals] = useState(false);
  const [isSellNftModalOpen, toggleSellNftModal] = useToggle();
  const [isTransferNftModalOpen, toggleTransferNftModal] = useToggle();
  const [isCancelListingModalOpen, toggleCancelListingModal] = useToggle();
  const [isOrderCompleteModalOpen, toggleOrderCompleteModal] = useToggle();

  const img = formatIpfsImg(data?.nft?.nft_template?.metadata?.img);

  const asset = { ...data, collectionName: 'BALLERZ', img };

  // TODO: Implement function
  const handlePurchaseClick = () => {
    setDisplayModals(true);
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
          alt="ss"
          height="275"
          src={img}
        />
        <CardContent sx={{ paddingX: 0, paddingBottom: 0 }}>
          <Styled.NFTText>{data?.nft.nft_template.metadata.title}</Styled.NFTText>
        </CardContent>
        {(user?.addr === '0x5f14b7e68e0bc3c3' && route?.asPath === '0x5f14b7e68e0bc3c3') ||
        isFake ||
        displayModals ? (
          renderUserCardActions
        ) : (
          <Grid container justifyContent="center">
            <Styled.PurchaseButton onClick={user ? () => handlePurchaseClick() : login}>
              {`Purchase • ${Number(data.price).toFixed(2)}`}
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

NFTCard.defaultProps = {
  isFake: false,
  sell: false,
  transfer: false
};

export default React.memo(NFTCard);
