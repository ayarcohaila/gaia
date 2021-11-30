import { Button, Grid, styled } from '@mui/material';

export const Wrapper = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '302px auto',
  padding: '0 40px',
  boxSizing: 'border-box',
  maxWidth: '1800px',
  width: '100%',
  gap: '22px',
  alignItems: 'baseline',

  [theme.breakpoints.down('md')]: {
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '24px'
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
