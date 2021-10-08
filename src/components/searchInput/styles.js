import { Input, styled } from '@mui/material';

export const Search = styled(Input)(
  ({
    theme: {
      typography,
      palette: { grey }
    }
  }) => ({
    width: '305px',
    height: '40px',
    border: 'none',
    marginLeft: 'auto',
    padding: '12px 16px 12px 20px',
    borderRadius: '20px',
    backgroundColor: grey[300],
    cursor: 'pointer',

    '& > .MuiInput-input': {
      fontWeight: 'bold',
      color: grey[700],
      cursor: 'pointer',
      ...typography.subtitle1
    },

    '& > .MuiInput-input::placeholder': {
      color: grey[600]
    },

    '&:hover > .MuiInput-input::placeholder': {
      color: grey[700],
      opacity: 1
    }
  })
);
