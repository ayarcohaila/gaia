import { Grid, Typography, styled } from '@mui/material';

import { Button, SearchInput } from '~/base';

export const Input = styled(SearchInput)(
  ({
    theme: {
      breakpoints,
      palette: { grey }
    }
  }) => ({
    borderRadius: '28px',
    marginLeft: '0',
    height: '50px',
    width: '360px',

    '& > .MuiInput-input': {
      color: grey[700],
      fontSize: '1rem',
      fontWeight: '500',

      '&::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        MozAppearance: 'textfield'
      },

      '&::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        MozAppearance: 'textfield'
      }
    },

    '& > .MuiInput-input::placeholder': {
      color: grey[600],
      fontWeight: '500'
    },

    [breakpoints.down('sm')]: {
      width: '92%'
    }
  })
);

export const CustomButton = styled(Button)({
  height: '40px',
  padding: '12px 16px',
  transform: 'translateX(8px)',
  width: '180px'
});

export const FeesContent = styled(Grid)({
  marginTop: '32px',
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gridColumnGap: '16px',
  gridRowGap: '8px'
});

export const FeeText = styled(Typography, { shouldForwardProp: prop => prop !== 'feeValue' })(
  ({ theme: { palette, typography }, feeValue }) => ({
    ...typography.body1,
    textAlign: feeValue ? 'right' : 'left',
    color: palette.grey[600],
    fontWeight: '400',
    letterSpacing: 0,
    fontSize: '16px'
  })
);
