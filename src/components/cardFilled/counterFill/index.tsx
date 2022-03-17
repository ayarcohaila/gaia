import React, { memo } from 'react';
import { Grid } from '@mui/material';

import { CounterFillProps } from './types';
import * as Styled from './styles';
import useCountDown from '~/hooks/useCountDown';

function CounterFill(props: CounterFillProps) {
  const { countDownUnix, bgColor } = props;
  const countdown = useCountDown({ countDownUnix });
  const formatPad = (n: number | undefined) => {
    return String(n).padStart(2, '0');
  };
  return (
    <Grid pb={4} container direction="column" sx={{ height: '100%' }} justifyContent="end">
      <Styled.CounterContainer>
        <Grid container xs={4} alignItems="center" direction="column">
          <Styled.Counter bgColor={bgColor}>{formatPad(countdown.days)}</Styled.Counter>
          <Styled.Label mt={1}>DAYS</Styled.Label>
        </Grid>

        <Grid container xs={4} alignItems="center" direction="column">
          <Styled.Counter bgColor={bgColor}>{formatPad(countdown.hours)}</Styled.Counter>
          <Styled.Label mt={1}>HRS</Styled.Label>
        </Grid>

        <Grid container xs={4} alignItems="center" direction="column">
          <Styled.Counter bgColor={bgColor}>{formatPad(countdown.minutes)}</Styled.Counter>
          <Styled.Label mt={1}>MIN</Styled.Label>
        </Grid>
      </Styled.CounterContainer>
    </Grid>
  );
}

export default memo(CounterFill);
