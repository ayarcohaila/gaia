import { Button as MuiButton, styled } from '@mui/material';

export const Button = styled(MuiButton)(
  ({
    theme: {
      palette: { grey, primary },
      typography
    }
  }) => ({
    backgroundColor: primary.dark,
    borderRadius: '24px',
    color: 'white',
    padding: '16px 22px',
    textTransform: 'none',
    ...typography.subtitle1,
    fontWeight: 'bold',

    '&:hover': {
      backgroundColor: primary.main
    },

    '&:disabled': {
      backgroundColor: grey[400],
      color: grey[600]
    }
  })
);
