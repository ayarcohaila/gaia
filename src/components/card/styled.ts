import { styled, Card, CardHeader, Typography, Grid, Skeleton as MuiSkeleton } from '@mui/material';

export const CustomCard = styled(Card)(() => ({
  padding: '16px 16px 22px',
  borderRadius: 20,
  backgroundColor: 'white',
  boxShadow: '0 0 0 0',
  position: 'relative',
  borderSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}));

export const CustomCardHeaderWrapper = styled('div')({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center'
});

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
    color: palette.grey[600]
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
    justifyContent: 'center'
  },
  '& .MuiButtonBase-root': {
    padding: '12px'
  },
  '& .MuiGrid-root': {
    padding: '0 0px',
    width: '75%'
  }
}));

export const Skeleton = styled(MuiSkeleton)(() => ({
  borderRadius: '20px',
  margin: 0,
  height: '17vw',
  minHeight: '17.25rem'
}));

export const AssetContainer = styled(Grid)(() => ({
  height: '100%',
  width: '100%'
}));

export const ImageContainer = styled(Grid, { shouldForwardProp: props => props !== 'imgLoaded' })<{
  imgLoaded: boolean;
}>(({ imgLoaded }) => ({
  height: imgLoaded ? '100%' : '0%',
  width: imgLoaded ? '100%' : '0%',
  visibility: imgLoaded ? undefined : 'hidden'
}));
