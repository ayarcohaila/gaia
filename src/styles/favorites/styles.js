import { Grid, Typography, styled } from '@mui/material';
import Button from '~/base/button';

export const ListWrapper = styled(Grid)(({ theme: { breakpoints } }) => ({
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '20px 40px 0px',
  boxSizing: 'border-box',
  width: '100%',

  [breakpoints.down('sm')]: {
    padding: '25px 20px'
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
