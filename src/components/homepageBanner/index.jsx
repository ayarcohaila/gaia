import React from 'react';

import { Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { useBreakpoints } from '~/hooks';
import * as Styled from './styled';

const bannerData = {
  drop: 'Exclusive Drop',
  title: 'Bryson Dechambeau',
  description: 'Vegas, Baby! Collectible NFT + VIP Raffle',
  background: 'images/header/bryson_header.jpg'
};

export default function HomepageBanner() {
  const { isMediumDevice, isExtraSmallDevice } = useBreakpoints();

  function handleBuyNow() {}

  return (
    <Styled.Container imgUrl={bannerData.background}>
      <Styled.TypographyWithOpacity
        variant={isMediumDevice ? 'h5' : 'h4'}
        fontWeight="normal"
        lineHeight="24px"
        mt={isExtraSmallDevice ? '200px' : isMediumDevice && '250px'}>
        {bannerData.drop}
      </Styled.TypographyWithOpacity>
      <Typography variant="h2" fontWeight="bold" maxWidth="450px" mt="10px">
        {bannerData.title}
      </Typography>
      <Typography
        variant={isMediumDevice ? 'subtitle1' : 'h4'}
        fontWeight="normal"
        mt="10px"
        mb={isMediumDevice && '24px'}>
        {bannerData.description}
      </Typography>
      {isMediumDevice && <Styled.Divider />}
      <Styled.CardButton onClick={handleBuyNow}>
        {isMediumDevice ? (
          <KeyboardArrowRightIcon />
        ) : (
          <Typography variant="subtitle1">Buy Now</Typography>
        )}
      </Styled.CardButton>
    </Styled.Container>
  );
}
