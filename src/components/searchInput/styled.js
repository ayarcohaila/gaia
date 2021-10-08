import { Input, styled } from '@mui/material';

export const Search = styled(Input)(({ theme }) => ({
  width: '305px',
  height: '40px',
  border: 'none',
  marginLeft: 'auto',
  padding: '12px 16px 12px 20px',
  borderRadius: '20px',
  backgroundColor: theme.palette.grey[300],
  cursor: 'pointer',

  '& > .MuiInput-input': {
    ...theme.typography.subtitle1,
    fontWeight: 'bold',
    color: theme.palette.grey[700],
    cursor: 'pointer'
  },

  '& > .MuiInput-input::placeholder': {
    color: theme.palette.grey[600]
  },

  '&:hover > .MuiInput-input::placeholder': {
    color: theme.palette.grey[700],
    opacity: 1
  }
}));
