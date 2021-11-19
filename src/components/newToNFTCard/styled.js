import { styled, Typography } from '@mui/material';

export const CustomCard = styled('div')(({ theme: { breakpoints } }) => ({
  display: 'flex',
  padding: '0',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '423px',

  [breakpoints.down('sm')]: {
    width: '460px'
  },

  [breakpoints.up('mdx')]: {
    width: '100%'
  },

  img: {
    width: '100%',
    height: '280px',
    borderRadius: '20px',
    boxShadow: '0 25px 14px -23px rgba(17, 17, 23, 0.12), 0 0 14px 0 rgba(0, 0, 0, 0.06)',

    [breakpoints.down('sm')]: {
      height: 'auto'
    },

    [breakpoints.up('mdx')]: {
      height: 'auto'
    }
  },

  a: {
    textDecoration: 'none'
  }
}));

export const CustomLink = styled('a')(() => ({
  width: '100%'
}));

export const CardDescription = styled(Typography)(({ theme: { breakpoints } }) => ({
  height: '32px',
  lineHeight: '20px',

  [breakpoints.down('lgm')]: {
    height: '40px'
  }
}));

export const CardLink = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  color: '#215cf1',
  marginTop: '20px',
  cursor: 'pointer'
}));
