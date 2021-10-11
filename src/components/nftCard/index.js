import { useState } from 'react';
import { CardActions, CardContent, CardMedia, Avatar } from '@mui/material';
import PropTypes from 'prop-types';
import {
  SellButton,
  CustomCard,
  NFTText,
  NFTTitle,
  TransferButton,
  CancelButtonContainer,
  CancelButton,
  ListedText,
  CancelButtonDivider,
  CustomCardHeader
} from './styled';
import useToggle from '~/hooks/useToggle';

import {
  SellNftModal,
  TransferNftModal,
  CancelListingModal,
  OrderCompleteModal
} from '~/components';

const NFTCard = ({ nft }) => {
  const [forSale, setForSale] = useState(false);
  const [isSellNftModalOpen, toggleSellNftModal] = useToggle();
  const [isTransferNftModalOpen, toggleTransferNftModal] = useToggle();
  const [isCancelListingModalOpen, toggleCancelListingModal] = useToggle();
  const [isOrderCompleteModalOpen, toggleOrderCompleteModal] = useToggle();

  return (
    <>
      <CustomCard>
        <CustomCardHeader
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
          <NFTTitle>Giannis Antetokoumpo - Block</NFTTitle>
          <NFTText>{`BALLERZ #${nft.id}`}</NFTText>
          <NFTText>Test title</NFTText>
        </CardContent>
        <CardActions>
          {forSale ? (
            <CancelButtonContainer>
              <ListedText>Listed for sale</ListedText>
              <CancelButtonDivider />
              <CancelButton variant="text" onClick={() => toggleCancelListingModal()}>
                Cancel
              </CancelButton>
            </CancelButtonContainer>
          ) : (
            <>
              <SellButton onClick={() => toggleSellNftModal()}>Sell</SellButton>
              <TransferButton onClick={() => toggleTransferNftModal()}>Transfer</TransferButton>
            </>
          )}
        </CardActions>
      </CustomCard>
      <SellNftModal
        open={isSellNftModalOpen}
        onClose={toggleSellNftModal}
        onConfirm={() => {
          setForSale(true);
          toggleOrderCompleteModal();
        }}
      />
      <TransferNftModal open={isTransferNftModalOpen} onClose={toggleTransferNftModal} />
      <CancelListingModal
        open={isCancelListingModalOpen}
        onClose={toggleCancelListingModal}
        onConfirm={() => setForSale(false)}
      />
      <OrderCompleteModal open={isOrderCompleteModalOpen} onClose={toggleOrderCompleteModal} />
    </>
  );
};

NFTCard.propTypes = {
  sell: PropTypes.bool,
  transfer: PropTypes.bool
};

NFTCard.defaultProps = {
  sell: false,
  transfer: false
};

export default NFTCard;
