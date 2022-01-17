import {
  styled,
  Box,
  Grid,
  Button as MuiButton,
  Typography,
  Divider as MuiDivider
} from '@mui/material';
import Button from '~/base/button';

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

export const Divider = styled(MuiDivider)(({ theme: { palette } }) => ({
  border: '0',
  borderTop: `2px solid ${palette.grey[200]}`
}));

export const AcordionWrapper = styled('div')(() => ({
  MuiAccordionRoot: {
    width: '100%'
  }
}));

export const GridStyled = styled(Grid)(props => ({
  gap: props.isSmallDevice ? '8px' : '16px'
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

export const MultipleDescription = styled(Typography)(
  ({
    theme: {
      breakpoints,
      palette: { grey },
      typography
    }
  }) => ({
    ...typography.h6,
    color: grey[600],
    fontSize: '12px',
    lineHeight: '1rem',

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
  fontFamily: 'unset',

  ':hover': {
    backgroundColor: removeListing && palette.error[700]
  }
}));

export const PurchaseButton = styled(Button, {
  shouldForwardProp: prop => prop !== 'removeListing'
})(({ removeListing, theme: { palette } }) => ({
  width: '180px',
  padding: '15px 22px 17px',
  borderRadius: '24px',
  boxSizing: 'border-box',
  backgroundColor: removeListing && palette.error.main,
  fontFamily: 'unset',

  ':hover': {
    backgroundColor: removeListing && palette.error[700]
  }
}));

export const MultipleListing = styled(Button)(({ theme: { palette } }) => ({
  width: '200px',
  height: '48px',
  padding: '15px 22px 17px',
  borderRadius: '24px',
  boxSizing: 'border-box',
  backgroundColor: palette.white.main,
  border: `1px solid ${palette.error.main}`,
  color: palette.error.main,
  fontFamily: 'unset',

  ':hover': {
    backgroundColor: palette.error.main,
    border: `1px solid ${palette.error.main}`,
    color: palette.white.main
  },

  ':disabled': {
    border: 'none'
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
