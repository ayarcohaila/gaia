import { styled, Grid, Button } from '@mui/material';
import { Button as RemoveListingButton } from '~/base';

export const ComingSoon = styled(Grid)(({ theme: { palette } }) => ({
  width: 256,
  height: 48,
  marginTop: 16,
  padding: '15px 22px 17px',
  borderRadius: '24px',
  backgroundColor: palette.grey[400],
  color: palette.grey[600],
  fontSize: '14px',
  fontWeight: 'bold'
}));

export const TransferButton = styled(Button)(({ theme: { palette } }) => ({
  width: 126,
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

export const CancelButton = styled(RemoveListingButton)(({ theme: { palette } }) => ({
  height: 48,
  padding: '14px 22px',
  width: '100%',
  boxSizing: 'border-box',
  borderRadius: '24px',
  backgroundColor: palette.error.main,
  fontFamily: 'unset',
  marginTop: '8px',

  transition: 'ease-in-out',
  transitionDuration: '100ms',
  color: 'white',

  ':hover': {
    backgroundColor: palette.error[700]
  }
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
  },

  '&.Mui-disabled': {
    backgroundColor: palette.grey[300]
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
