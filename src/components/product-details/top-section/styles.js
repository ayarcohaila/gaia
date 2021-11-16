import { styled, Box, Grid, Typography } from '@mui/material';

export const Container = styled(Grid)(({ theme: { breakpoints } }) => ({
  backgroundColor: '#fff',
  borderRadius: '20px',
  marginTop: '16px',
  padding: '42px 56px 38px 0px',

  [breakpoints.down('md')]: {
    marginTop: '0',
    padding: '24px'
  },

  [breakpoints.down('sm')]: {
    marginTop: '0',
    padding: '20px 0'
  }
}));

export const Title = styled(Typography)(({ theme: { breakpoints, typography } }) => ({
  ...typography.h3,
  margin: '12px 0 20px',

  [breakpoints.down('sm')]: {
    padding: '0 20px',
    textAlign: 'center'
  }
}));

export const Description = styled(Typography)(
  ({
    theme: {
      breakpoints,
      palette: { grey },
      typography
    }
  }) => ({
    ...typography.h6,
    color: grey[600],

    [breakpoints.down('sm')]: {
      padding: '0 20px',
      textAlign: 'center'
    }
  })
);

export const NumberContainer = styled(Box)(
  ({
    theme: {
      breakpoints,
      palette: { grey }
    }
  }) => ({
    backgroundColor: grey[200],
    borderRadius: '10px',
    marginTop: '52px',
    padding: '2px 6px',
    width: 'fit-content',

    [breakpoints.down('sm')]: {
      marginTop: '24px'
    }
  })
);
