import { Box, Typography } from '@mui/material';
import { styled } from '~/themes/styled';

export const Anchor = styled('a')(() => ({
  textDecoration: 'none'
}));

export const Container = styled(Box)(() => ({
  boxSizing: 'border-box',
  width: '100%',
  height: '360px',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '35px',
  backgroundImage: 'url(/images/newToNFT/nftg.webp)',
  backgroundSize: 'cover',
  position: 'relative'
}));

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: '24px',
  fontSize: '24px',
  maxWidth: '400px',

  color: '#FFF',
  lineHeight: '120%',
  fontWeight: 'bold',

  [theme.breakpoints.up('sm')]: {
    fontSize: '40px'
  },

  [theme.breakpoints.up('md')]: {
    fontSize: '50px',
    maxWidth: '500px'
  }
}));

export const Divider = styled(Box)(() => ({
  height: '1px',
  width: '100%',
  background: '#fff',
  marginBottom: '20px'
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '120%',
  color: '#FFF',
  opacity: '0.9',

  [theme.breakpoints.up('sm')]: {
    fontSize: '20px'
  },

  [theme.breakpoints.up('md')]: {
    fontSize: '25px'
  }
}));

export const IconContainer = styled(Box)(({ theme }) => ({
  borderRadius: '50%',
  position: 'absolute',
  top: '8px',
  right: '8px',

  width: '100px',
  height: '100px',

  [theme.breakpoints.up('sm')]: {
    width: '140px',
    height: '140px',

    top: '16px',
    right: '32px'
  },

  [theme.breakpoints.up('md')]: {
    width: '170px',
    height: '170px'
  },

  [theme.breakpoints.up('xl')]: {
    width: '120px',
    height: '120px'
  },

  [theme.breakpoints.up(1600)]: {
    width: '170px',
    height: '170px'
  }
}));
