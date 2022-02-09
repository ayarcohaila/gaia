import { Box, Grid, Typography, useTheme } from '@mui/material';
import { memo, useMemo, MouseEvent } from 'react';
import Breadcrumbs from '~/components/breadcrumbs';
import AdditionalDetails from './additionalDetails';
import ShareButton from '~/components/shareButton';
import useBreakpoints from '~/hooks/useBreakpoints';
import { generatePlayMediaUrl, ASSET_TYPES_LOOKUP } from '~/utils/nftImage';
import Asset from './asset';
import CollectionInfo from './collectionInfo';
import { MomentProps } from './types';
import { useRouter } from 'next/router';
import { camelize } from '~/utils/camelize';
import {
  SellButton,
  CancelButton,
  PurchaseButton
} from '~/components/cards/cardDefault/cardActions/styled';
import { hasSell } from '~/config/config';
import { formatCurrencyValue } from '~/utils/formatCurrencyValue';
import useToggle from '~/hooks/useToggle';
import { SellNflModal } from '~/components/modal/nfl/sellNfl';
import { CancelNflModal } from '~/components/modal/nfl/cancelNfl';
import { useAuthContext } from '~/providers/AuthProvider';
import { PurchaseNflModal } from '~/components/modal/nfl/purchaseNfl';

import * as Styled from './styles';
import BlockchainHistory from '~/components/productDetails/detailsNFL/blockchainHistory';

const ASSETS_IMAGES = [
  ASSET_TYPES_LOOKUP.VIDEO_SQUARE_LOGO_1080_1080_BLACK,
  ASSET_TYPES_LOOKUP.VIDEO_IDLE_1080_1080_BLACK,
  ASSET_TYPES_LOOKUP.SCORES_2880_2880_GREY,
  ASSET_TYPES_LOOKUP.PLAYER_2880_2880_BLACK,
  ASSET_TYPES_LOOKUP.LEGAL_2880_2880_GREY
];

const MomentNFLDetails = ({ moment }: MomentProps) => {
  const { login, user } = useAuthContext();
  const [isSellNftModalOpen, toggleSellNftModal] = useToggle();
  const [isCancelNftModalOpen, toggleCancelNftModal] = useToggle();
  const [isPurchaseNftModalOpen, togglePurchaseNftModal] = useToggle();

  const thumbnails: Array<string> = ASSETS_IMAGES.map(asset => {
    const thumbnailUrl = generatePlayMediaUrl(
      moment?.edition?.play?.external_id!,
      moment?.edition?.set?.name!,
      asset
    );
    return thumbnailUrl;
  });

  const {
    query: { nft_id }
  } = useRouter();

  const {
    palette: { grey }
  } = useTheme();
  const { isMediumDevice, isSmallDevice } = useBreakpoints();

  const modalAssetUrl = useMemo(
    () =>
      generatePlayMediaUrl(
        moment?.edition?.play?.external_id!,
        moment?.edition?.set?.name!,
        ASSET_TYPES_LOOKUP.HERO_2880_2880_BLACK,
        { width: 180, height: 180 }
      ),
    [moment.edition]
  );

  const breadcrumbsLinks = useMemo(
    () => [
      {
        label: 'Home',
        href: '/'
      },
      {
        label: 'NFL All Day NFTs',
        href: '/nfl-all-day'
      },
      {
        label: `Edition #${nft_id}`,
        ...(moment.serial_number ? { href: `/nfl-all-day/${nft_id}` } : {})
      },
      ...(moment.serial_number ? [{ label: `Moment #${moment.serial_number}` }] : [])
    ],
    []
  );

  const propSectionItems = [
    { label: 'Tier', value: moment?.edition?.tier },
    { label: 'Player Name', value: moment?.edition?.play?.player_full_name },
    { label: 'Team Name', value: moment?.edition?.play?.team_name },
    { label: 'Set', value: moment?.edition?.set?.name },
    { label: 'Series', value: moment?.edition?.series?.name },
    { label: 'Play Type', value: moment?.edition?.play?.play_type },
    { label: 'Player Position', value: moment?.edition?.play?.player_position }
  ];

  const renderBlockChain = useMemo(
    () => (
      <>
        <Styled.AcordionWrapper>
          <Styled.CustomAccordion
            hasDivider={false}
            defaultExpanded
            mt={30}
            title="Blockchain History"
            contentSx={{ p: 0 }}>
            <BlockchainHistory
              data={{
                owner: moment?.owner!,
                mintDate: moment?.edition?.inserted_at // FIXME: need to get the actual mint date for the moment we are looking at
              }}
            />
          </Styled.CustomAccordion>
        </Styled.AcordionWrapper>
      </>
    ),
    [isMediumDevice, isSmallDevice]
  );

  const renderProperties = useMemo(
    () => (
      <Styled.AcordionWrapper>
        <Styled.CustomAccordion
          defaultExpanded
          my={3}
          title="Properties"
          hasDivider={false}
          id="propsAccordion"
          contentSx={{ p: 0 }}>
          <AdditionalDetails listOfProps={propSectionItems} />
        </Styled.CustomAccordion>
      </Styled.AcordionWrapper>
    ),
    [isMediumDevice]
  );

  const handlePurchase = (ev: MouseEvent<HTMLElement>) => {
    ev.preventDefault();
    if (user?.addr) {
      togglePurchaseNftModal();
    } else {
      login();
    }
  };

  const handleCancel = (ev: MouseEvent<HTMLElement>) => {
    ev.preventDefault();
    toggleCancelNftModal();
  };

  const handleSell = (ev: MouseEvent<HTMLElement>) => {
    ev.preventDefault();
    toggleSellNftModal();
  };

  const renderActions = useMemo(() => {
    const isOwner = user?.addr === moment.owner;
    if (!hasSell) {
      return '';
    }

    if (isOwner) {
      return moment?.active_listing_price ? (
        <CancelButton sx={{ maxWidth: '300px' }} onClick={handleCancel}>
          Remove ${formatCurrencyValue(moment.active_listing_price)} Listing
        </CancelButton>
      ) : (
        <SellButton onClick={handleSell}>Sell</SellButton>
      );
    }

    if (moment?.active_listing_price) {
      return (
        <PurchaseButton onClick={handlePurchase}>
          Buy ${formatCurrencyValue(moment.active_listing_price)}
        </PurchaseButton>
      );
    }
  }, [user?.addr, moment, hasSell]);

  const parsedMomentoForActinons = useMemo(
    () => ({
      momentId: moment?.moment_id!,
      play: {
        playerFullName: moment?.edition?.play?.player_full_name!,
        playType: moment?.edition?.play?.play_type!
      },
      series: {
        name: moment?.edition?.series?.name!
      },
      set: {
        name: moment?.edition?.set?.name!
      },
      serialNumber: moment?.serial_number!
    }),
    [moment]
  );

  return (
    <>
      <Breadcrumbs
        data-cy="breadcrumbs"
        links={breadcrumbsLinks}
        mx={1}
        mb={isMediumDevice ? 1 : 0}
      />
      <Styled.Container container={!isMediumDevice} justifyContent="space-between">
        <Grid flexDirection="column" margin="0 auto" flex={1}>
          {thumbnails.length > 0 && (
            <Asset
              assets={thumbnails.map(thumb =>
                thumb.match('mp4')
                  ? { title: '', img: '/collections/nfl/moment/odel.png', video: thumb }
                  : { title: '', img: thumb }
              )}
            />
          )}
          {!isMediumDevice && renderProperties}
        </Grid>
        <Grid
          alignItems={isMediumDevice ? 'center' : 'stretch'}
          container
          flexDirection="column"
          width={isMediumDevice ? '100%' : '45%'}>
          {!isMediumDevice && (
            <Grid alignItems="center" container justifyContent="space-between">
              <CollectionInfo />
            </Grid>
          )}
          <Grid display="flex" alignItems="first baseline">
            <Styled.NumberContainer>
              <Typography color={grey[600]} variant="body1">
                {camelize(moment?.edition?.tier)}{' '}
                {moment.serial_number && `${moment.serial_number} `}/{' '}
                {moment?.edition?.max_mint_size}
              </Typography>
            </Styled.NumberContainer>
            <Typography
              marginLeft="8px"
              color={grey[500]}
              variant="body1"
              fontWeight="400"
              sx={{
                letterSpacing: '0px',
                fontSize: isSmallDevice ? '10px' : undefined
              }}>
              {moment?.edition?.hidden_in_packs_count ?? 0 > 0
                ? `(${moment?.edition?.hidden_in_packs_count} remaining in packs)`
                : null}
            </Typography>
          </Grid>
          <Grid
            alignItems={isMediumDevice ? 'center' : 'flex-start'}
            container
            flexDirection="column">
            <Styled.Title>{moment?.edition?.play?.player_full_name}</Styled.Title>
            <Styled.EditionInfo>
              {moment?.edition?.play?.play_type}
              <span>|</span>
              {moment?.edition?.play?.player_position}
              <span>|</span>
              {`${moment?.edition?.play?.home_team_name} vs ${moment?.edition?.play?.away_team_name}`}
              <span>|</span>
              {moment?.edition?.play?.game_date}
            </Styled.EditionInfo>

            <Styled.Description data-cy="asset-description" marginBottom="16px" textAlign="justify">
              {moment?.edition?.play?.description}
            </Styled.Description>

            {renderActions}

            <Styled.Divider />
            {isMediumDevice && (
              <Grid flexDirection="row" container width="auto" mt="32px" ml="10px">
                <ShareButton />
              </Grid>
            )}

            {!!isMediumDevice && (
              <Box mt={isMediumDevice ? 0 : 5} width="100%">
                <Styled.Divider />
                <Grid alignItems="center" container my="18px" px={2.5}>
                  <CollectionInfo />
                </Grid>
                <Styled.Divider />
              </Box>
            )}
            {!isMediumDevice && renderBlockChain}
          </Grid>
        </Grid>
        {!!isMediumDevice && renderBlockChain}
        {!!isMediumDevice && renderProperties}
      </Styled.Container>
      {isSellNftModalOpen && (
        <SellNflModal
          show={true}
          assetImage={modalAssetUrl}
          moment={parsedMomentoForActinons}
          onClose={() => toggleSellNftModal()}
        />
      )}
      {isCancelNftModalOpen && (
        <CancelNflModal
          show={true}
          assetImage={modalAssetUrl}
          moment={parsedMomentoForActinons}
          orderId={moment.active_listing_order_id!}
          onClose={() => toggleCancelNftModal()}
        />
      )}
      {isPurchaseNftModalOpen && (
        <PurchaseNflModal
          show={true}
          assetImage={modalAssetUrl}
          moment={parsedMomentoForActinons}
          orderId={moment.active_listing_order_id!}
          orderAddress={moment.active_listing_order_address!}
          price={moment.active_listing_price!}
          onClose={() => togglePurchaseNftModal()}
        />
      )}
    </>
  );
};

export default memo(MomentNFLDetails);
