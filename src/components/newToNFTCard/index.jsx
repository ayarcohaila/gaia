import React from 'react';
import PropTypes from 'prop-types';
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
        <Styled.CustomLink rel="noreferrer" {...data.linkProps}>
          <img src={data.image} alt={data.title} />
        </Styled.CustomLink>
        <Typography variant="h5" marginTop="20px">
          {data.title}
        </Typography>
        <Styled.CardDescription color={grey[600]} variant="subtitle1">
          {data.description}
        </Styled.CardDescription>
        {data.hasButton && (
          <a rel="noreferrer" {...data.linkProps}>
            <Styled.CardLink>
              <Typography variant="subtitle1" fontWeight="600">
                {data.linkText}
              </Typography>
              <KeyboardArrowRightIcon />
            </Styled.CardLink>
          </a>
        )}
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
