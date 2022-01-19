import { styled, Box } from '@mui/material';

export const ImageContainer = styled(Box)(({ theme }) => ({
  borderRadius: '16px',
  position: 'relative',
  margin: '0 auto',
  height: '424px',
  width: '424px',

  [theme.breakpoints.down('lg')]: {
    height: '380px',
    width: '380px'
  },

  [theme.breakpoints.down('sm')]: {
    height: '275px',
    width: '275px'
  },

  img: {
    borderRadius: '16px'
  }
}));
