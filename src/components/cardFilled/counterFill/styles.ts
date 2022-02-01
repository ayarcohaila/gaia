import { Typography, Grid } from '@mui/material';
import { styled } from '~/themes/styled';

export const CounterContainer = styled(Grid)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',
  marginBottom: '20px'
}));

export const Counter = styled(Typography)<{
  bgColor: string;
}>(({ bgColor }) => ({
  fontSize: '24px',
  background: `${bgColor}`,
  padding: '80% 100%',
  borderRadius: '10px'
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
