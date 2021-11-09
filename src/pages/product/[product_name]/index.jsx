import { Avatar, Box, Grid, IconButton, Typography } from '@mui/material';
import {
  Favorite as FavoriteIcon,
  IosShare as ShareIcon,
  Verified as VerifiedIcon
} from '@mui/icons-material';
import Image from 'next/image';

import { Accordion, AdditionalDetails, BlockchainHistory, Breadcrumbs, Seo } from '~/components';
import { Button, Divider } from '~/base';

const ProductDetail = () => {
  return (
    <Box bgcolor="#f4f4f6">
      <Seo title="Product Detail" />
      <Breadcrumbs />
      <Grid
        bgcolor="#fff"
        borderRadius="20px"
        container
        height="696px"
        justifyContent="space-between"
        m="22px auto 0"
        maxWidth="1280px"
        p="42px 56px 38px 132px">
        <Image alt="product name" width="424px" height="50%" src="/collections/user.png" />
        <Box width="41%">
          <Grid alignItems="center" container justifyContent="space-between">
            <Avatar alt="product name" src="/collections/user.png" />

            <Box ml={1.5} mr="auto">
              <Typography variant="h6" fontWeight="bold">
                The Matrix Resurrection
              </Typography>
              <Grid alignItems="center" container>
                <Typography color="#6c7283" mr={1} variant="subtitle1">
                  @TheMatrixResurrection
                </Typography>
                <VerifiedIcon htmlColor="#215cf1" fontSize="1rem" />
              </Grid>
            </Box>

            <Grid item>
              <IconButton sx={{ bgcolor: '#f4f4f6', mr: 1.5 }}>
                <ShareIcon htmlColor="#6c7283" />
              </IconButton>
              <IconButton sx={{ bgcolor: '#f4f4f6' }}>
                <FavoriteIcon htmlColor="#6c7283" />
              </IconButton>
            </Grid>
          </Grid>

          <Box bgcolor="#f4f4f6" borderRadius="10px" mt="52px" p="2px 6px" width="fit-content">
            <Typography color="#6c7283" variant="body1">
              #73 / 500
            </Typography>
          </Box>

          <Box>
            <Typography>Falling Through Time</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam sodales libero,
              id auctor tortor pharetra at. Curabitur nec neque efficitur ligula auctor dapibus.
              Etiam cursus lectus eget libero cursus ultrices. Aliquam id ipsum et sapien congue
              vulputate ut ac elit...
            </Typography>
            <Grid mt="52px">
              <Button>Buy for $180.00</Button>
              <Button>View All Editions</Button>
            </Grid>

            <Divider sx={{ mt: 5 }} />
            <Accordion sx={{ my: 3 }}>
              <BlockchainHistory />
            </Accordion>
            <Divider />
            <Accordion sx={{ mt: 3 }}>
              <AdditionalDetails />
            </Accordion>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default ProductDetail;
