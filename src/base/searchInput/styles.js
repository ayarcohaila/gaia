import { Input, styled } from '@mui/material';

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
      fontWeight: 'bold',
      color: palette.grey[700],
      cursor: 'pointer',
      ...typography.subtitle1
    },

    '& > .MuiInput-input::placeholder': {
      color: palette.grey[600]
    },

    '&:hover > .MuiInput-input::placeholder': {
      color: palette.grey[700],
      opacity: 1
    },
    ...styles
  })
);
