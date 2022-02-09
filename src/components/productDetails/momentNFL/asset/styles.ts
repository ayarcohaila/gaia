import { Box } from '@mui/material';
import { styled } from '~/themes/styled';

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

export const ImageThumb = styled('div')<{ selected: boolean }>(({ selected, theme }) => ({
  width: '60px',
  height: '80px',
  borderRadius: '8px',
  margin: '16px 0 40px',
  backgroundColor: 'black',
  opacity: selected ? 1 : 0.4,
  border: selected ? '2px solid blue' : undefined,
  cursor: 'pointer',

  [theme.breakpoints.down('md')]: {
    margin: '16px 0 0'
  },

  [theme.breakpoints.down('sm')]: {
    width: '50px',
    height: '70px'
  }
}));
