import { Grid, CardMedia, styled } from '@mui/material';

export const Container = styled(Grid)(({ theme: { breakpoints } }) => ({
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: '16px',
  margin: '0 auto',
  maxWidth: '1800px',
  padding: '32px',
  width: '100%',

  [breakpoints.down('md')]: {
    padding: '20px'
  }
}));

export const Image = styled('img')(({ theme: { breakpoints } }) => ({
  borderRadius: '24px',
  margin: '0 auto',
  height: '450px',
  maxWidth: '450px',
  width: '95%',

  [breakpoints.down('md')]: {
    height: '300px'
  }
}));

export const BottomImage = styled('img')(() => ({
  borderRadius: '24px',
  margin: '24px 0',
  maxHeight: 'auto',
  maxWidth: '1800px',
  width: '100%'
}));

export const CustomCardMedia = styled(CardMedia)(({ theme: { breakpoints } }) => ({
  borderRadius: '10px',
  margin: '0 auto',
  position: 'relative',
  height: '424px',
  width: '424px',

  [breakpoints.down(1066)]: {
    height: '380px',
    width: '380px'
  },

  [breakpoints.down('md')]: {
    margin: '0 auto 16px',
    height: '320px',
    width: '320px'
  },

  [breakpoints.down('sm')]: {
    margin: '0 auto',
    height: '275px',
    width: '275px'
  }
}));
