import React from 'react';

import { Typography, Grid } from '@mui/material';

import useBreakpoints from '~/hooks/useBreakpoints';
import { hasBrowse } from '~/config/config';

import * as Styled from './styled';

const bannerData = {
  drop: 'BALLERZ',
  title: 'The Home of BALLERZ',
  description: hasBrowse
    ? 'Secondary marketplace is now live! Buy and sell with other collectors.'
    : 'Secondary marketplace goes live today at 2pm PT!  Buy and sell with other collectors.',
  background: '/collections/ballerz/banner.webp'
};

export default function HomepageBanner() {
  const { isMediumDevice, isExtraSmallDevice } = useBreakpoints();

  return (
    <Styled.ContainerBackground alt="background" imgUrl={bannerData.background}>
      <Styled.Container>
        <Styled.TypographyWithOpacity
          variant={isMediumDevice ? 'h5' : 'h4'}
          fontWeight="normal"
          lineHeight="24px"
          mt={isExtraSmallDevice ? '80px' : isMediumDevice && '120px'}>
          {bannerData.drop}
        </Styled.TypographyWithOpacity>
        <Typography variant="h2" fontWeight="bold" maxWidth="450px" mt="10px">
          {bannerData.title}
        </Typography>
        <Typography
          variant={isMediumDevice ? 'subtitle1' : 'h4'}
          fontWeight="normal"
          mt="10px"
          lineHeight={isMediumDevice && '20px'}
          mb={isMediumDevice && '24px'}
          sx={{ maxWidth: '600px', lineHeight: !isMediumDevice && '30px' }}>
          {bannerData.description}
        </Typography>
        {hasBrowse && (
          <Grid container sx={{ gap: '12px' }}>
            <Styled.CardButton
              component="a"
              href="/ballerz"
              aria-label="ballerz"
              sx={{ width: '200px' }}>
              <Typography variant="subtitle1">Explore BALLERZ</Typography>
            </Styled.CardButton>
          </Grid>
        )}
      </Styled.Container>
      <Styled.BannerLink href={'/ballerz'} arial-label="ballerzBanner" />
    </Styled.ContainerBackground>
  );
}
