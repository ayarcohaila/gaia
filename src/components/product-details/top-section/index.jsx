import { memo, useMemo } from 'react';
import { Box, Divider, Grid, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import {
  Accordion,
  AdditionalDetails,
  BlockchainHistory,
  Breadcrumbs,
  VideoPlayer
} from '~/components';
import { useBreakpoints } from '~/hooks';
import { isVideo } from '~/utils/string';

import * as Styled from './styles';
import CollectionInfo from './collection-info';

const ProductDetailsTopSection = ({ nft }) => {
  const {
    palette: { grey }
  } = useTheme();
  const { isMediumDevice, isSmallDevice } = useBreakpoints();

  const { metadata } = nft.template;

  //TODO: Uncomment on future implementation
  // const activeSaleOffer = nft.sale_offers.find(offer => offer?.status === 'active');
  //TODO: Uncomment on future implementation of share/favorite NFTs
  // const renderIconButtons = useMemo(
  //   () => (
  //     <Grid item mt={isMediumDevice ? '32px' : '0'}>
  //       <IconButton sx={{ bgcolor: grey[200], mr: 1.5, p: 1.75, '& > svg': { fontSize: '16px' } }}>
  //         <ShareIcon htmlColor={grey[600]} />
  //       </IconButton>
  //       <IconButton sx={{ bgcolor: grey[200], mr: 1.5, p: 1.75, '& > svg': { fontSize: '20px' } }}>
  //         <FavoriteIcon htmlColor={grey[600]} />
  //       </IconButton>
  //     </Grid>
  //   ),
  //   [isMediumDevice]
  // );

  const isVideoAsset = useMemo(() => isVideo(metadata?.img), [metadata?.img]);

  const blockchainHistoryData = useMemo(
    () => ({
      creator: nft.collection.author,
      owner: nft.owner,
      mintDate: new Date(nft.created_at)?.getTime(),
      contract: process.env.NEXT_PUBLIC_NFT_CONTRACT
    }),
    [nft]
  );

  const breadcrumbsLinks = useMemo(
    () => [
      {
        label: 'Home',
        href: `/${nft?.collection?.name?.toLowerCase()}`
      },
      {
        label: 'Collections'
      },
      {
        label: `${nft?.collection?.name} NFTs`,
        href: `/${nft?.collection?.name?.toLowerCase()}`
      },
      {
        label: metadata.title,
        href: `/${nft?.collection?.name?.toLowerCase()}/${metadata?.id}`
      }
    ],
    [nft?.collection]
  );

  const renderAccordions = useMemo(
    () => (
      <>
        <Accordion
          defaultExpanded
          dividerSx={{ mt: isMediumDevice ? 0 : 5 }}
          sx={{ my: 3 }}
          title="Additional Details">
          <AdditionalDetails data={metadata} />
        </Accordion>
        <Accordion
          defaultExpanded
          dividerSx={{
            margin: isSmallDevice ? '0 auto' : '0',
            width: isSmallDevice ? '90%' : 'auto'
          }}
          sx={{ mt: 3 }}
          title="Blockchain History">
          <BlockchainHistory data={blockchainHistoryData} />
        </Accordion>
      </>
    ),
    [blockchainHistoryData, isMediumDevice, isSmallDevice, metadata]
  );

  const renderAsset = useMemo(() => {
    if (!isVideoAsset) {
      return <VideoPlayer />;
    }

    return (
      <Styled.ImageContainer>
        <Styled.Image
          alt={metadata.title}
          blurDataURL={`https://images.ongaia.com/ipfs/`.concat(
            metadata.img.slice(7, metadata.img.length)
          )}
          layout="fill"
          placeholder="blur"
          src={`https://images.ongaia.com/ipfs/`.concat(metadata.img.slice(7, metadata.img.length))}
        />
      </Styled.ImageContainer>
    );
  }, [metadata, isVideoAsset]);

  return (
    <>
      <Breadcrumbs links={breadcrumbsLinks} sx={{ mx: 1 }} />
      <Styled.Container container={!isMediumDevice} justifyContent="space-between">
        {renderAsset}
        <Grid
          alignItems={isMediumDevice ? 'center' : 'stretch'}
          container
          flexDirection="column"
          width={isMediumDevice ? '100%' : '45%'}>
          {!isMediumDevice && (
            <Grid alignItems="center" container justifyContent="space-between">
              <CollectionInfo name={nft?.collection?.name} />
            </Grid>
          )}
          <Styled.NumberContainer>
            <Typography color={grey[600]} variant="body1">
              #{metadata.id} / 10000
            </Typography>
          </Styled.NumberContainer>
          <Grid alignItems={isMediumDevice ? 'center' : 'stretch'} container flexDirection="column">
            <Styled.Title>{metadata.title}</Styled.Title>
            <Styled.Description>{metadata.description}</Styled.Description>
            {/* TODO: Uncomment on future implementation
            {activeSaleOffer && (
              <Button sx={{ mt: '52px', width: 'fit-content' }}>
                Buy for ${parseFloat(activeSaleOffer.price).toFixed(2)}
              </Button>
            )} */}
            {!!isMediumDevice && (
              <Box mt={5} width="100%">
                <Divider sx={{ border: '0', borderTop: `2px solid ${grey[200]}` }} />
                <Grid alignItems="center" container my="18px" px={2.5}>
                  <CollectionInfo name={nft?.collection?.name} />
                </Grid>
              </Box>
            )}
            {!isMediumDevice && renderAccordions}
          </Grid>
        </Grid>
        {!!isMediumDevice && renderAccordions}
      </Styled.Container>
    </>
  );
};

ProductDetailsTopSection.propTypes = {
  nft: PropTypes.object.isRequired
};

export default memo(ProductDetailsTopSection);
