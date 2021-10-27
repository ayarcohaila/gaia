import { Grid, Button, styled } from '@mui/material';

export const BlackButton = styled(Button)(({ theme: { typography, palette } }) => ({
  ...typography.subtitle1,
  padding: '16px 22px',
  height: '48px',
  borderRadius: '24px',
  color: 'white',
  fontSize: '14px',
  fontWeight: 'bold',
  textTransform: 'unset',
  lineHeight: '1.14',
  letterSpacing: '0.2px',
  backgroundColor: 'black',
  margin: 0,

  '&:hover': {
    backgroundColor: palette.grey[600]
  }
}));

export const Container = styled(Grid)(({ theme: { breakpoints } }) => ({
  padding: '0 40px',
  boxSizing: 'border-box',

  [breakpoints.down('md')]: {
    padding: '0 20px'
  }
}));
