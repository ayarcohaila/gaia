import { styled, Card, Typography, Button, CardHeader } from '@mui/material';

export const CustomCard = styled(Card)(() => ({
  padding: '16px 16px 22px',
  borderRadius: 20,
  backgroundColor: 'white',
  boxShadow: '0 0 0 0',
  position: 'relative'
}));

export const CustomCardHeader = styled(CardHeader)(({ theme: { palette } }) => ({
  padding: '0px 0 10px 0',

  '.MuiCardHeader-title': {
    fontSize: 13,
    fontWeight: 'bold',
    lineHeight: '1.23',
    letterSpacing: 'normal',
    color: palette.grey[600]
  }
}));

export const NFTTitle = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 'bold',
  marginBottom: 8
}));

export const NFTText = styled(Typography)(({ theme: { palette } }) => ({
  fontSize: '16px',
  fontWeight: 700,
  color: palette.secondary.main,
  marginBottom: 8
}));

export const SellButton = styled(Button)(({ theme: { palette } }) => ({
  width: 126,
  height: 48,
  padding: '15px 22px 17px',
  borderRadius: '24px',
  backgroundColor: palette.primary.main,
  color: 'white',
  fontWeight: 'bold',
  textTransform: 'none',
  marginTop: '8px',

  ':hover': {
    backgroundColor: palette.primary.hover
  }
}));

export const PurchaseButton = styled(Button)(({ theme: { palette } }) => ({
  width: 256,
  height: 48,
  marginTop: 16,
  padding: '15px 22px 17px',
  borderRadius: '24px',
  backgroundColor: palette.primary.main,
  color: 'white',
  fontWeight: 'bold',
  textTransform: 'none',

  ':hover': {
    backgroundColor: palette.primary.hover
  }
}));
//256
export const TransferButton = styled(Button)(({ theme: { palette }, solo }) => ({
  width: solo ? 256 : 126,
  height: 48,
  padding: '15px 22px 17px',
  borderRadius: '24px',
  border: `solid 2px ${palette.grey[300]}`,
  color: palette.secondary.main,
  fontSize: '14px',
  letterSpacing: '0.2px',
  fontWeight: 'bold',
  textTransform: 'none',
  marginTop: '8px',

  ':hover': {
    backgroundColor: palette.grey[200]
  }
}));

export const CancelButtonContainer = styled('div')(({ theme: { palette } }) => ({
  height: 48,
  padding: '14px 22px',
  width: '100%',
  boxSizing: 'border-box',
  borderRadius: '24px',
  backgroundColor: palette.error.main,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  transition: 'ease-in-out',
  transitionDuration: '100ms',
  color: 'white',

  fontSize: '14px',
  fontWeight: 'bold',
  lineHeight: '1.14',
  letterSpacing: '0.2px',
  marginTop: '8px',

  ':hover': {
    backgroundColor: palette.error[700]
  }
}));

export const CancelButton = styled(Button)(() => ({
  margin: 0,
  color: 'white',
  textTransform: 'none',
  fontWeight: 'bold',

  ':hover': {
    backgroundColor: 'transparent'
  }
}));

export const CancelButtonDivider = styled('div')(() => ({
  width: '2px',
  height: '20px',
  margin: '0 5px 0 29px',
  opacity: '0.16',
  backgroundColor: 'white'
}));

export const ListedText = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: 'bold',
  lineHeight: '1.14',
  letterSpacing: '0.2px',
  textAlign: 'center',
  color: 'white',
  textTransform: 'none'
}));
