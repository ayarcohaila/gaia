import { Grid, Typography, styled } from '@mui/material';
import Button from '~/base/button';

export const ListWrapper = styled(Grid)(({ theme: { breakpoints } }) => ({
  display: 'grid',
  gap: '16px',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignContent: 'baseline',

  [breakpoints.up('lg')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    padding: '0 40px',
    marginTop: '40px'
  },

  [breakpoints.down('lg')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    padding: '0 20px',
    marginTop: '40px'
  },

  [breakpoints.down('sm')]: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    padding: '0 20px',
    marginTop: '20px'
  }
}));

export const FiltersContainer = styled(Grid)(({ theme: { breakpoints } }) => ({
  padding: '0 40px',
  boxSizing: 'border-box',

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

export const EmptyContainer = styled(Grid)(({ theme: { breakpoints } }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '300px',
  padding: '0 20px',
  boxSizing: 'border-box',
  [breakpoints.down('sm')]: {
    textAlign: 'center'
  }
}));

export const EmptyText = styled(Typography)(({ theme: { typography } }) => ({
  ...typography.body2,
  fontSize: '20px',
  letterSpacing: '0.6px'
}));

export const RedirectButton = styled(Button)(() => ({
  padding: '16px 40px',
  letterSpacing: '0.6px',
  margin: '20px 0 0 0'
}));
