import { styled, Button, Typography } from '@mui/material';

export const Container = styled('div')(({ theme: { breakpoints } }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingLeft: '72px',
  paddingTop: '156px',
  paddingBottom: '56px',
  width: '90%',
  maxHeight: '618px',
  background: '#001',
  borderRadius: '40px',
  color: '#fff',
  marginLeft: '2%',

  [breakpoints.down('md')]: {
    padding: '28px',
    paddingBottom: '24px',
    width: '84%',
    marginLeft: '1%'
  }
}));

export const TypographyWithOpacity = styled(Typography)(() => ({
  opacity: '0.64'
}));

export const CardButton = styled(Button)(({ theme: { breakpoints } }) => ({
  color: '#fff',
  width: '103px',
  height: '48px',
  borderRadius: '24px',
  backgroundColor: '#215cf1',
  marginTop: '40px',
  textTransform: 'none',

  [breakpoints.down('md')]: {
    width: '48px',
    height: '48px',
    minWidth: '48px',
    marginTop: '0px',
    marginLeft: 'auto'
  }
}));

export const Divider = styled('div')(({ theme: { breakpoints } }) => ({
  height: '2px',
  width: '40%',
  opacity: '0.16',
  borderRadius: '24px',
  backgroundColor: '#fff',
  marginTop: '72px',

  [breakpoints.down('md')]: {
    width: '100%',
    marginTop: '24px'
  }
}));

export const Logo = styled('img')(() => ({
  width: '80px',
  height: '40px',
  marginRight: '32px'
}));

export const CardFooter = styled('div')(({ theme: { breakpoints } }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  color: '#fff',
  width: '40%',
  marginTop: '28px',

  'span:last-child': {
    opacity: '0.64'
  },

  [breakpoints.down('md')]: {
    width: '100%',
    maxHeight: '48px',
    marginTop: '12px'
  }
}));
