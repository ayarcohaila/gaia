import {
  styled,
  Box,
  Grid,
  Button as MuiButton,
  Typography,
  Divider as MuiDivider
} from '@mui/material';

import Accordion from '~/components/accordion';
import Button from '~/base/button';

export const Container = styled(Grid)(({ theme: { breakpoints, palette } }) => ({
  backgroundColor: palette.white.main,
  borderRadius: '20px',
  marginTop: '16px',
  padding: 40,
  gap: '40px',

  '.MuiAccordionSummary-root, .MuiAccordionDetails-root': {
    padding: '0px !important'
  },

  [breakpoints.down('md')]: {
    marginTop: '0',
    padding: '24px !important',

    '.MuiAccordionSummary-root, .MuiAccordionDetails-root': {
      padding: '12px'
    }
  },

  [breakpoints.down('sm')]: {
    marginTop: '0',
    padding: '20px 0 !important'
  }
}));

export const Title = styled(Typography)(({ theme: { breakpoints, typography } }) => ({
  ...typography.h3,
  margin: '12px 0 0px',

  [breakpoints.down('sm')]: {
    padding: '0 20px',
    textAlign: 'center'
  }
}));

export const EditionInfo = styled(Typography)(
  ({ theme: { palette, typography, breakpoints } }) => ({
    ...typography.body1,
    color: palette.grey[500],
    fontWeight: '600',
    margin: '16px 0',
    fontSize: '11px',
    letterSpacing: '0px',
    textTransform: 'uppercase',

    [breakpoints.down('sm')]: {
      textAlign: 'center'
    },

    '&>span': {
      margin: '0 8px'
    }
  })
);

export const Divider = styled(MuiDivider)(({ theme: { palette } }) => ({
  width: '100%',
  margin: '32px 0',
  marginBottom: '8px'
}));

export const AcordionWrapper = styled('div')(() => ({
  width: '100%',
  MuiAccordionRoot: {
    width: '100%'
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
    paddingRight: '40px',
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

export const CustomAccordion = styled(Accordion)(({ theme: { breakpoints } }) => ({
  '.MuiAccordionSummary-root, .MuiAccordionDetails-root': {
    padding: '0px !important'
  },

  [breakpoints.down('md')]: {
    marginTop: '0',
    padding: '24px !important',

    '.MuiAccordionSummary-root, .MuiAccordionDetails-root': {
      padding: '12px'
    }
  },

  [breakpoints.down('sm')]: {
    marginTop: '0',
    padding: '20px 0 !important'
  }
}));
