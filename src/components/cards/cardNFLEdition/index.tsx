import React, { memo, useEffect, useState } from 'react';
import NextImage from 'next/image';
import { Box, CardContent, Grid } from '@mui/material';
import Link from 'next/link';

import formatDate from 'date-fns/format';
import { generatePlayMediaUrl, ASSET_TYPES_LOOKUP } from '~/utils/nftImage';
import { SellButton, CancelButton } from '~/components/cards/cardDefault/cardActions/styled';
import { formatCurrencyValue } from '~/utils/formatCurrencyValue';
import { hasSell } from '~/config/config';
import useToggle from '~/hooks/useToggle';

import * as Styled from './styled';
import { formatNumber } from '~/helpers/stringHelpers';
import { SellNflModal } from '~/components/modal/nfl/sellNfl';
import { CancelNflModal } from '~/components/modal/nfl/cancelNfl';

const CardNFLEdition = ({ data, collectionName, hasActions, setPosition }: any) => {
  const [thumbnail, setThumbnail] = useState('/collections/nfl/moment/odel.png');
  const [isSellNftModalOpen, toggleSellNftModal] = useToggle();
  const [isCancelNftModalOpen, toggleCancelNftModal] = useToggle();
  if (data.edition == undefined) {
    data.edition = data;
  }

  const { edition } = data;
  const { play, set, series } = edition;

  useEffect(() => {
    const verifyThumbnailExist = async () => {
      const thumbnailUrl = generatePlayMediaUrl(
        play.external_id,
        set.name,
        ASSET_TYPES_LOOKUP.HERO_2880_2880_GREY,
        { width: 402, height: 402 }
      );

      const img = new Image();
      img.src = thumbnailUrl;

      if (img.complete) setThumbnail(thumbnailUrl);
      else img.onload = () => setThumbnail(thumbnailUrl);
    };

    verifyThumbnailExist();
  }, []);

  const handleSavePosition = () => {
    if (setPosition) {
      setPosition(data.edition.edition_id);
    }
  };

  return (
    <>
      <Link href={`/${collectionName}/${data.edition.edition_id}`}>
        <Styled.CustomCard id={`card-${data.edition.edition_id}`} onClick={handleSavePosition}>
          <Grid margin={0} overflow={'hidden'} borderRadius={'20px'}>
            <Styled.AssetContainer>
              <NextImage
                id={data.edition_id}
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
              paddingX: 0,
              paddingBottom: '0 !important'
            }}>
            <Grid container direction="column" justifyContent="space-between">
              <Grid container direction="column">
                <Styled.NFTText maxWidth={'276px'}>
                  {play?.player_full_name + ' - ' + play?.player_position}
                </Styled.NFTText>
                <Styled.NFTDescription>{`${play?.team_name}`}</Styled.NFTDescription>
                <Styled.NFTDescription>{`${play?.play_type} - ${formatDate(
                  new Date(play?.game_date),
                  'MMM dd yyyy'
                )}`}</Styled.NFTDescription>
                <Styled.NFTDescription>{`${set?.name} (${series?.name})`}</Styled.NFTDescription>
                <Styled.NFTDescription>
                  <b>{edition?.tier}</b>
                  {` ${data.serial_number || '#'}/${edition?.max_mint_size}`}
                </Styled.NFTDescription>
                {!!edition?.number_of_active_listings && (
                  <>
                    <Styled.NFTAvailableCount>
                      {formatNumber(edition.number_of_active_listings)} available for sale
                    </Styled.NFTAvailableCount>
                    <Styled.NFTPrice>
                      {`Starting at: $${formatCurrencyValue(edition?.min_list_price)}`}
                    </Styled.NFTPrice>
                  </>
                )}
              </Grid>
            </Grid>
          </CardContent>
          {hasActions && hasSell && (
            <Box display="flex" justifyContent="center" mt="auto">
              {edition?.active_listing_price || data?.active_listing_price ? (
                <CancelButton
                  onClick={(ev: React.MouseEvent<HTMLElement>) => {
                    ev.preventDefault();
                    toggleCancelNftModal();
                  }}>
                  Remove ${formatCurrencyValue(data?.active_listing_price)} Listing
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
    </>
  );
};

export default memo(CardNFLEdition);
