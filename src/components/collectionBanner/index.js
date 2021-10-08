import React from 'react';
import {
  BannerStyled,
  Divider,
  BannerDescription,
  BannerItemDescription,
  BannerItemValue,
  BannerBackground,
  BannerAvatar
  // MobileSubBanner
} from './styled';
import BannerAccount from '~/components/collectionBannerAccount';
import BannerShareIcon from '~/components/collectionBannerShareButton';
import { Box, Grid } from '@mui/material';
import useBreakpoints from '~/hooks/useBreakpoints';

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

  const { isSmallDevice } = useBreakpoints();

  return (
    <>
      <BannerBackground imgUrl={bgImg}>
        <BannerStyled bgColor={mainColor}>
          <Box display="flex" alignItems="start" justifyContent="start" flexDirection="row">
            <BannerAvatar />
            {!isSmallDevice && (
              <>
                <Divider ml="32px" />
                <BannerAccount
                  bannerName={bannerName}
                  accountNumber={accountNumber}
                  bgColor={secondaryColor}></BannerAccount>
              </>
            )}
          </Box>
          <Box width="100%" color="#fff" mt={isSmallDevice ? '60px' : '115px'}>
            {!isSmallDevice && <BannerDescription>{bannerDescription}</BannerDescription>}
            <Grid container pt="32px">
              {isSmallDevice ? (
                <Grid item xs={6}>
                  <BannerAccount
                    bannerName={bannerName}
                    accountNumber={accountNumber}
                    bgColor={secondaryColor}></BannerAccount>
                </Grid>
              ) : (
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
              )}
              <Grid item xs={6}>
                <Box display="flex" justifyContent="flex-end" width="100%">
                  <BannerShareIcon bgColor={secondaryColor} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </BannerStyled>
      </BannerBackground>
      {/* The Ballerz layout do not have this component */}
      {/* {isSmallDevice && (
        <MobileSubBanner>
          <Grid
            container
            sx={{
              rowGap: 5
            }}>
            {bannerItems.map(item => (
              <Grid item key={item.description} xs={6}>
                <BannerItemValue>
                  {item.price ? <span>$</span> : undefined}
                  {item.value}
                </BannerItemValue>
                <BannerItemDescription>{item.description}</BannerItemDescription>
              </Grid>
            ))}
          </Grid>
        </MobileSubBanner>
      )} */}
    </>
  );
}

export default CollectionBanner;
