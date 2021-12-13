import { Button as MuiButton, styled } from '@mui/material';

export const Button = styled(MuiButton)(
  ({
    theme: {
      palette: { grey, primary, secondary },
      typography
    }
  }) => ({
    backgroundColor: primary.main,
    borderRadius: '24px',
    color: 'white',
    padding: '16px 22px',
    textTransform: 'none',
    ...typography.subtitle1,
    fontWeight: 'bold',

    '&:hover': {
      backgroundColor: primary.dark
    },

    '&:disabled': {
      backgroundColor: grey[400],
      color: grey[600]
    },

    '&.MuiButton-outlined': {
      backgroundColor: 'white',
      border: `2px solid ${grey[300]}`,
      color: secondary.main,

      '&:hover': {
        backgroundColor: grey[300]
      }
    }
  })
);
