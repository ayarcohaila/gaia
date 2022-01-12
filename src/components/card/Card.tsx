import React, { useState } from 'react';
import { CustomCard, CustomCardHeader, NFTText, NFTPrice } from './styled';
import Link from 'next/link';
import { Avatar, CardContent, Grid, Skeleton } from '@mui/material';
import { formatCurrencyValue } from '~/utils/formatCurrencyValue';
import getLastByUpdateAt from '~/utils/getLastByUpdateAt';
import COLLECTION_LIST_CONFIG, { COLLECTIONS_NAME } from 'collections_setup';
import { useBreakpoints, useToggle } from '~/hooks';
import formatIpfsImg from '~/utils/formatIpfsImg';
import { VideoPlayer } from '~/components';
import {
  SellNftModal,
  TransferNftModal,
  CancelListingModal,
  OrderCompleteModal
} from '~/components';
import { CardActions } from './CardActions';
import NextImage from 'next/image';
import { CardProps } from './types';

export const Card = (props: CardProps) => {
  const { data, hasActions, isMarketplace } = props;
  const { isSmallDevice } = useBreakpoints();
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
    data.collection_id === COLLECTION_LIST_CONFIG.shareef.id
      ? data.asset_id
      : data.template.metadata.id || data.mint_number;
  return (
    <>
      <Link href={`/${currentCollection?.collectionName}/${nftRedirectReference}`} passHref>
        <CustomCard sx={{ cursor: data?.mystery ? 'auto' : 'pointer' }}>
          <CustomCardHeader
            avatar={
              <Avatar
                alt={`The ${currentCollection?.collectionName.toUpperCase()} collection avatar image`}
                src={
                  Object.values(COLLECTION_LIST_CONFIG)?.find(
                    item => item.id === data.collection_id
                  )?.avatar
                }
                sx={{ width: 28, height: 28 }}
              />
            }
            title={currentCollection?.collectionName.toUpperCase()}
          />
          {currentCollection?.collectionName === COLLECTIONS_NAME.BRYSON &&
          !currentCollection?.mystery ? (
            <Grid maxWidth={'276px'}>
              <VideoPlayer
                containerProps={undefined}
                src={formatIpfsImg(data?.template.metadata.video)}
                poster={formatIpfsImg(data?.template.metadata.img)}
                height={['275px', '275px', '275px', '275px']}
                width={['275px', '275px', '275px', 'auto']}
              />
            </Grid>
          ) : (
            <Grid
              position={'relative'}
              maxWidth={'276px'}
              width={isSmallDevice ? '100%' : '276px'}
              height={'276px'}
              margin={0}
              overflow={'hidden'}
              borderRadius={'20px'}>
              <NextImage
                alt="Nft asset"
                layout={'fill'}
                onLoadingComplete={() => {
                  setImgLoaded(true);
                }}
                src={
                  currentCollection?.mystery
                    ? '/images/mystery-nft.gif'
                    : formatIpfsImg(data?.template?.metadata.img)
                }
              />
              <Skeleton
                variant="rectangular"
                height={275}
                width={275}
                sx={{
                  borderRadius: '20px',
                  margin: 0,
                  display: imgLoaded ? 'none' : undefined,
                  position: 'absolute'
                }}
              />
            </Grid>
          )}
          <CardContent
            sx={{
              paddingX: 0,
              paddingBottom: hasActions || isMarketplace ? '0 !important' : '24px'
            }}>
            <NFTText maxWidth={'276px'}>{data?.template?.metadata?.title}</NFTText>
            {isMarketplace &&
              data?.has_sale_offers &&
              data?.sale_offers.some(item => item.status === 'active') && (
                <NFTPrice>
                  $
                  {formatCurrencyValue(
                    getLastByUpdateAt(data?.sale_offers.filter(item => item.status === 'active'))
                      ?.price
                  )}
                </NFTPrice>
              )}
          </CardContent>
          {hasActions && (
            <CardActions
              data={data}
              loading={loading}
              toggleCancelListingModal={toggleCancelListingModal}
              toggleSellNftModal={toggleSellNftModal}
              toggleTransferNftModal={toggleTransferNftModal}
            />
          )}
        </CustomCard>
      </Link>
      <SellNftModal
        asset={asset}
        hasPostedForSale={data?.has_sale_offers}
        open={isSellNftModalOpen}
        onClose={toggleSellNftModal}
        setLoading={setLoading}
        loading={loading}
        collectionId={data?.collection_id}
        onConfirm={null}
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
        onConfirm={null}
      />
      <OrderCompleteModal
        asset={undefined}
        blockchainId={undefined}
        orderId={undefined}
        open={isOrderCompleteModalOpen}
        onClose={toggleOrderCompleteModal}
      />
    </>
  );
};
