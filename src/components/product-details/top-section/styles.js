import { styled, Box, Grid, Typography } from '@mui/material';
import NextImage from 'next/image';

export const Container = styled(Grid)(({ theme: { breakpoints } }) => ({
  backgroundColor: '#fff',
  borderRadius: '20px',
  marginTop: '16px',
  padding: '42px 56px 38px 100px',

  [breakpoints.down('md')]: {
    marginTop: '0',
    padding: '24px'
  },

  [breakpoints.down('sm')]: {
    marginTop: '0',
    padding: '20px 0'
  }
}));

export const ImageContainer = styled(Box)(({ theme: { breakpoints } }) => ({
  borderRadius: '16px',
  height: '424px',
  position: 'relative',
  margin: 'auto 0',
  width: '424px',

  [breakpoints.down(1066)]: {
    height: '380px',
    width: '380px'
  },

  [breakpoints.down('md')]: {
    height: '320px',
    margin: '0 auto 16px',
    width: '320px'
  },

  [breakpoints.down('sm')]: {
    height: '275px',
    margin: '0 auto',
    width: '275px'
  }
}));

export const Image = styled(NextImage)(() => ({
  borderRadius: '16px'
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
