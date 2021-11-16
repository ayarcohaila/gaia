import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { Typography, useTheme } from '@mui/material';

import * as Styled from './styled';

const NewToNFTCard = ({ data }) => {
  const {
    palette: { grey }
  } = useTheme();

  return (
    <>
      <Styled.CustomCard>
        <img src={data.image} alt={data.title} />
        <Typography variant="h5" marginTop="20px">
          {data.title}
        </Typography>
        <Styled.CardDescription color={grey[600]} variant="subtitle1">
          {data.description}
        </Styled.CardDescription>
        <Link href={data.link}>
          <Styled.CardLink>
            <Typography variant="h5">{data.linkText}</Typography>
            <KeyboardArrowRightIcon />
          </Styled.CardLink>
        </Link>
      </Styled.CustomCard>
    </>
  );
};

NewToNFTCard.propTypes = {
  data: PropTypes.shape({
    titile: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string
  }).isRequired
};

export default React.memo(NewToNFTCard);
