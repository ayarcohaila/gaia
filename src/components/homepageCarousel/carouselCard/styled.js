import { styled, Button, Typography } from '@mui/material';

export const Container = styled('div')(() => ({
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
  color: '#fff'
}));

export const TypographyWithOpacity = styled(Typography)(() => ({
  opacity: '0.64'
}));

export const CardButton = styled(Button)(() => ({
  color: '#fff',
  width: '103px',
  height: '48px',
  borderRadius: '24px',
  backgroundColor: '#215cf1',
  marginTop: '40px',
  textTransform: 'none'
}));

export const Divider = styled('div')(() => ({
  height: '2px',
  width: '40%',
  opacity: '0.16',
  borderRadius: '24px',
  backgroundColor: '#fff',
  marginTop: '72px'
}));

export const CardFooter = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  color: '#fff',
  width: '40%',
  marginTop: '28px',

  img: {
    width: '80px',
    height: '40px',
    marginRight: '32px'
  },

  'span:last-child': {
    opacity: '0.64'
  }
}));
