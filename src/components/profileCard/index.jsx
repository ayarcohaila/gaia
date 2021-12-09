import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { CardActions, CardContent, CardMedia, Avatar, Skeleton, Grid } from '@mui/material';
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
import { hasSecondarySale } from '~/config/config';
import { useCollectionConfig } from '~/hooks';

import * as Styled from './styled';

const ProfileCard = ({ data, isFromBrowser }) => {
  const { isMediumDevice, isExtraSmallDevice } = useBreakpoints();
  const { user } = useAuth();
  const router = useRouter();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [videoElement, setVideoElement] = useState(null);
  const [loading, setLoading] = useState(false);

  const [isSellNftModalOpen, toggleSellNftModal] = useToggle();
  const [isTransferNftModalOpen, toggleTransferNftModal] = useToggle();
  const [isCancelListingModalOpen, toggleCancelListingModal] = useToggle();
  const [isOrderCompleteModalOpen, toggleOrderCompleteModal] = useToggle();
  const { collectionsNames } = useCollectionConfig();

  const asset = {
    ...data,
    collectionName: data?.collection_name?.toUpperCase(),
    img: data?.imageURL
  };
  const isMyProfile = router.asPath.includes(user?.addr);

  const handleDisplayPreview = useCallback(() => {
    setImgLoaded(true);
  }, [setImgLoaded]);

  useEffect(() => {
    setVideoElement(window?.document?.getElementById(`video-${data.id}`));
  }, []);

  useEffect(() => {
    if (videoElement) {
      videoElement?.addEventListener('loadeddata', handleDisplayPreview());
    }
    return () => {
      videoElement?.removeEventListener('loadeddata', handleDisplayPreview());
    };
  }, [videoElement, handleDisplayPreview]);

  const renderCollectionName = useMemo(() => {
    if (data?.collection_name === collectionsNames.SHAREEF) {
      return data?.collection?.name;
    }
    return data?.collection_name.toUpperCase();
  }, [collectionsNames]);

  const renderUserCardActions = useMemo(() => {
    if (!hasSecondarySale) {
      return (
        <Grid container justifyContent="center">
          <Styled.ComingSoon container justifyContent="center" align="center">
            Sell & Transfer Coming Soon
          </Styled.ComingSoon>
        </Grid>
      );
    }
    return (
      <CardActions>
        {data?.is_for_sale ? (
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
        )}
      </CardActions>
    );
  }, [
    loading,
    toggleSellNftModal,
    toggleTransferNftModal,
    toggleCancelListingModal,
    hasSecondarySale
  ]);

  const renderContent = useMemo(
    () => (
      <Styled.CustomCard
        sx={{
          cursor: data?.mystery ? 'auto' : 'pointer',
          maxWidth: '308px',
          boxSizing: 'border-box'
        }}>
        <Styled.CustomCardHeader
          avatar={<Avatar alt="ss" src={data.collection_picture} sx={{ width: 28, height: 28 }} />}
          title={renderCollectionName}
        />
        {data?.videoURL && !data?.mystery ? (
          <Grid>
            <VideoPlayer
              src={data?.videoURL}
              poster={data?.imageURL}
              height={['275px', '275px', '275px', '275px']}
              width={['275px', '275px', '275px', '275px']}
              id={`video-${data.id}`}
            />
          </Grid>
        ) : (
          <>
            <CardMedia
              sx={{
                borderRadius: '20px',
                width: isMediumDevice ? '303' : '275',
                display: !imgLoaded ? 'none' : 'block'
              }}
              component="img"
              alt="Nft asset"
              height={isMediumDevice ? '303' : '275'}
              onLoad={handleDisplayPreview}
              src={data?.imageURL}
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
          </>
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
    ),
    [imgLoaded, handleDisplayPreview, isMyProfile, renderUserCardActions]
  );

  return (
    <>
      {data?.mystery ? (
        renderContent
      ) : (
        <Link href={`/${data.collection_name}/${data?.id}`} passHref>
          {renderContent}
        </Link>
      )}
      <SellNftModal
        asset={asset}
        hasPostedForSale={data?.is_for_sale}
        open={isSellNftModalOpen}
        onClose={toggleSellNftModal}
        setLoading={setLoading}
        loading={loading}
      />
      <TransferNftModal
        asset={asset}
        open={isTransferNftModalOpen}
        onClose={toggleTransferNftModal}
      />
      <CancelListingModal
        asset={asset}
        open={isCancelListingModalOpen}
        onClose={toggleCancelListingModal}
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
