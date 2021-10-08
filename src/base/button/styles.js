import { Button as MuiButton, styled } from '@mui/material';

export const Button = styled(MuiButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  borderRadius: '24px',
  color: 'white',
  padding: '16px 22px',
  textTransform: 'none',
  ...theme.typography.subtitle1,
  fontWeight: 'bold',

  '&:hover': {
    backgroundColor: theme.palette.primary.main
  },

  '&:disabled': {
    backgroundColor: theme.palette.grey[400],
    color: theme.palette.grey[600]
  }
}));
