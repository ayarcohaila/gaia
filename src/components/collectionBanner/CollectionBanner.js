import React from 'react';
import { BannerStyled, Divider } from './CollectionBannerStyled';
import BannerAccount from './BannerAccount';
import { Box } from '@mui/material';

function CollectionBanner() {
  const accountNumber = '0xc562773b26ade24cd8a33c4870380E774BF8A6DE';

  return (
    <BannerStyled bgColor="#270b5a">
      <Box display="flex" alignItems="start" justifyContent="start" flexDirection="row">
        <Box width="80px" height="80px"></Box>
        <Divider ml="32px" />
        <Box>
          <h1>@Ballerz</h1>
          <BannerAccount accountNumber={accountNumber}></BannerAccount>
        </Box>
      </Box>
      <Box>
        <h1>Bottom</h1>
      </Box>
    </BannerStyled>
  );
}

export default CollectionBanner;
