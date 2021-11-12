import React from 'react';

import { Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { BurstIconWhite } from '~/base';
import { useBreakpoints } from '~/hooks';
import * as Styled from './styled';

const bannerData = {
  title: 'New Drop',
  description: 'NBA Top Shot Legendary Collection Available Now!',
  cardsAmount: 127,
  price: '₣500',
  logo: 'static/img/nba-top-shot.png',
  background: 'collections/ballerz.png'
};

export default function HomepageBanner() {
  const { isMediumDevice } = useBreakpoints();

  function handleBuyNow() {}

  return (
    <Styled.Container imgUrl={bannerData.background}>
      {isMediumDevice && <Styled.Logo src={bannerData.logo} alt="logo" />}
      <Styled.TypographyWithOpacity variant="h4" mt={isMediumDevice ? '132px' : '0'}>
        {bannerData.title}
      </Styled.TypographyWithOpacity>
      <Typography variant="h2" maxWidth="450px" lineHeight="1.14" letterSpacing="-0.8px" mt="8px">
        {bannerData.description}
      </Typography>
      {!isMediumDevice && (
        <Styled.CardButton onClick={handleBuyNow}>
          <Typography variant="subtitle1" fontWeight="bold">
            Buy Now
          </Typography>
        </Styled.CardButton>
      )}
      <Styled.Divider />
      <Styled.CardFooter>
        {!isMediumDevice && <Styled.Logo src={bannerData.logo} alt="logo" />}
        <BurstIconWhite />
        <Typography variant="subtitle1" fontWeight="bold" mr={isMediumDevice ? '12px' : '6px'}>
          {bannerData.cardsAmount} cards
        </Typography>
        <span>&sdot;</span>
        <Typography variant="subtitle1" fontWeight="bold" ml="6px">
          {bannerData.price}{' '}
        </Typography>
        <Styled.TypographyWithOpacity variant="subtitle1" fontWeight="bold">
          &nbsp;and up
        </Styled.TypographyWithOpacity>

        {isMediumDevice && (
          <Styled.CardButton onClick={handleBuyNow}>
            <KeyboardArrowRightIcon />
          </Styled.CardButton>
        )}
      </Styled.CardFooter>
    </Styled.Container>
  );
}
