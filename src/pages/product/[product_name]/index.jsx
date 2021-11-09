import { Avatar, Box, Grid, IconButton, Typography, useTheme } from '@mui/material';
import {
  Favorite as FavoriteIcon,
  IosShare as ShareIcon,
  Verified as VerifiedIcon
} from '@mui/icons-material';

import { Accordion, AdditionalDetails, BlockchainHistory, Breadcrumbs, Seo } from '~/components';
import { Button } from '~/base';
import * as Styled from '~/components/product-detail/top-section/styles';

const ProductDetail = () => {
  const {
    palette: { grey, primary }
  } = useTheme();

  return (
    <Box bgcolor={grey[200]} m="0 auto" maxWidth="1280px">
      <Seo title="Product Detail" />
      <Breadcrumbs />
      <Grid
        bgcolor="#fff"
        borderRadius="20px"
        container
        justifyContent="space-between"
        mt="16px"
        p="42px 56px 38px 132px">
        <Styled.Image alt="product name" width="424px" height="100%" src="/collections/user.png" />
        <Box width="41%">
          <Grid alignItems="center" container justifyContent="space-between">
            <Avatar alt="product name" src="/collections/user.png" />

            <Box ml={1.5} mr="auto">
              <Typography variant="h6" fontWeight="bold">
                The Matrix Resurrection
              </Typography>
              <Grid alignItems="center" container>
                <Typography color={grey[600]} mr={1} variant="subtitle1">
                  @TheMatrixResurrection
                </Typography>
                <VerifiedIcon htmlColor={primary.main} fontSize="1rem" />
              </Grid>
            </Box>

            <Grid item>
              <IconButton
                sx={{ bgcolor: grey[200], mr: 1.5, p: 1.75, '& > svg': { fontSize: '16px' } }}>
                <ShareIcon htmlColor={grey[600]} />
              </IconButton>
              <IconButton
                sx={{ bgcolor: grey[200], mr: 1.5, p: 1.75, '& > svg': { fontSize: '20px' } }}>
                <FavoriteIcon htmlColor={grey[600]} />
              </IconButton>
            </Grid>
          </Grid>

          <Box bgcolor={grey[200]} borderRadius="10px" mt="52px" p="2px 6px" width="fit-content">
            <Typography color={grey[600]} variant="body1">
              #73 / 500
            </Typography>
          </Box>

          <Box>
            <Typography m="12px 0 20px" variant="h3">
              Falling Through Time
            </Typography>
            <Typography color={grey[600]} variant="h6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam sodales libero,
              id auctor tortor pharetra at. Curabitur nec neque efficitur ligula auctor dapibus.
              Etiam cursus lectus eget libero cursus ultrices. Aliquam id ipsum et sapien congue
              vulputate ut ac elit...
            </Typography>

            <Grid mt="52px">
              <Button>Buy for $180.00</Button>
              <Button sx={{ ml: 0.5 }} variant="outlined">
                View All Editions
              </Button>
            </Grid>

            <Accordion dividerSx={{ mt: 5 }} sx={{ my: 3 }} title="Blockchain History">
              <BlockchainHistory />
            </Accordion>
            <Accordion sx={{ mt: 3 }} title="Additional Details">
              <AdditionalDetails />
            </Accordion>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default ProductDetail;
