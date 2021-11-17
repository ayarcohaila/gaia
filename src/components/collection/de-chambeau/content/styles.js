import { Grid, styled } from '@mui/material';

export const Container = styled(Grid)(({ theme: { breakpoints } }) => ({
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: '16px',
  margin: '0 auto',
  maxWidth: '1280px',
  padding: '32px',
  width: '100%',

  [breakpoints.down('md')]: {
    padding: '20px'
  }
}));

export const Image = styled('img')(({ theme: { breakpoints } }) => ({
  borderRadius: '24px',
  margin: '0 auto',
  height: '370px',
  maxWidth: '370px',
  width: '95%',

  [breakpoints.down('md')]: {
    height: '300px'
  }
}));

export const BottomImage = styled('img')(() => ({
  borderRadius: '24px',
  margin: '24px 0',
  maxHeight: '650px',
  maxWidth: '1280px',
  width: '95%'
}));
