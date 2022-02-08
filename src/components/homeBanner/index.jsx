import React from 'react';
import { useRouter } from 'next/router';
import { Typography, Grid } from '@mui/material';
import Link from 'next/link';

import useBreakpoints from '~/hooks/useBreakpoints';
import { hasBrowse } from '~/config/config';

import * as Styled from './styled';

const bannerData = {
  drop: '',
  title: 'NFL All Day',
  description:
    'The drama. The stories. The Moments. NFL All Day Digital video collectibles of Iconic NFL Moments by Dapper Labs.',
  background: '/collections/nfl/banner.webp'
};

export default function HomepageBanner() {
  const { isMediumDevice, isExtraSmallDevice } = useBreakpoints();
  const router = useRouter();

  const navigateTo = () => {
    router.push('/nfl-all-day');
  };

  return (
    <Styled.BannerRedirect disableTouchRipple onClick={navigateTo} arial-label="Redirect to NFL">
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
          <Grid container sx={{ gap: '12px' }}>
            <Link href="/nfl-all-day" passHref>
              <Styled.CardButton
                component="a"
                aria-label="Navigate collection page"
                sx={{ width: '200px' }}>
                <Typography variant="subtitle1">Explore NFL All Day</Typography>
              </Styled.CardButton>
            </Link>
          </Grid>
        </Styled.Container>
      </Styled.ContainerBackground>
    </Styled.BannerRedirect>
  );
}
