import React from 'react';
import * as Styled from './styles';
import BannerAccount from '~/components/collectionBannerAccount';
import { Box, Grid } from '@mui/material';
import useBreakpoints from '~/hooks/useBreakpoints';

function CollectionBanner({
  accountNumber,
  bannerName,
  bannerDescription,
  bgImg,
  mainColor,
  secondaryColor
}) {
  const { isSmallDevice } = useBreakpoints();

  return (
    <Grid pl="32px" pr="32px">
      <Styled.BannerBackground imgUrl={bgImg}>
        <Styled.BannerStyled bgColor={mainColor}>
          <Box display="flex" alignItems="start" justifyContent="start" flexDirection="row">
            <Styled.BannerAvatar imgUrl={'/collections/user.png'} />
            {!isSmallDevice && (
              <>
                <Styled.Divider ml="32px" />
                <BannerAccount
                  bannerName={bannerName}
                  accountNumber={accountNumber}
                  bgColor={secondaryColor}></BannerAccount>
              </>
            )}
          </Box>
          <Box width="100%" color="#fff" mt={isSmallDevice ? '60px' : '115px'}>
            {!isSmallDevice && (
              <Styled.BannerDescription>{bannerDescription}</Styled.BannerDescription>
            )}
            <Grid container pt="32px">
              {isSmallDevice && (
                <Grid item xs={6}>
                  <BannerAccount
                    bannerName={bannerName}
                    accountNumber={accountNumber}
                    bgColor={secondaryColor}></BannerAccount>
                </Grid>
              )}
            </Grid>
          </Box>
        </Styled.BannerStyled>
      </Styled.BannerBackground>
    </Grid>
  );
}

export default CollectionBanner;
