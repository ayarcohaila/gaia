import React from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from 'next/link';
import { Typography, useTheme } from '@mui/material';
import Image from 'next/image';

import * as Styled from './styled';

const CardHome = ({ data }) => {
  const {
    palette: { grey }
  } = useTheme();

  return (
    <>
      <Styled.CustomCard>
        <Link {...(data.hasButton ? data.linkProps : { href: '#' })} passHref>
          <Styled.CustomLink rel="noreferrer" target={data.linkProps?.target}>
            <Styled.ImageContainer>
              <Image src={data.image} alt={data.title} height={407.16} width={576.88} />
            </Styled.ImageContainer>
          </Styled.CustomLink>
        </Link>
        <Typography variant="h5" marginTop="20px">
          {data.title}
        </Typography>
        <Styled.CardDescription color={grey[600]} variant="subtitle1">
          {data.description}
        </Styled.CardDescription>
        {data.hasButton && (
          <Link {...data.linkProps} passHref>
            {/* eslint-disable-next-line */}
            <a rel="noreferrer" target={data.linkProps?.target}>
              <Styled.CardLink>
                <Typography variant="link1">{data.linkText}</Typography>
                <KeyboardArrowRightIcon />
              </Styled.CardLink>
            </a>
          </Link>
        )}
      </Styled.CustomCard>
    </>
  );
};

CardHome.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string
  }).isRequired
};
export default React.memo(CardHome);