import { Typography, Grid } from '@mui/material';
import { styled } from '~/themes/styled';

export const CounterContainer = styled(Grid)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px',
  marginBottom: '20px'
}));

export const Counter = styled(Typography)<{
  bgColor: string;
}>(({ bgColor, theme }) => ({
  fontSize: '24px',
  background: `${bgColor}`,
  padding: '80% 100%',
  borderRadius: '10px',
  width: '100%',
  textAlign: 'center',

  [theme.breakpoints.down(640)]: {
    padding: '65% 85%',
    fontSize: '36px'
  },

  [theme.breakpoints.down(375)]: {
    padding: '30% 0%',
    fontSize: '24px'
  },

  [theme.breakpoints.up(1500)]: {
    padding: '60% 85%'
  }
}));

export const Label = styled(Typography)(() => ({
  opacity: '0.64',
  fontSize: '12px',
  lineHeight: 1.2,
  letterSpacing: '0.44px',
  textAlign: 'center'
}));

export const Author = styled(Typography)(() => ({
  opacity: '0.64',
  fontSize: '12px',
  lineHeight: 1.2
}));

export const ImgContainer = styled(Grid)(() => ({
  position: 'relative',
  width: '10rem',
  height: 100
}));
