import { Button as MuiButton, styled } from '@mui/material';

export const Button = styled(MuiButton)(({ theme }) => ({
  ...theme.typography.subtitle1,
  backgroundColor: theme.palette.primary.dark,
  borderRadius: '24px',
  color: 'white',
  fontWeight: 'bold',
  padding: '16px 22px',
  textTransform: 'none',

  '&:hover': {
    backgroundColor: theme.palette.primary.main
  },

  '&:disabled': {
    backgroundColor: theme.palette.grey[400],
    color: theme.palette.grey[600]
  }
}));
