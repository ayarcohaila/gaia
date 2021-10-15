import { Grid, Button, styled } from '@mui/material';

export const ListWrapper = styled(Grid)(({ theme: { breakpoints } }) => ({
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '20px 80px 0px',
  boxSizing: 'border-box',
  width: '100%',

  [breakpoints.down('sm')]: {
    padding: '25px 20px'
  }
}));

export const FiltersContainer = styled(Grid)(({ theme: { breakpoints } }) => ({
  boxSizing: 'border-box',
  padding: '0 80px',

  [breakpoints.down('sm')]: {
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
