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
  color: '#215cf1',
  letterSpacing: 'normal',
  marginTop: '13px'
}));

export const GridVideo = styled(Grid)(() => ({
  '& .MuiBox-root': {
    display: 'flex',
    justifyContent: 'center',
    video: {
      minHeight: '258.75px'
    }
  },
  '& .MuiButtonBase-root': {
    padding: '12px'
  },
  '& .MuiGrid-root': {
    padding: '0 0px',
    width: '75%'
  }
}));

export const ImageContainer = styled(Grid)(() => ({
  height: '100%',
  width: '100%',
  position: 'relative',
  img: {
    borderRadius: '20px'
  }
}));
