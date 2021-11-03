import React from 'react';
import { Box, Grid } from '@mui/material';

import BannerAccount from '~/components/collectionBannerAccount';
import { useBreakpoints } from '~/hooks';

import * as Styled from './styles';

function CollectionBanner({
  accountNumber,
  bannerName,
  // bannerDescription,
  bgImg,
  mainColor,
  secondaryColor
}) {
  const { isSmallDevice } = useBreakpoints();

  return (
    <Grid px={isSmallDevice ? '20px' : '32px'}>
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
                  bgColor={secondaryColor}
                />
              </>
            )}
          </Box>
          <Box width="100%" color="#fff" mt={isSmallDevice ? '56px' : '115px'}>
            {!isSmallDevice && (
              <Styled.BannerDescription>
                {/* TODO: Change later to use bannerDescription prop like the line below instead of hardcoded */}
                {/* {bannerDescription} */}
                BALLERZ is a league of 10,000 randomly-generated basketball players, ready to flex
                on the Flow blockchain. Limit 3 per wallet. BALLERZ reveal on Monday, November 8.
              </Styled.BannerDescription>
            )}
            <Grid container pt={!isSmallDevice && '32px'}>
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
