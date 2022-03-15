import { Container, Typography } from '@mui/material';
import { styled } from '~/themes/styled';

export const Wrapper = styled(Container)(() => ({
  width: '100%',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const Text = styled(Typography)(() => ({
  fontSize: '32px',
  fontWeight: '600',
  lineHeight: '1.2',
  letterSpacing: '0.2px',
  textAlign: 'center'
}));
