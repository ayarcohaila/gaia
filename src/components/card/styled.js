import { styled, Card, CardHeader, Typography, Grid } from '@mui/material';

export const CustomCard = styled(Card)(() => ({
  padding: '16px 16px 22px',
  borderRadius: 20,
  backgroundColor: 'white',
  boxShadow: '0 0 0 0',
  position: 'relative',
  borderSizing: 'border-box'
}));

export const CustomCardHeader = styled(CardHeader)(({ theme: { palette } }) => ({
  padding: '0px 0 10px 0',

  '.MuiCardHeader-title': {
    fontSize: 13,
    fontWeight: 'bold',
    lineHeight: '1.23',
    letterSpacing: 'normal',
    color: palette.grey[600]
  },

  svg: {
    color: palette.grey[600],
    marginRight: 16
  }
}));

export const NFTText = styled(Typography)(({ theme: { palette } }) => ({
  fontSize: '16px',
  fontWeight: 700,
  color: palette.secondary.main,
  marginBottom: 8
}));

export const NFTPrice = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: 'bold',
  lineHeight: '1.14',
  color: '#003aac',
  marginTop: '13px'
}));

export const ImageContainer = styled(Grid)(() => ({
  img: {
    borderRadius: '20px'
  }
}));
