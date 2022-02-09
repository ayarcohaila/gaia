import { Box, Grid, Typography, useTheme } from '@mui/material';
import { memo, useMemo } from 'react';
import Breadcrumbs from '~/components/breadcrumbs';
// TODO: Disabled Favorites for NFL
// import FavoriteButton from '~/components/favoriteButton';
import AdditionalDetails from '~/components/productDetails/detailsNFL/additionalDetails';
import ShareButton from '~/components/shareButton';
import useBreakpoints from '~/hooks/useBreakpoints';
import { generatePlayMediaUrl, ASSET_TYPES_LOOKUP } from '~/utils/nftImage';
import Asset from './asset';
import CollectionInfo from './collectionInfo';
import { NflDetailsTopSectionProps } from './types';
import GridOffers from '~/components/productDetails/detailsNFL/gridOffers';
import { useRouter } from 'next/router';
import { camelize } from '~/utils/camelize';

import * as Styled from './styles';
import BlockchainHistory from '~/components/productDetails/detailsNFL/blockchainHistory';

const ASSETS_IMAGES = [
  ASSET_TYPES_LOOKUP.VIDEO_SQUARE_LOGO_1080_1080_BLACK,
  ASSET_TYPES_LOOKUP.VIDEO_IDLE_1080_1080_BLACK,
  ASSET_TYPES_LOOKUP.SCORES_2880_2880_GREY,
  ASSET_TYPES_LOOKUP.PLAYER_2880_2880_BLACK,
  ASSET_TYPES_LOOKUP.LEGAL_2880_2880_GREY
];

const NflDetailsTopSection = ({ edition, serial_number }: NflDetailsTopSectionProps) => {
  const thumbnails: Array<string> = ASSETS_IMAGES.map(asset => {
    const thumbnailUrl = generatePlayMediaUrl(
      edition?.play?.external_id!,
      edition?.set?.name!,
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
        ...(serial_number ? { href: `/nfl-all-day/${nft_id}` } : {})
      },
      ...(serial_number ? [{ label: `Moment #${serial_number}` }] : [])
    ],
    []
  );

  const propSectionItems = [
    { label: 'Tier', value: edition.tier },
    { label: 'Player Name', value: edition.play?.player_full_name },
    { label: 'Team Name', value: edition.play?.team_name },
    { label: 'Set', value: edition.set?.name },
    { label: 'Series', value: edition.series?.name },
    { label: 'Play Type', value: edition.play?.play_type },
    { label: 'Player Position', value: edition.play?.player_position }
  ];

  const renderAccordions = useMemo(
    () => (
      <>
        {!serial_number && (
          <Styled.AcordionWrapper>
            <Styled.CustomAccordion
              data-cy="aditional-detail-history"
              defaultExpanded
              mt={10}
              title="Listings"
              hasDivider={false}
              id="blockHistoryAccordion"
              contentSx={{ p: 0 }}>
              <GridOffers editionId={edition.edition_id} />
            </Styled.CustomAccordion>
          </Styled.AcordionWrapper>
        )}

        {serial_number ? (
          <Styled.AcordionWrapper>
            <Styled.CustomAccordion
              data-cy="aditional-detail-history"
              defaultExpanded
              mt={30}
              title="Blockchain History"
              hasDivider={true}
              id="blockHistoryAccordion"
              contentSx={{ p: 0 }}>
              <BlockchainHistory
                data={{
                  owner: 'NFT ALL DAY',
                  mintDate: edition.inserted_at // FIXME: need to get the actual mint date for the moment we are looking at
                }}
              />
            </Styled.CustomAccordion>
          </Styled.AcordionWrapper>
        ) : null}
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
          <AdditionalDetails
            data-cy="aditional-detail-properties"
            listOfProps={propSectionItems}
            hideDistribution={true}
          />
        </Styled.CustomAccordion>
      </Styled.AcordionWrapper>
    ),
    [isMediumDevice]
  );

  // TODO: need to get the moment details and show appropriate action buttons (buy/sell/cancel)

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
            <Styled.NumberContainer data-cy="asset-number">
              <Typography color={grey[600]} variant="body1">
                {camelize(edition.tier)} {serial_number && `${serial_number} `}/{' '}
                {edition.max_mint_size}
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
              {edition.hidden_in_packs_count ?? 0 > 0
                ? `(${edition.hidden_in_packs_count} remaining in packs)`
                : null}
            </Typography>
          </Grid>
          <Grid
            alignItems={isMediumDevice ? 'center' : 'flex-start'}
            container
            flexDirection="column">
            <Styled.Title data-cy="asset-title">{edition.play?.player_full_name}</Styled.Title>
            <Styled.EditionInfo>
              {edition.play?.play_type}
              <span>|</span>
              {edition.play?.player_position}
              <span>|</span>
              {`${edition.play?.home_team_name} vs ${edition.play?.away_team_name}`}
              <span>|</span>
              {edition.play?.game_date}
            </Styled.EditionInfo>

            <Styled.Description data-cy="asset-description" marginBottom="16px" textAlign="justify">
              {edition.play?.description}
            </Styled.Description>
            <Styled.Divider />
            {isMediumDevice && (
              <Grid flexDirection="row" container width="auto" mt="32px" ml="10px">
                <ShareButton />
                {/* <FavoriteButton nftId={edition.edition_id} /> */}
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
            {!isMediumDevice && renderAccordions}
          </Grid>
        </Grid>
        {!!isMediumDevice && renderAccordions}
        {!!isMediumDevice && renderProperties}
      </Styled.Container>
    </>
  );
};

export default memo(NflDetailsTopSection);
