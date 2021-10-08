import React from 'react';
import {
  BannerStyled,
  Divider,
  BannerName,
  BannerDescription,
  BannerItemDescription,
  BannerItemValue,
  BannerBackground,
  BannerAvatar
} from './styled';
import BannerAccount from './BannerAccount';
import BannerShareIcon from './BannerShareIcon';
import { Box, Grid } from '@mui/material';

function CollectionBanner(props) {
  const {
    accountNumber,
    bannerName,
    bannerDescription,
    bgImg,
    mainColor,
    secondaryColor,
    bannerItems
  } = props;

  return (
    <BannerBackground imgUrl={bgImg}>
      <BannerStyled bgColor={mainColor}>
        <Box display="flex" alignItems="start" justifyContent="start" flexDirection="row">
          <BannerAvatar />
          <Divider ml="32px" />
          <Box>
            <BannerName>{bannerName}</BannerName>
            <BannerAccount accountNumber={accountNumber} bgColor={secondaryColor}></BannerAccount>
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
              {bannerItems.map(item => (
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
                <BannerShareIcon bgColor={secondaryColor} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </BannerStyled>
    </BannerBackground>
  );
}

export default CollectionBanner;
