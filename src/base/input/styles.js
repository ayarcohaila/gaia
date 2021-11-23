import { Input as MuiInput, styled } from '@mui/material';

export const Input = styled(MuiInput)(
  ({
    theme: {
      palette: { grey },
      typography
    }
  }) => ({
    backgroundColor: grey[200],
    borderRadius: '10px',
    minHeight: '48px',
    MozAppearance: 'textfield',
    margin: '0 8px 8px 0',
    padding: '16px 23px 16px 24px',

    '& > .MuiInput-input': {
      ...typography.subtitle2,
      color: grey[700],
      cursor: 'pointer',
      fontWeight: 'bold',
      fontFamily: 'IBMPlexMono',
      lineHeight: '1.14',
      letterSpacing: '0.2px',

      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0
      }
    },

    '& > .MuiInput-input::placeholder': {
      color: grey[600],
      fontWeight: 'bold',
      letterSpacing: '0.2px'
    },

    '&:hover > .MuiInput-input::placeholder': {
      color: grey[700],
      opacity: 1
    }
  })
);
