import { Avatar, Box, Grid, IconButton, Typography } from '@mui/material';
import {
  Favorite as FavoriteIcon,
  IosShare as ShareIcon,
  Verified as VerifiedIcon
} from '@mui/icons-material';
import Image from 'next/image';

import { Breadcrumbs, Seo } from '~/components';

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
        </Box>
      </Grid>
    </Box>
  );
};

export default ProductDetail;
