import React from 'react';

import { Typography, Grid } from '@mui/material';

import { useBreakpoints } from '~/hooks';

import * as Styled from './styled';

const bannerData = {
  drop: 'Featured Collection',
  title: 'The Home of BALLERZ',
  description:
    'Be a part of the emerging basketball NFT community! Secondary marketplace coming soon. ',
  background: '/collections/ballerz/banner.png'
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
          sx={{ maxWidth: '600px', lineHeight: '30px' }}>
          {bannerData.description}
        </Typography>
        <Grid container sx={{ gap: '12px' }}>
          <Styled.CardButton
            component="a"
            href="https://twitter.com/ballerz_nft"
            target="_blank"
            rel="noopener noreferrer">
            <Typography variant="subtitle1">Follow on Twitter</Typography>
          </Styled.CardButton>
          <Styled.CardButton
            component="a"
            href="https://discord.com/invite/ballerznft"
            target="_blank"
            rel="noopener noreferrer">
            <Typography variant="subtitle1">Join Discord</Typography>
          </Styled.CardButton>
        </Grid>
      </Styled.Container>
      <Styled.BannerLink href="/ballerz" />
    </Styled.ContainerBackground>
  );
}
