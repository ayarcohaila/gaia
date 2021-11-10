import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { BurstIcon } from '~/base';
import { useBreakpoints } from '~/hooks';
import * as Styled from './styled';

const CarouselCard = ({ data }) => {
  const { isMediumDevice } = useBreakpoints();

  function handleBuyNow() {}

  return (
    <Styled.Container imgUrl={data.background}>
      {isMediumDevice && <Styled.Logo src={data.logo} alt="logo" />}
      <Styled.TypographyWithOpacity variant="h4" mt={isMediumDevice ? '132px' : '0'}>
        {data.title}
      </Styled.TypographyWithOpacity>
      <Typography
        variant="h1"
        fontSize="42px"
        maxWidth="450px"
        lineHeight="1.14"
        letterSpacing="-0.8px"
        mt="8px">
        {data.description}
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
        {!isMediumDevice && <Styled.Logo src={data.logo} alt="logo" />}
        <BurstIcon isWhite />
        <Typography variant="subtitle1" fontWeight="bold" mr={isMediumDevice ? '12px' : '6px'}>
          {data.cardsAmount} cards
        </Typography>
        <span>&sdot;</span>
        <Typography variant="subtitle1" fontWeight="bold" ml="6px">
          {data.price}{' '}
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
};

CarouselCard.propTypes = {
  data: PropTypes.shape({
    background: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    cardsAmount: PropTypes.number,
    price: PropTypes.string,
    logo: PropTypes.string
  }).isRequired
};

export default React.memo(CarouselCard);
