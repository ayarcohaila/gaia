import { styled, Box, Grid, Button as MuiButton, Typography } from '@mui/material';
import { Button } from '~/base';

export const Container = styled(Grid)(({ theme: { breakpoints } }) => ({
  backgroundColor: '#fff',
  borderRadius: '20px',
  marginTop: '16px',
  padding: '42px 56px 38px 0px',

  [breakpoints.down('md')]: {
    marginTop: '0',
    padding: '24px'
  },

  [breakpoints.down('sm')]: {
    marginTop: '0',
    padding: '20px 0'
  }
}));

export const Title = styled(Typography)(({ theme: { breakpoints, typography } }) => ({
  ...typography.h3,
  margin: '12px 0 20px',

  [breakpoints.down('sm')]: {
    padding: '0 20px',
    textAlign: 'center'
  }
}));

export const Description = styled(Typography)(
  ({
    theme: {
      breakpoints,
      palette: { grey },
      typography
    }
  }) => ({
    ...typography.h6,
    color: grey[600],

    [breakpoints.down('sm')]: {
      padding: '0 20px',
      textAlign: 'center'
    }
  })
);

export const NumberContainer = styled(Box)(
  ({
    theme: {
      breakpoints,
      palette: { grey }
    }
  }) => ({
    backgroundColor: grey[200],
    borderRadius: '10px',
    marginTop: '52px',
    padding: '2px 6px',
    width: 'fit-content',

    [breakpoints.down('sm')]: {
      marginTop: '24px'
    }
  })
);

export const ActionButtons = styled(Button, {
  shouldForwardProp: prop => prop !== 'removeListing'
})(({ removeListing, theme: { palette } }) => ({
  width: removeListing ? '160px' : '145px',
  height: '48px',
  padding: '15px 22px 17px',
  borderRadius: '24px',
  boxSizing: 'border-box',
  backgroundColor: removeListing && palette.error.main,

  ':hover': {
    backgroundColor: removeListing && palette.error[700]
  }
}));

export const TransferButton = styled(MuiButton)(({ theme: { palette } }) => ({
  width: 145,
  height: 50,
  padding: '15px 22px 17px',
  borderRadius: '24px',
  border: `solid 2px ${palette.grey[300]}`,
  color: palette.secondary.main,
  fontSize: '14px',
  letterSpacing: '0.2px',
  fontWeight: 'bold',
  textTransform: 'none',

  ':hover': {
    backgroundColor: palette.grey[200]
  }
}));
