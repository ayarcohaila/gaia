import { Typography, styled } from '@mui/material';

export const ListItem = styled(Typography)(
  ({
    theme: {
      palette: { grey },
      typography
    }
  }) => ({
    ...typography.body2,
    fontSize: '16px',
    color: grey[600]
  })
);
