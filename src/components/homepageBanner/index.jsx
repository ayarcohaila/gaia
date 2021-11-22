import React from 'react';

import { Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { useBreakpoints } from '~/hooks';
import { isBrysonSaleEnabled } from '~/constant/collection';

import * as Styled from './styled';

const bannerData = {
  drop: 'Vegas, Baby!',
  title: 'Bryson DeChambeau',
  description: 'Collection NFT Commemorating Las Vegas Showdown',
  background: 'images/header/bryson_header_v3.jpg'
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
          mt={isExtraSmallDevice ? '140px' : isMediumDevice && '180px'}>
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
          mb={isMediumDevice && '24px'}>
          {bannerData.description}
        </Typography>
        {isMediumDevice && <Styled.Divider />}
        <Styled.CardButton component="a" href="/bryson" isBrysonSaleEnabled>
          {isMediumDevice ? (
            <KeyboardArrowRightIcon />
          ) : (
            <Typography variant="subtitle1">
              {isBrysonSaleEnabled ? 'Buy Now' : 'On Sale Fri Nov 19 at 6pm PT'}
            </Typography>
          )}
        </Styled.CardButton>
      </Styled.Container>
      <Styled.BannerLink href="/bryson" />
    </Styled.ContainerBackground>
  );
}
