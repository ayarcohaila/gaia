import React from 'react';
import { useRouter } from 'next/router';
import { Typography, Grid } from '@mui/material';
import Link from 'next/link';

import useBreakpoints from '~/hooks/useBreakpoints';
import { hasBrowse } from '~/config/config';

import * as Styled from './styled';

const bannerData = {
  drop: 'Sneakerz',
  title: 'Stylish footwear with utility for your Ballerz',
  description: 'Secondary marketplace is now live! Buy and sell with other collectors.',
  background: '/collections/sneakerz/hero.webp'
};

export default function HomepageBanner() {
  const { isMediumDevice, isExtraSmallDevice } = useBreakpoints();
  const router = useRouter();

  const navigateToSneakerz = () => {
    router.push('/sneakerz');
  };

  return (
    <Styled.BannerRedirect
      disableTouchRipple
      onClick={navigateToSneakerz}
      arial-label="Redirect to Sneakerz page">
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
          {!hasBrowse && (
            <Grid container sx={{ gap: '12px' }}>
              <Link href="/sneakerz" passHref>
                <Styled.CardButton component="a" aria-label="sneakerz" sx={{ width: '200px' }}>
                  <Typography variant="subtitle1">Explore Sneakerz</Typography>
                </Styled.CardButton>
              </Link>
            </Grid>
          )}
        </Styled.Container>
      </Styled.ContainerBackground>
    </Styled.BannerRedirect>
  );
}
