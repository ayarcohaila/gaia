import { styled, Typography } from '@mui/material';

export const CustomCard = styled('div')(() => ({
  display: 'flex',
  padding: '0',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  maxWidth: '100%',

  img: {
    width: '100%',
    height: '280px',
    borderRadius: '20px',
    boxShadow: '0 25px 14px -23px rgba(17, 17, 23, 0.12), 0 0 14px 0 rgba(0, 0, 0, 0.06)'
  }
}));

export const CardDescription = styled(Typography)(() => ({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  maxWidth: '360px',
  maxHeight: '40px',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical'
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
