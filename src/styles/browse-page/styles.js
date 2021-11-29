import { Button, styled } from '@mui/material';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  padding: '0 80px',
  maxWidth: '1800px',

  [theme.breakpoints.down('md')]: {
    padding: '0 20px'
  }
}));

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
