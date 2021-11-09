import { useMemo } from 'react';
import { Avatar, Box, Grid, IconButton, Typography, useTheme } from '@mui/material';
import {
  Favorite as FavoriteIcon,
  IosShare as ShareIcon,
  Verified as VerifiedIcon
} from '@mui/icons-material';

import { Accordion, AdditionalDetails, BlockchainHistory, Breadcrumbs } from '~/components';
import { Button } from '~/base';
import { useBreakpoints } from '~/hooks';

import * as Styled from './styles';

const ProductDetailsTopSection = () => {
  const {
    palette: { grey, primary }
  } = useTheme();
  const { isSmallDevice } = useBreakpoints();

  const renderIconButtons = useMemo(
    () => (
      <Grid item mt={isSmallDevice ? 4 : 0}>
        <IconButton sx={{ bgcolor: grey[200], mr: 1.5, p: 1.75, '& > svg': { fontSize: '16px' } }}>
          <ShareIcon htmlColor={grey[600]} />
        </IconButton>
        <IconButton sx={{ bgcolor: grey[200], mr: 1.5, p: 1.75, '& > svg': { fontSize: '20px' } }}>
          <FavoriteIcon htmlColor={grey[600]} />
        </IconButton>
      </Grid>
    ),
    []
  );

  return (
    <>
      <Breadcrumbs />
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
          <Styled.Image alt="product name" layout="fill" src="/collections/user.png" />
        </Box>
        <Grid
          alignItems={isSmallDevice ? 'center' : 'stretch'}
          container
          flexDirection="column"
          width={isSmallDevice ? '100%' : '41%'}>
          {!isSmallDevice && (
            <Grid alignItems="center" container justifyContent="space-between">
              <Avatar alt="product name" src="/collections/user.png" />
              <Box ml={1.5} mr="auto">
                <Typography variant="h6" fontWeight="bold">
                  BALLERZ
                </Typography>
                <Grid alignItems="center" container>
                  <Typography color={grey[600]} mr={1} variant="subtitle1">
                    @BALLERZ
                  </Typography>
                  <VerifiedIcon htmlColor={primary.main} fontSize="1rem" />
                </Grid>
              </Box>
              {renderIconButtons}
            </Grid>
          )}

          <Box bgcolor={grey[200]} borderRadius="10px" mt="52px" p="2px 6px" width="fit-content">
            <Typography color={grey[600]} variant="body1">
              #73 / 500
            </Typography>
          </Box>

          <Grid alignItems={isSmallDevice ? 'center' : 'stretch'} container flexDirection="column">
            <Typography m="12px 0 20px" variant="h3">
              Baller #73
            </Typography>
            <Typography color={grey[600]} variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam sodales libero,
              id auctor tortor pharetra at. Curabitur nec neque efficitur ligula auctor dapibus.
              Etiam cursus lectus eget libero cursus ultrices. Aliquam id ipsum et sapien congue
              vulputate ut ac elit...
            </Typography>

            <Grid container={!isSmallDevice} mt="52px">
              <Button>Buy for $180.00</Button>
              <Button sx={{ ml: 0.5 }} variant="outlined">
                View All Editions
              </Button>
            </Grid>

            {!!isSmallDevice && renderIconButtons}

            <Accordion dividerSx={{ mt: 5 }} sx={{ my: 3 }} title="Blockchain History">
              <BlockchainHistory />
            </Accordion>
            <Accordion sx={{ mt: 3 }} title="Additional Details">
              <AdditionalDetails />
            </Accordion>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetailsTopSection;
