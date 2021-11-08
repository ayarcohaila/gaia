import { Box, Typography } from '@mui/material';

import { Breadcrumbs, Seo } from '~/components';

const ProductDetail = () => {
  return (
    <>
      <Seo title="Product Detail" />
      <Breadcrumbs />
      <Box>
        <Typography>ProductDetail</Typography>
      </Box>
    </>
  );
};

export default ProductDetail;
