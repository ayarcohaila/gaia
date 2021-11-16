import React from 'react';

import { Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { useBreakpoints } from '~/hooks';
import * as Styled from './styled';

const bannerData = {
  drop: 'Exclusive Drop',
  title: 'Bryson Dechambeau',
  description: 'Las Vegas Thanksgiving NFT + VIP Raffle',
  background: 'images/header/bryson_header.jpg'
};

export default function HomepageBanner() {
  const { isMediumDevice } = useBreakpoints();

  function handleBuyNow() {}

  return (
    <Styled.Container imgUrl={bannerData.background}>
      <Styled.TypographyWithOpacity
        variant="h4"
        fontWeight="normal"
        mt={isMediumDevice ? '132px' : '0'}>
        {bannerData.drop}
      </Styled.TypographyWithOpacity>
      <Typography variant="h2" fontWeight="bold" maxWidth="450px" mt="8px">
        {bannerData.title}
      </Typography>
      <Typography variant="h3" fontWeight="normal" mt="8px">
        {bannerData.description}
      </Typography>
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
