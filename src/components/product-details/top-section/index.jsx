import { useMemo } from 'react';
import { Avatar, Box, Divider, Grid, IconButton, Typography, useTheme } from '@mui/material';
import {
  Favorite as FavoriteIcon,
  IosShare as ShareIcon,
  Verified as VerifiedIcon
} from '@mui/icons-material';

import { Accordion, AdditionalDetails, BlockchainHistory, Breadcrumbs } from '~/components';
import { Button } from '~/base';
import { useBreakpoints } from '~/hooks';

import * as Styled from './styles';

const ProductDetailsTopSection = props => {
  const {
    palette: { grey, primary }
  } = useTheme();
  const { nft } = props;
  const { metadata } = nft.template;

  const blockchainHistoryData = {
    creator: nft.collection.author,
    owner: nft.owner,
    mintDate: new Date(nft.created_at).getTime(),
    lastActivity: new Date(nft.updated_at).getTime(),
    contract: process.env.NEXT_PUBLIC_NFT_CONTRACT
  };
  const breadCrumbsLinks = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: nft.collection.name,
      href: `/${nft.collection.name.toLowerCase()}`
    },
    {
      label: metadata.title,
      href: `/${nft.collection.name.toLowerCase()}/${metadata.id}`
    }
  ];
  const activeSaleOffer = nft.sale_offers.find(offer => offer.status === 'active');

  const { isSmallDevice } = useBreakpoints();

  const renderIconButtons = useMemo(
    () => (
      <Grid item mt={isSmallDevice ? '32px' : '0'}>
        <IconButton sx={{ bgcolor: grey[200], mr: 1.5, p: 1.75, '& > svg': { fontSize: '16px' } }}>
          <ShareIcon htmlColor={grey[600]} />
        </IconButton>
        <IconButton sx={{ bgcolor: grey[200], mr: 1.5, p: 1.75, '& > svg': { fontSize: '20px' } }}>
          <FavoriteIcon htmlColor={grey[600]} />
        </IconButton>
      </Grid>
    ),
    [isSmallDevice]
  );

  const renderCollectionInfo = useMemo(
    () => (
      <>
        <Avatar alt="product name" src="/collections/user.png" />
        <Box ml={1.5} mr="auto">
          <Typography variant="h6" fontWeight="bold">
            {nft.collection.name}
          </Typography>
          <Grid alignItems="center" container>
            <Typography color={grey[600]} mr={1} variant="subtitle1">
              @{nft.collection.name}
            </Typography>
            <VerifiedIcon htmlColor={primary.main} fontSize="1rem" />
          </Grid>
        </Box>
      </>
    ),
    []
  );

  return (
    <>
      <Breadcrumbs links={breadCrumbsLinks} />
      <Grid
        bgcolor="#fff"
        borderRadius="20px"
        container={!isSmallDevice}
        justifyContent="space-between"
        mt={isSmallDevice ? '0' : '16px'}
        p={isSmallDevice ? 2.5 : '42px 56px 38px 132px'}>
        <Box
          borderRadius="16px"
          height={isSmallDevice ? '335px' : '586px'}
          position="relative"
          width={isSmallDevice ? '100%' : '424px'}>
          <Styled.Image
            alt="product name"
            layout="fill"
            src={`https://images.ongaia.com/ipfs/`.concat(
              metadata.img.slice(7, metadata.img.length)
            )}
          />
        </Box>
        <Grid
          alignItems={isSmallDevice ? 'center' : 'stretch'}
          container
          flexDirection="column"
          width={isSmallDevice ? '100%' : '41%'}>
          {!isSmallDevice && (
            <Grid alignItems="center" container justifyContent="space-between">
              {renderCollectionInfo}
              {renderIconButtons}
            </Grid>
          )}

          <Box bgcolor={grey[200]} borderRadius="10px" mt="52px" p="2px 6px" width="fit-content">
            <Typography color={grey[600]} variant="body1">
              #{metadata.id} / 10000
            </Typography>
          </Box>

          <Grid alignItems={isSmallDevice ? 'center' : 'stretch'} container flexDirection="column">
            <Typography m="12px 0 20px" variant="h3">
              {metadata.title}
            </Typography>
            <Typography color={grey[600]} variant="h6">
              {metadata.description}
            </Typography>
            {activeSaleOffer && (
              <Grid container={!isSmallDevice} mt="52px">
                <Button>Buy for ${parseFloat(activeSaleOffer.price).toFixed(2)}</Button>
                <Button sx={{ ml: 0.5 }} variant="outlined">
                  View All Editions
                </Button>
              </Grid>
            )}
            {!!isSmallDevice && renderIconButtons}
            {!!isSmallDevice && (
              <Box mt={5} width="100%">
                <Divider />
                <Grid container my="18px">
                  {renderCollectionInfo}
                </Grid>
                <Divider />
              </Box>
            )}
            <Accordion
              dividerSx={{ mt: isSmallDevice ? 0 : 5 }}
              sx={{ my: 3 }}
              title="Blockchain History">
              <BlockchainHistory data={blockchainHistoryData} />
            </Accordion>
            <Accordion sx={{ mt: 3 }} title="Additional Details">
              <AdditionalDetails data={metadata} />
            </Accordion>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetailsTopSection;
