import { Grid, styled } from '@mui/material';

export const ListWrapper = styled(Grid)(({ theme: { breakpoints } }) => ({
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '20px 80px 40px',
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
