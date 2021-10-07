import React from 'react';
import {
  BannerStyled,
  Divider,
  BannerName,
  BannerDescription,
  BannerItemDescription,
  BannerItemValue,
  BannerBackground
} from './CollectionBannerStyled';
import BannerAccount from './BannerAccount';
import BannerShareIcon from './BannerShareIcon';
import { Box, Grid } from '@mui/material';

const BANNER_ITEM = [
  { value: '100K', description: 'Items' },
  { value: '5.5K', description: 'Owners' },
  { value: '41.39', description: 'Flor Price', price: true },
  { value: '161.0K', description: 'Volume Traded', price: true }
];

function CollectionBanner() {
  const accountNumber = '0xc562773b26ade24cd8a33c4870380E774BF8A6DE';
  const bannerName = '@Ballerz';
  const bannerDescription = "Buy and sell Ballerz NFTs on Gaia, the world's best NFT marketplace";

  return (
    <BannerBackground imgUrl="/static/img/home-banner.png">
      <BannerStyled bgColor="#270b5a">
        <Box display="flex" alignItems="start" justifyContent="start" flexDirection="row">
          <Box width="80px" height="80px" bgcolor="black" borderRadius="40px"></Box>
          <Divider ml="32px" />
          <Box>
            <BannerName>{bannerName}</BannerName>
            <BannerAccount accountNumber={accountNumber}></BannerAccount>
          </Box>
        </Box>
        <Box width="100%" color="#fff" mt="115px">
          <BannerDescription>{bannerDescription}</BannerDescription>
          <Grid container pt="32px">
            <Grid
              container
              item
              xs={6}
              sx={{
                columnGap: 5
              }}>
              {BANNER_ITEM.map(item => (
                <Grid item key={item.description}>
                  <BannerItemValue>
                    {item.price ? <span>$</span> : undefined}
                    {item.value}
                  </BannerItemValue>
                  <BannerItemDescription>{item.description}</BannerItemDescription>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" justifyContent="flex-end" width="100%">
                <BannerShareIcon />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </BannerStyled>
    </BannerBackground>
  );
}

export default CollectionBanner;
