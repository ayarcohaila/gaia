import React, { useState, useMemo, useEffect } from 'react';
import { CardContent, CardMedia, Avatar, Skeleton, Grid } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { VideoPlayer } from '~/components';
import formatIpfsImg from '~/utils/formatIpfsImg';
import { COLLECTIONS_NAME, COLLECTION_LIST_CONFIG } from '~/../collections_setup';

import * as Styled from './styled';

const BrowseCard = ({ data }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const currentCollection = Object.values(COLLECTION_LIST_CONFIG)?.find(
    item => item.id === data.collection_id
  );

  const videoElement = useMemo(
    () => document.getElementById(`video-${data.asset_id}`),
    [data.asset_id]
  );

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

  const renderContent = () => (
    <Styled.CustomCard
      sx={{
        cursor: currentCollection?.mystery ? 'auto' : 'pointer'
      }}>
      <Styled.CustomCardHeader
        avatar={
          <Avatar
            alt="ss"
            src={
              Object.values(COLLECTION_LIST_CONFIG)?.find(item => item.id === data.collection_id)
                ?.avatar
            }
            sx={{ width: 28, height: 28 }}
          />
        }
        title={currentCollection?.collectionName.toUpperCase()}
        action={<MoreHorizIcon onClick={handleMoreIcon} />}
      />

      {currentCollection.collectionName === COLLECTIONS_NAME.BRYSON &&
      !currentCollection.mystery ? (
        <Grid sx={{ display: !imgLoaded && 'none' }}>
          <VideoPlayer
            src={formatIpfsImg(data?.template.metadata.video)}
            poster={formatIpfsImg(data?.template.metadata.img)}
            height={['275px', '275px', '275px', '275px']}
            width={['275px', '275px', '275px', '275px']}
            id={`video-${data.asset_id}`}
          />
        </Grid>
      ) : (
        <>
          <Skeleton
            variant="rect"
            height={275}
            width={275}
            sx={{ borderRadius: '20px', margin: '0 auto', display: imgLoaded && 'none' }}
          />
          <CardMedia
            sx={{
              borderRadius: '20px',
              width: '275px',
              height: '275px',
              margin: '0 auto',
              display: !imgLoaded && 'none'
            }}
            component="img"
            alt="Nft asset"
            height={275}
            onLoad={() => setImgLoaded(true)}
            src={
              currentCollection?.mystery
                ? '/images/mystery-nft.gif'
                : formatIpfsImg(data?.template?.metadata.img)
            }
          />
        </>
      )}
      <CardContent sx={{ paddingX: 0, paddingBottom: 0 }}>
        <Styled.NFTText>{data?.template?.metadata?.title}</Styled.NFTText>
        <Styled.NFTDescription>{data?.template?.metadata?.description}</Styled.NFTDescription>
        {data?.is_for_sale && (
          <Styled.NFTPrice>
            ${' '}
            {Number(data?.sale_offers?.find(item => item?.status === 'active')?.price)?.toFixed(2)}
          </Styled.NFTPrice>
        )}
      </CardContent>
    </Styled.CustomCard>
  );

  if (!currentCollection) {
    return null;
  }
  return (
    <Link
      href={`/${currentCollection.collectionName}/${
        data?.template?.metadata?.id || data?.template?.metadata?.item
      }`}
      passHref>
      {renderContent()}
    </Link>
  );
};

BrowseCard.propTypes = {
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

export default React.memo(BrowseCard);
