import { styled, Box } from '@mui/material';

export const ImageContainer = styled(Box)(({ theme: { breakpoints } }) => ({
  borderRadius: '16px',
  height: '424px',
  position: 'relative',
  margin: '0 auto',
  width: '424px',

  img: {
    borderRadius: '16px'
  },

  [breakpoints.down(1066)]: {
    height: '380px',
    width: '380px'
  },

  [breakpoints.down('md')]: {
    height: '320px',
    margin: '0 auto 16px',
    width: '320px'
  },

  [breakpoints.down('sm')]: {
    height: '275px',
    margin: '0 auto',
    width: '275px'
  }
}));
