import { Input, Autocomplete as MuiAutocomplete, styled } from '@mui/material';

export const Search = styled(Input, { shouldForwardProp: props => props !== 'styles' })(
  ({ theme: { typography, palette }, styles }) => ({
    width: '305px',
    height: '40px',
    border: 'none',
    marginLeft: 'auto',
    padding: '12px 16px 12px 20px',
    borderRadius: '20px',
    backgroundColor: palette.grey[300],
    cursor: 'pointer',

    '& > .MuiInput-input': {
      ...typography.subtitle1,
      color: palette.grey[700],
      cursor: 'pointer',
      lineHeight: '1.14',
      letterSpacing: '0.2px',
      fontWeight: 'bold'
    },

    '& > .MuiInput-input::placeholder': {
      color: palette.grey[600],
      fontWeight: 'bold',
      letterSpacing: '0.2px'
    },

    '&:hover > .MuiInput-input::placeholder': {
      color: palette.grey[700],
      opacity: 1
    },
    ...styles
  })
);

export const Autocomplete = styled(MuiAutocomplete)(({ theme: { palette } }) => ({
  '.MuiOutlinedInput-root': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: `${palette.grey[300]} !important`,
      borderWidth: '1px'
    }
  },

  '.MuiInputLabel-root.Mui-focused': {
    color: palette.grey[600]
  }
}));
