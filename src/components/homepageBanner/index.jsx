import React from 'react';

import { Typography, Grid } from '@mui/material';

import { useBreakpoints } from '~/hooks';
import { shareefSaleEnabled } from '~/config/config';

import * as Styled from './styled';

const bannerData = {
  drop: 'Genesis Collection',
  title: 'Shareef O’Neal',
  description:
    'The first of a series of drops highlighting his basketball career, family, and recovery from heart surgery',
  background: '/collections/shareef/banner.jpeg'
};

export default function HomepageBanner() {
  const { isMediumDevice, isExtraSmallDevice } = useBreakpoints();

  return (
    <Styled.ContainerBackground imgUrl={bannerData.background}>
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
        <Grid container sx={{ gap: '12px' }}>
          <Styled.CardButton
            component="a"
            href="/shareef"
            sx={{ width: !shareefSaleEnabled ? '200px' : '100px' }}>
            <Typography variant="subtitle1">
              {shareefSaleEnabled ? 'Buy Now' : 'On Sale Dec 13 at 2pm PT'}
            </Typography>
          </Styled.CardButton>
          {/* TODO: Uncomment after shareef drop */}
          {/* <Styled.CardButton
            component="a"
            href="https://discord.com/invite/ballerznft"
            target="_blank"
            rel="noopener noreferrer">
            <Typography variant="subtitle1">Join Discord</Typography>
          </Styled.CardButton> */}
        </Grid>
      </Styled.Container>
      <Styled.BannerLink href="/shareef" />
    </Styled.ContainerBackground>
  );
}
