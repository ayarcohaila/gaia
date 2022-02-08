import { styled, Card, Typography, Grid } from '@mui/material';

export const CustomCard = styled(Card)(() => ({
  boxSizing: 'border-box',
  padding: '16px 16px 22px',
  borderRadius: 20,
  backgroundColor: 'white',
  boxShadow: '0 0 0 0',
  borderSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  cursor: 'pointer'
}));

export const NFTText = styled(Typography)(({ theme: { palette } }) => ({
  fontSize: '16px',
  fontWeight: 700,
  color: palette.secondary.main,
  marginBottom: 8
}));

export const NFTAvailableCount = styled(Typography)(() => ({
  fontSize: '13px',
  fontWeight: '500',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: '1.23',
  letterSpacing: 'normal',
  color: '#6c7283',
  marginTop: '13px'
}));

export const NFTPrice = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: 'bold',
  lineHeight: '1.14',
  color: '#215cf1',
  letterSpacing: 'normal'
}));

export const NFTDescription = styled(Typography)(() => ({
  fontSize: '13px',
  fontWeight: '500',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: '1.23',
  letterSpacing: 'normal',
  color: '#6c7283'
}));

export const AssetContainer = styled(Grid)(() => ({
  height: '100%',
  width: '100%'
}));
