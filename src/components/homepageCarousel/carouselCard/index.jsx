import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@mui/material';

import * as Styled from './styled';

const CarouselCard = ({ data }) => {
  function handleBuyNow() {}

  return (
    <Styled.Container>
      <Styled.TypographyWithOpacity variant="h4">{data.title}</Styled.TypographyWithOpacity>
      <Typography
        variant="h1"
        fontSize="42px"
        maxWidth="450px"
        lineHeight="1.14"
        letterSpacing="-0.8px"
        mt="8px">
        {data.description}
      </Typography>
      <Styled.CardButton onClick={handleBuyNow}>
        <Typography variant="subtitle1" fontWeight="bold">
          Buy Now
        </Typography>
      </Styled.CardButton>
      <Styled.Divider />
      <Styled.CardFooter>
        <img src={data.logo} alt="logo" />
        <Typography variant="subtitle1" fontWeight="bold" mr="6px">
          {data.cardsAmount} cards
        </Typography>
        <span>&sdot;</span>
        <Typography variant="subtitle1" fontWeight="bold" ml="6px">
          {data.price}{' '}
        </Typography>
        <Styled.TypographyWithOpacity variant="subtitle1" fontWeight="bold">
          &nbsp;and up
        </Styled.TypographyWithOpacity>
      </Styled.CardFooter>
    </Styled.Container>
  );
};

CarouselCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    cardsAmount: PropTypes.number,
    price: PropTypes.string,
    logo: PropTypes.string
  }).isRequired
};

export default React.memo(CarouselCard);
