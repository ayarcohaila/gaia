import { Box, useTheme } from '@mui/material';

import { ProductDetailsTopSection, Seo } from '~/components';

const ProductDetails = () => {
  const {
    palette: { grey }
  } = useTheme();

  return (
    <Box bgcolor={grey[200]} m="0 auto" maxWidth="1280px">
      <Seo title="Product Details" />
      <ProductDetailsTopSection />
    </Box>
  );
};

export default ProductDetails;
