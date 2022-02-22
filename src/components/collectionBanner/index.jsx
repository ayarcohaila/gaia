import React from 'react';
import { Box, Grid } from '@mui/material';

import BannerAccount from '~/components/collectionBannerAccount';
import useBreakpoints from '~/hooks/useBreakpoints';

import * as Styled from './styles';

function CollectionBanner({
  accountNumber,
  bannerAvatar,
  bannerName,
  bannerDescription,
  fullBgPosition,
  bgImg,
  mainColor,
  secondaryColor,
  ...props
}) {
  const { isSmallDevice, isExtraLargeDevice, isMediumDevice } = useBreakpoints();

  const backgroundSizeContain = () => {
    if (fullBgPosition && isExtraLargeDevice) {
      return {
        backgroundPosition: '100% 0%',
        backgroundSize: 'contain'
      };
    }
    return {};
  };

  return (
    <Grid px={isMediumDevice ? '12px' : '32px'}>
      <Styled.BannerBackground
        imgUrl={bgImg}
        {...props}
        sx={{
          ...props.sx,
          ...backgroundSizeContain()
        }}>
        <Styled.BannerStyled
          bgColor={mainColor}
          fullBgPosition={fullBgPosition && isExtraLargeDevice}>
          <Box display="flex" alignItems="start" justifyContent="start" flexDirection="row">
            <Styled.BannerAvatar imgUrl={bannerAvatar} />
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
              <Styled.BannerDescription>{bannerDescription}</Styled.BannerDescription>
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
