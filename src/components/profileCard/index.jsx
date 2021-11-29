import React, { useMemo, useState, useEffect } from 'react';
import { CardActions, CardContent, CardMedia, Avatar, Skeleton, Grid } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  SellNftModal,
  TransferNftModal,
  CancelListingModal,
  OrderCompleteModal,
  VideoPlayer
} from '~/components';
import { useToggle, useAuth, useBreakpoints } from '~/hooks';

import * as Styled from './styled';
import { COLLECTIONS_NAME } from '../../../collections_setup';

const ProfileCard = ({ data, isFromBrowser }) => {
  const { isMediumDevice, isExtraSmallDevice } = useBreakpoints();
  const { user } = useAuth();
  const router = useRouter();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isSellNftModalOpen, toggleSellNftModal] = useToggle();
  const [isTransferNftModalOpen, toggleTransferNftModal] = useToggle();
  const [isCancelListingModalOpen, toggleCancelListingModal] = useToggle();
  const [isOrderCompleteModalOpen, toggleOrderCompleteModal] = useToggle();

  const [isForSale, setIsForSale] = useState(false);

  const asset = {
    ...data,
    collectionName: data?.collection_name?.toUpperCase(),
    img: data?.imageURL
  };
  const isMyProfile = router.asPath.includes(user?.addr);

  const showSellButton = process.env.NEXT_PUBLIC_HAS_SELL_BUTTON === 'true';
  const videoElement = document.getElementById(`video-${data.id}`);

  const handleVideoLoad = () => {
    setImgLoaded(true);
  };

  const handleMoreIcon = event => {
    event.preventDefault();
  };

  useEffect(() => {
    if (videoElement) {
      videoElement?.addEventListener('loadeddata', handleVideoLoad());
    }
    return () => {
      videoElement?.removeEventListener('loadeddata', handleVideoLoad());
    };
  }, [videoElement]);

  const renderUserCardActions = useMemo(() => {
    return (
      <CardActions>
        {isForSale ? (
          <Styled.CancelButtonContainer>
            <Styled.ListedText disabled={loading}>Listed for sale</Styled.ListedText>
            <Styled.CancelButtonDivider />
            <Styled.CancelButton
              disabled={loading}
              variant="text"
              onClick={event => {
                event?.stopPropagation();
                toggleCancelListingModal();
              }}>
              Cancel
            </Styled.CancelButton>
          </Styled.CancelButtonContainer>
        ) : (
          <>
            {showSellButton ? (
              <>
                <Styled.SellButton
                  disabled={loading}
                  onClick={event => {
                    event?.stopPropagation();
                    toggleSellNftModal();
                  }}>
                  Sell
                </Styled.SellButton>
                <Styled.TransferButton
                  disabled={loading}
                  onClick={event => {
                    event?.stopPropagation();
                    toggleTransferNftModal();
                  }}>
                  Transfer
                </Styled.TransferButton>
              </>
            ) : (
              <Styled.ComingSoon container justifyContent="center" align="center">
                Sell & Transfer Coming Soon
              </Styled.ComingSoon>
            )}
          </>
        )}
      </CardActions>
    );
  }, [toggleSellNftModal, toggleTransferNftModal, toggleCancelListingModal, isForSale]);

  const renderContent = () => (
    <Styled.CustomCard
      sx={{
        cursor: data.mystery ? 'auto' : 'pointer'
      }}>
      <Styled.CustomCardHeader
        avatar={<Avatar alt="ss" src={data.collection_picture} sx={{ width: 28, height: 28 }} />}
        title={isFromBrowser ? data.collection_name : data.collection_name.toUpperCase()}
        action={isFromBrowser && <MoreHorizIcon onClick={handleMoreIcon} />}
      />
      <Skeleton
        variant="rect"
        height={isExtraSmallDevice ? '250px' : isMediumDevice ? '303px' : '275px'}
        sx={{
          borderRadius: '20px',
          width: isExtraSmallDevice ? '250px' : isMediumDevice ? '303px' : '275px',
          display: imgLoaded && 'none'
        }}
      />
      {data.collection_name === COLLECTIONS_NAME.BRYSON && !data.mystery ? (
        <Grid sx={{ display: !imgLoaded && 'none' }}>
          <VideoPlayer
            src={data?.videoURL}
            poster={data?.imageURL}
            height={['275px', '275px', '275px', '275px']}
            width={['275px', '275px', '275px', '275px']}
            id={`video-${data.id}`}
          />
        </Grid>
      ) : (
        <CardMedia
          sx={{
            borderRadius: '20px',
            width: isMediumDevice ? '303' : '275',
            display: !imgLoaded && 'none'
          }}
          component="img"
          alt="Nft asset"
          height={isMediumDevice ? '303' : '275'}
          onLoad={() => setImgLoaded(true)}
          src={data?.imageURL}
        />
      )}
      <CardContent sx={{ paddingX: 0, paddingBottom: 0 }}>
        <Styled.NFTText>{data?.name}</Styled.NFTText>
        {isFromBrowser && (
          <>
            <Styled.NFTDescription>{data?.description}</Styled.NFTDescription>
            <Styled.NFTPrice>{data?.price}</Styled.NFTPrice>
          </>
        )}
      </CardContent>
      {isMyProfile && renderUserCardActions}
    </Styled.CustomCard>
  );

  return (
    <>
      {data?.mystery ? (
        renderContent()
      ) : (
        <Link href={`/${data.collection_name}/${data?.id}`} passHref>
          {renderContent()}
        </Link>
      )}
      <SellNftModal
        asset={asset}
        hasPostedForSale={data?.is_for_sale || false}
        open={isSellNftModalOpen}
        onClose={toggleSellNftModal}
        setLoading={setLoading}
        onConfirm={() => {
          // @TODO: This logic must be validated, only added to remove a warning on console
          setIsForSale(true);
          toggleSellNftModal();
        }}
        loading={loading}
      />
      <TransferNftModal
        asset={asset}
        open={isTransferNftModalOpen}
        onClose={toggleTransferNftModal}
      />
      <CancelListingModal
        asset={asset}
        hasPostedForSale={data?.is_for_sale || false}
        open={isCancelListingModalOpen}
        onClose={toggleCancelListingModal}
        onConfirm={() => {
          setIsForSale(false);
        }} // For cancel confirmation
      />
      <OrderCompleteModal open={isOrderCompleteModalOpen} onClose={toggleOrderCompleteModal} />
    </>
  );
};

ProfileCard.propTypes = {
  //TODO: Remove prop isFake on integration
  isFake: PropTypes.bool,
  sell: PropTypes.bool,
  transfer: PropTypes.bool,
  isFromBrowser: PropTypes.bool,
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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

ProfileCard.defaultProps = {
  isFake: false,
  sell: false,
  transfer: false,
  isFromBrowser: false
};

export default React.memo(ProfileCard);
