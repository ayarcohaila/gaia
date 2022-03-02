import React, { useState, memo } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Avatar, CardContent, Grid } from '@mui/material';

import { formatCurrencyValue } from '~/utils/formatCurrencyValue';
import getLastByUpdateAt from '~/utils/getLastByUpdateAt';
import useToggle from '~/hooks/useToggle';
import formatIpfsImg from '~/utils/formatIpfsImg';
import FavoriteButton from '~/components/favoriteButton';
import VideoPlayer from '~/components/videoPlayer';
import COLLECTION_LIST_CONFIG, { COLLECTIONS_NAME } from 'collections_setup';

const CardActions = dynamic(() => import('./cardActions'));
const SellNftModal = dynamic(() => import('~/components/modal/sellNft'));
const TransferNftModal = dynamic(() => import('~/components/modal/transferNft'));
const CancelListingModal = dynamic(() => import('~/components/modal/cancelListing'));
const OrderCompleteModal = dynamic(() => import('~/components/modal/orderComplete'));

import { CardProps } from './types';
import * as Styled from './styled';

const Card = (props: CardProps) => {
  const { data, hasActions, hasPrice, setPosition, onFavoriteClick } = props;
  const [imgLoaded, setImgLoaded] = useState(false);
  const [isSellNftModalOpen, toggleSellNftModal] = useToggle();
  const [isTransferNftModalOpen, toggleTransferNftModal] = useToggle();
  const [isCancelListingModalOpen, toggleCancelListingModal] = useToggle();
  const [isOrderCompleteModalOpen, toggleOrderCompleteModal] = useToggle();
  const [loading, setLoading] = useState(false);
  const asset = {
    ...data,
    collectionName: data?.collection_name?.toUpperCase(),
    img: data?.imageURL
  };

  const currentCollection = Object.values(COLLECTION_LIST_CONFIG)?.find(
    item => item.id === data.collection_id
  );

  const nftRedirectReference =
    data.collection_id === COLLECTION_LIST_CONFIG.shareef.id ||
    data.collection_id === COLLECTION_LIST_CONFIG[COLLECTIONS_NAME.SHAREEF_AIRDROP].id
      ? data.asset_id
      : data.template.metadata.id || data.mint_number;

  const nftCollectionRedirect =
    data.collection_id === COLLECTION_LIST_CONFIG[COLLECTIONS_NAME.SHAREEF_AIRDROP].id
      ? COLLECTIONS_NAME.SHAREEF_AIRDROP
      : currentCollection?.collectionName;

  const COLLECTIONS_NAME_UPPERCASE = currentCollection?.collectionName.toUpperCase();

  const handleSavePosition = () => {
    if (setPosition) {
      setPosition(data.asset_id);
    }
  };

  return (
    <>
      <Link href={`/${nftCollectionRedirect}/${nftRedirectReference}`} passHref>
        <Styled.CustomCard
          sx={{ cursor: data?.mystery ? 'auto' : 'pointer' }}
          onClick={handleSavePosition}
          id={`card-${data.asset_id}`}>
          <Styled.CustomCardHeader
            avatar={
              <Avatar
                alt={`The ${COLLECTIONS_NAME_UPPERCASE} collection avatar image`}
                src={
                  Object.values(COLLECTION_LIST_CONFIG)?.find(
                    item => item.id === data.collection_id
                  )?.avatar
                }
                sx={{ width: 28, height: 28 }}
              />
            }
            title={
              <Styled.CustomCardHeaderWrapper>
                {COLLECTIONS_NAME_UPPERCASE}
                <FavoriteButton nftId={data.id} afterClick={onFavoriteClick} />
              </Styled.CustomCardHeaderWrapper>
            }
          />

          <Grid margin={0} overflow={'hidden'} borderRadius={'20px'}>
            <Styled.AssetContainer>
              {data?.template.metadata.video && !currentCollection?.mystery ? (
                <Styled.GridVideo>
                  <VideoPlayer
                    id={data.asset_id}
                    containerProps={undefined}
                    src={formatIpfsImg(data?.template.metadata.video)}
                    poster={formatIpfsImg(data?.template.metadata.img)}
                    height={['100%']}
                    width={['100%']}
                  />
                </Styled.GridVideo>
              ) : (
                <>
                  <Styled.ImageContainer imgLoaded={imgLoaded}>
                    <Image
                      id={`${data.asset_id}`}
                      alt="Nft asset"
                      layout={'responsive'}
                      objectFit="cover"
                      height={'17.25rem'}
                      width={'17.25rem'}
                      quality={100}
                      onLoadingComplete={() => {
                        setImgLoaded(true);
                      }}
                      src={
                        currentCollection?.mystery
                          ? '/images/mystery-nft.gif'
                          : formatIpfsImg(data?.template?.metadata.img)
                      }
                    />
                  </Styled.ImageContainer>
                  {!imgLoaded && <Styled.Skeleton variant="rectangular" />}
                </>
              )}
            </Styled.AssetContainer>
          </Grid>
          <CardContent
            sx={{
              paddingX: 0,
              paddingBottom: '0 !important'
            }}>
            <Styled.NFTText maxWidth={'276px'}>{data?.template?.metadata?.title}</Styled.NFTText>
            {hasPrice &&
              data?.has_sale_offers &&
              data?.sale_offers.some(item => item.status === 'active') && (
                <Styled.NFTPrice>
                  ${formatCurrencyValue(getLastByUpdateAt(data?.sale_offers)?.price)}
                </Styled.NFTPrice>
              )}

            {hasActions && (
              <CardActions
                data={data}
                loading={loading}
                toggleCancelListingModal={toggleCancelListingModal}
                toggleSellNftModal={toggleSellNftModal}
                toggleTransferNftModal={toggleTransferNftModal}
              />
            )}
          </CardContent>
        </Styled.CustomCard>
      </Link>
      {isSellNftModalOpen && (
        <SellNftModal
          asset={asset}
          hasPostedForSale={data?.has_sale_offers}
          open={isSellNftModalOpen}
          onClose={toggleSellNftModal}
          setLoading={setLoading}
          loading={loading}
          collectionId={data?.collection_id}
          onConfirm={() => {}}
        />
      )}
      {isTransferNftModalOpen && (
        <TransferNftModal
          asset={asset}
          open={isTransferNftModalOpen}
          onClose={toggleTransferNftModal}
        />
      )}
      {isCancelListingModalOpen && (
        <CancelListingModal
          asset={asset}
          open={isCancelListingModalOpen}
          onClose={toggleCancelListingModal}
          onConfirm={() => {}}
        />
      )}
      {isOrderCompleteModalOpen && (
        <OrderCompleteModal
          asset={undefined}
          blockchainId={undefined}
          orderId={undefined}
          open={isOrderCompleteModalOpen}
          onClose={toggleOrderCompleteModal}
        />
      )}
    </>
  );
};

export default memo(Card);
