import { memo, useMemo } from 'react';
import { Avatar, Box, Divider, Grid, Typography, useTheme } from '@mui/material';
import { Verified as VerifiedIcon } from '@mui/icons-material';
import PropTypes from 'prop-types';

import { Accordion, AdditionalDetails, BlockchainHistory, Breadcrumbs } from '~/components';
import { useBreakpoints } from '~/hooks';

import * as Styled from './styles';

const ProductDetailsTopSection = ({ nft }) => {
  const {
    palette: { grey, primary }
  } = useTheme();
  const { isSmallDevice } = useBreakpoints();

  const { metadata } = nft.template;
  //TODO: Uncomment on future implementation
  // const activeSaleOffer = nft.sale_offers.find(offer => offer?.status === 'active');

  const blockchainHistoryData = useMemo(
    () => ({
      creator: nft.collection.author,
      owner: nft.owner,
      mintDate: new Date(nft.created_at)?.getTime(),
      lastActivity: new Date(nft.updated_at)?.getTime(),
      contract: process.env.NEXT_PUBLIC_NFT_CONTRACT
    }),
    [nft]
  );

  const breadcrumbsLinks = useMemo(
    () => [
      {
        label: nft.collection.name,
        href: `/${nft?.collection?.name?.toLowerCase()}`
      },
      {
        label: metadata.title,
        href: `/${nft?.collection?.name?.toLowerCase()}/${metadata?.id}`
      }
    ],
    [nft?.collection]
  );

  //TODO: Uncomment on future implementation of share/favorite NFTs
  // const renderIconButtons = useMemo(
  //   () => (
  //     <Grid item mt={isSmallDevice ? '32px' : '0'}>
  //       <IconButton sx={{ bgcolor: grey[200], mr: 1.5, p: 1.75, '& > svg': { fontSize: '16px' } }}>
  //         <ShareIcon htmlColor={grey[600]} />
  //       </IconButton>
  //       <IconButton sx={{ bgcolor: grey[200], mr: 1.5, p: 1.75, '& > svg': { fontSize: '20px' } }}>
  //         <FavoriteIcon htmlColor={grey[600]} />
  //       </IconButton>
  //     </Grid>
  //   ),
  //   [isSmallDevice]
  // );

  const renderCollectionInfo = useMemo(
    () => (
      <>
        <Avatar
          alt="product name"
          src="/collections/user.png"
          sx={{ height: isSmallDevice ? '56px' : '48px', width: isSmallDevice ? '56px' : '48px' }}
        />
        <Box ml={1.5} mr="auto">
          <Typography variant="h5">{nft?.collection?.name}</Typography>
          <Grid alignItems="center" container>
            <Typography color={grey[600]} mr={1} variant="subtitle1">
              @{nft?.collection?.name}
            </Typography>
            <VerifiedIcon htmlColor={primary.main} fontSize="1rem" />
          </Grid>
        </Box>
      </>
    ),
    [nft?.collection, primary]
  );

  const renderAccordions = useMemo(
    () => (
      <>
        <Accordion
          dividerSx={{ mt: isSmallDevice ? 0 : 5 }}
          sx={{ my: 3 }}
          title="Blockchain History">
          <BlockchainHistory data={blockchainHistoryData} />
        </Accordion>
        <Accordion
          dividerSx={{
            margin: isSmallDevice ? '0 auto' : '0',
            width: isSmallDevice ? '90%' : 'auto'
          }}
          sx={{ mt: 3 }}
          title="Additional Details">
          <AdditionalDetails data={metadata} />
        </Accordion>
      </>
    ),
    [blockchainHistoryData, isSmallDevice, metadata]
  );

  return (
    <>
      <Breadcrumbs links={breadcrumbsLinks} sx={{ ml: isSmallDevice ? 2 : 0 }} />
      <Styled.Container container={!isSmallDevice} justifyContent="space-between">
        <Styled.ImageContainer>
          <Styled.Image
            alt={metadata.title}
            layout="fill"
            src={`https://images.ongaia.com/ipfs/`.concat(
              metadata.img.slice(7, metadata.img.length)
            )}
          />
        </Styled.ImageContainer>
        <Grid
          alignItems={isSmallDevice ? 'center' : 'stretch'}
          container
          flexDirection="column"
          width={isSmallDevice ? '100%' : '45%'}>
          {!isSmallDevice && (
            <Grid alignItems="center" container justifyContent="space-between">
              {renderCollectionInfo}
            </Grid>
          )}
          <Styled.NumberContainer>
            <Typography color={grey[600]} variant="body1">
              #{metadata.id} / 10000
            </Typography>
          </Styled.NumberContainer>
          <Grid alignItems={isSmallDevice ? 'center' : 'stretch'} container flexDirection="column">
            <Styled.Title>{metadata.title}</Styled.Title>
            <Styled.Description>{metadata.description}</Styled.Description>
            {/* TODO: Uncomment on future implementation
            {activeSaleOffer && (
              <Button sx={{ mt: '52px', width: 'fit-content' }}>
                Buy for ${parseFloat(activeSaleOffer.price).toFixed(2)}
              </Button>
            )} */}
            {!!isSmallDevice && (
              <Box mt={5} width="100%">
                <Divider sx={{ border: '0', borderTop: `2px solid ${grey[200]}` }} />
                <Grid alignItems="center" container my="18px" px={2.5}>
                  {renderCollectionInfo}
                </Grid>
              </Box>
            )}
            {!isSmallDevice && renderAccordions}
          </Grid>
        </Grid>
        {!!isSmallDevice && renderAccordions}
      </Styled.Container>
    </>
  );
};

ProductDetailsTopSection.propTypes = {
  nft: PropTypes.object.isRequired
};

export default memo(ProductDetailsTopSection);
