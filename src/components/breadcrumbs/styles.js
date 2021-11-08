import {
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Typography,
  styled
} from '@mui/material';

export const Breadcrumbs = styled(MuiBreadcrumbs)(() => ({
  '& li::before': {
    content: '""',
    display: 'none'
  }
}));

export const Button = styled(MuiButton)(
  ({
    theme: {
      palette: { grey },
      typography
    }
  }) => ({
    ...typography.subtitle2,
    color: grey[600],
    fontFamily: 'Work Sans, Roboto',
    fontWeight: 'bold',
    padding: 0,
    textTransform: 'none',

    '&:hover': {
      backgroundColor: 'transparent',
      textDecoration: 'underline'
    }
  })
);

export const Text = styled(Typography)(
  ({
    theme: {
      palette: { grey },
      typography
    }
  }) => ({
    ...typography.subtitle2,
    color: grey[450]
  })
);
