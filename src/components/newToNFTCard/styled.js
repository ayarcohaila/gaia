import { styled, Typography } from '@mui/material';

export const CustomCard = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  fontFamily: 'arial',
  img: {
    width: '416px',
    borderRadius: '20px'
  }
}));
export const CardTitle = styled(Typography)(() => ({}));
export const CardDescription = styled(Typography)(() => ({}));
export const CardLink = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  color: '#215cf1',
  marginTop: '20px',
  cursor: 'pointer'
}));
