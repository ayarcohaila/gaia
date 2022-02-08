import React, { memo, useEffect, useState } from 'react';
import NextImage from 'next/image';
import { Box, CardContent, CircularProgress, Grid } from '@mui/material';
import Link from 'next/link';

import { generatePlayMediaUrl, ASSET_TYPES_LOOKUP } from '~/utils/nftImage';
import {
  SellButton,
  CancelButton,
  PurchaseButton
} from '~/components/cards/cardDefault/cardActions/styled';
import { formatCurrencyValue } from '~/utils/formatCurrencyValue';

import { hasSell } from '~/config/config';
import useToggle from '~/hooks/useToggle';
import { usePendingOperations } from '~/providers/PendingOperationsProvider';

import * as Styled from './styled';
import { FsNflAllDayMoment } from '~/api/models/fsNflAllDayMoment';
import moment from 'moment';
import { SellNflModal } from '~/components/modal/nfl/sellNfl';
import { CancelNflModal } from '~/components/modal/nfl/cancelNfl';
import { useAuthContext } from '~/providers/AuthProvider';
import { PurchaseNflModal } from '~/components/modal/nfl/purchaseNfl';

type Props = {
  data: FsNflAllDayMoment;
  collectionName: string;
  hasActions: boolean;
};

const CardNFL = ({ data, collectionName, hasActions }: Props) => {
  const [thumbnail, setThumbnail] = useState('/collections/nfl/moment/odel.png');
  const [isSellNftModalOpen, toggleSellNftModal] = useToggle();
  const [isCancelNftModalOpen, toggleCancelNftModal] = useToggle();
  const [isPurchaseNftModalOpen, togglePurchaseNftModal] = useToggle();
  const [hasPendingOperation, setHasPendingOperation] = useState(false);

  const { user } = useAuthContext();

  const { edition } = data;
  const { play, set, series } = data;

  const { pendingOperations } = usePendingOperations();

  useEffect(() => {
    setHasPendingOperation(
      pendingOperations.find(o =>
        o.affectedNfts.find(n => n.nftType === 'nfl_all_day' && n.nftId === data.momentId)
      ) !== undefined
    );
  }, [pendingOperations, setHasPendingOperation]);

  useEffect(() => {
    const verifyThumbnailExist = async () => {
      const thumbnailUrl = generatePlayMediaUrl(
        play.externalId!,
        set.name,
        ASSET_TYPES_LOOKUP.HERO_2880_2880_BLACK,
        { width: 402, height: 402 }
      );

      const img = new Image();
      img.src = thumbnailUrl;

      if (img.complete) setThumbnail(thumbnailUrl);
      else img.onload = () => setThumbnail(thumbnailUrl);
    };

    verifyThumbnailExist();
  }, []);

  return (
    <>
      <Link href={`/${collectionName}/${data.edition.editionId}/moment/${data.serialNumber}`}>
        <Styled.CustomCard>
          <Grid margin={0} overflow={'hidden'} borderRadius={'20px'}>
            <Styled.AssetContainer>
              <NextImage
                id={String(edition.editionId)}
                alt="Nft asset"
                layout={'responsive'}
                objectFit="cover"
                height={'17.25rem'}
                width={'17.25rem'}
                src={thumbnail}
              />
            </Styled.AssetContainer>
          </Grid>

          <CardContent
            sx={{
              padding: '14px 8px',
              paddingBottom: '0 !important'
            }}>
            <Grid container direction="column" justifyContent="space-between">
              <Grid container direction="column">
                <Styled.NFTText maxWidth={'276px'}>
                  {play.playerFullName + ' - ' + play.playerPosition}
                </Styled.NFTText>
                <Styled.NFTDescription>{`${play.teamName}`}</Styled.NFTDescription>
                <Styled.NFTDescription>{`${play.playType} - ${moment(
                  play.gameDate,
                  'YYYY-MM-DD'
                ).format('MMM DD YYYY')}`}</Styled.NFTDescription>
                <Styled.NFTDescription>{`${set.name} (${series.name})`}</Styled.NFTDescription>
                <Styled.NFTDescription>
                  <b>{edition.tier}</b>
                  {` #${data.serialNumber}/${edition.maxMintSize}`}
                </Styled.NFTDescription>
              </Grid>
            </Grid>
          </CardContent>
          {hasActions && user?.addr !== data.owner && (
            <Box display="flex" justifyContent="center" mt="auto">
              {hasPendingOperation ? (
                <CircularProgress />
              ) : (
                <>
                  {data.activeListingPrice ? (
                    <PurchaseButton
                      onClick={(ev: React.MouseEvent<HTMLElement>) => {
                        ev.preventDefault();
                        togglePurchaseNftModal();
                      }}>
                      Buy ${formatCurrencyValue(data?.activeListingPrice)}
                    </PurchaseButton>
                  ) : null}
                </>
              )}
            </Box>
          )}
          {hasActions && hasSell && user?.addr === data.owner && (
            <Box display="flex" justifyContent="center" mt="auto">
              {hasPendingOperation ? (
                <CircularProgress />
              ) : (
                <>
                  {data.activeListingPrice ? (
                    <CancelButton
                      onClick={(ev: React.MouseEvent<HTMLElement>) => {
                        ev.preventDefault();
                        toggleCancelNftModal();
                      }}>
                      Remove ${formatCurrencyValue(data?.activeListingPrice)} Listing
                    </CancelButton>
                  ) : (
                    <SellButton
                      onClick={(ev: React.MouseEvent<HTMLElement>) => {
                        ev.preventDefault();
                        toggleSellNftModal();
                      }}>
                      Sell
                    </SellButton>
                  )}
                </>
              )}
            </Box>
          )}
        </Styled.CustomCard>
      </Link>
      {isSellNftModalOpen ? (
        <SellNflModal
          show={true}
          assetImage={generatePlayMediaUrl(
            play.externalId!,
            set.name,
            ASSET_TYPES_LOOKUP.HERO_2880_2880_BLACK,
            { width: 180, height: 180 }
          )}
          moment={data}
          onClose={() => toggleSellNftModal()}
        />
      ) : null}
      {isCancelNftModalOpen && (
        <CancelNflModal
          show={true}
          assetImage={generatePlayMediaUrl(
            play.externalId!,
            set.name,
            ASSET_TYPES_LOOKUP.HERO_2880_2880_BLACK,
            { width: 180, height: 180 }
          )}
          moment={data}
          orderId={data.activeListingOrderId!}
          onClose={() => toggleCancelNftModal()}
        />
      )}
      {isPurchaseNftModalOpen && (
        <PurchaseNflModal
          show={true}
          assetImage={generatePlayMediaUrl(
            data.play.externalId!,
            data.set.name,
            ASSET_TYPES_LOOKUP.HERO_2880_2880_BLACK,
            { width: 180, height: 180 }
          )}
          moment={data}
          orderId={data.activeListingOrderId!}
          orderAddress={data.activeListingOrderAddress!}
          price={data.activeListingPrice!}
          onClose={() => togglePurchaseNftModal()}
        />
      )}
    </>
  );
};

export default memo(CardNFL);
