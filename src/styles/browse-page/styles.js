import { styled } from '@mui/material';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  padding: '0 80px',
  maxWidth: '1800px',

  [theme.breakpoints.down('sm')]: {
    padding: '0 20px'
  }
}));
