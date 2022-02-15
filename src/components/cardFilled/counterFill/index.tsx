import React, { memo } from 'react';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';

import { CounterFillProps } from './types';
import * as Styled from './styles';
import useCountDown from '~/hooks/useCountDown';

function CounterFill(props: CounterFillProps) {
  const {
    card: { logo, description, bgColor },
    countDownUnix
  } = props;
  const countdown = useCountDown({ countDownUnix });

  return (
    <Grid p={4} container direction="column" sx={{ height: '100%' }} justifyContent="end">
      <Styled.ImgContainer>
        <Image src={logo} layout="fill" objectFit="contain" />
      </Styled.ImgContainer>

      <Grid my={1.5}>
        <Typography variant="subtitle2">{description}</Typography>
        <Styled.Author mt={0.2} variant="body1">
          {'@Description'}
        </Styled.Author>
      </Grid>

      <Styled.CounterContainer>
        <Grid container item xs={4} alignItems="center" direction="column">
          <Styled.Counter bgColor={bgColor}>{countdown.days}</Styled.Counter>
          <Styled.Label mt={1}>Days</Styled.Label>
        </Grid>

        <Grid container item xs={4} alignItems="center" direction="column">
          <Styled.Counter bgColor={bgColor}>{countdown.hours}</Styled.Counter>
          <Styled.Label mt={1}>Hours</Styled.Label>
        </Grid>

        <Grid container item xs={4} alignItems="center" direction="column">
          <Styled.Counter bgColor={bgColor}>{countdown.seconds}</Styled.Counter>
          <Styled.Label mt={1}>Sec</Styled.Label>
        </Grid>
      </Styled.CounterContainer>
    </Grid>
  );
}

export default memo(CounterFill);
