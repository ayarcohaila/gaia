import React, { useState } from 'react';
import { CardMedia, Avatar, Skeleton } from '@mui/material';
//FUTURE FEATURE
//import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { VideoPlayer } from '~/components';
import formatIpfsImg from '~/utils/formatIpfsImg';
import { COLLECTIONS_NAME, COLLECTION_LIST_CONFIG } from '~/../collections_setup';
import { useBreakpoints } from '~/hooks';
import getLastByUpdateAt from '~/utils/getLastByUpdateAt';

import * as Styled from './styled';

const BrowseCard = ({ data }) => {
  const { isMediumDevice, isSmallDevice } = useBreakpoints();
  const [imgLoaded, setImgLoaded] = useState(false);
  const currentCollection = Object.values(COLLECTION_LIST_CONFIG)?.find(
    item => item.id === data.collection_id
  );

  //FUTURE FEATURE
  /*
  const handleMoreIcon = event => {
    event.preventDefault();
  };
  */

  const shouldAddExtraMargin =
    currentCollection?.collectionName === COLLECTIONS_NAME.BRYSON &&
    (isSmallDevice || !isMediumDevice);

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
        //FUTURE FEATURE
        //action={<MoreHorizIcon onClick={handleMoreIcon} />}
      />

      {currentCollection.collectionName === COLLECTIONS_NAME.BRYSON &&
      !currentCollection.mystery ? (
        <VideoPlayer
          src={formatIpfsImg(data?.template.metadata.video)}
          poster={formatIpfsImg(data?.template.metadata.img)}
          height={['276px', '276px', '276px', '276px']}
          width={['276px', '276px', '276px', 'auto']}
        />
      ) : (
        <>
          <Skeleton
            variant="rect"
            height={275}
            width={275}
            sx={{ borderRadius: '20px', margin: '0 auto 16px', display: imgLoaded && 'none' }}
          />
          <CardMedia
            sx={{
              borderRadius: '20px',
              width: isSmallDevice ? '100%' : '276px',
              height: '276px',
              margin: '0 auto 16px',
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
      <Styled.CustomCardContent>
        <Styled.NFTText
          sx={{
            marginTop: shouldAddExtraMargin && '16px'
          }}>
          {data?.template?.metadata?.title}
        </Styled.NFTText>
        {data?.is_for_sale && data?.sale_offers.some(item => item.status === 'active') && (
          <Styled.NFTPrice>
            $ {Number(getLastByUpdateAt(data?.sale_offers)?.price)?.toFixed(2)}
          </Styled.NFTPrice>
        )}
      </Styled.CustomCardContent>
    </Styled.CustomCard>
  );

  if (!currentCollection) {
    return null;
  }
  const nftRedirectReference =
    data.collection_id === COLLECTION_LIST_CONFIG.shareef.id
      ? data.asset_id
      : data.template.metadata.id || data.mint_number;

  return (
    <Link href={`/${currentCollection.collectionName}/${nftRedirectReference}`} passHref>
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
