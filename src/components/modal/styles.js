import { Box, Grid, Button, Typography, styled, Skeleton } from '@mui/material';

export const Container = styled(Box)(({ theme: { breakpoints } }) => ({
  left: '50%',
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',

  [breakpoints.down('sm')]: {
    position: 'static',
    transform: 'none',
    left: 'auto',
    top: 'auto'
  }
}));

export const Content = styled(Box)(
  ({
    theme: {
      breakpoints,
      palette: { grey }
    }
  }) => ({
    backgroundColor: grey[100],
    borderRadius: 32,
    position: 'relative',
    width: 632,

    [breakpoints.down('sm')]: {
      borderRadius: 0,
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      width: '100vw'
    }
  })
);

export const AssetContainer = styled(Grid)(({ theme: { breakpoints } }) => ({
  backgroundColor: 'transparent',
  boxShadow: '0 26px 14px -24px rgba(17, 17, 23, 0.12), 0 0 14px 0 rgba(0, 0, 0, 0.06)',
  height: 180,
  marginLeft: -90,
  position: 'absolute',
  left: '50%',
  width: 180,
  top: -90,

  [breakpoints.down('sm')]: {
    height: 140,
    marginLeft: -70,
    width: 140
  }
}));

export const Asset = styled('img')(() => ({
  borderRadius: 12.2,
  boxShadow: '0 26px 14px -24px rgba(17, 17, 23, 0.12), 0 0 14px 0 rgba(0, 0, 0, 0.06)',
  width: '180px',
  height: '180px'
}));

export const InfoContainer = styled(Box)(() => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  overflowY: 'auto',
  overflowX: 'hidden',
  width: '100%'
}));

export const Title = styled(Typography)(
  ({
    theme: {
      breakpoints,
      palette: { secondary }
    }
  }) => ({
    color: secondary.main,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: '72px',

    [breakpoints.down('sm')]: {
      textAlign: 'center',
      maxWidth: '90%',
      lineHeight: '1.5'
    }
  })
);

export const Description = styled(Typography)(
  ({
    theme: {
      palette: { grey },
      typography
    }
  }) => ({
    ...typography.h5,
    color: grey[600],
    fontWeight: '500',
    margin: '8px 0 24px'
  })
);

export const CloseButton = styled(Button)(({ theme: { typography } }) => ({
  ...typography.subtitle1,
  backgroundColor: 'transparent',
  bottom: -60,
  color: 'white',
  fontWeight: 'bold',
  left: '50%',
  letterSpacing: '0.2px',
  marginLeft: '-60px',
  padding: '0',
  position: 'absolute',
  textTransform: 'none'
}));

export const AssetSkeleton = styled(Skeleton)(({ theme: { breakpoints } }) => ({
  width: 180,
  height: 180,
  backgroundColor: '#BDBDBD',
  borderRadius: 12.2,

  [breakpoints.down('sm')]: {
    height: 140,
    width: 140
  }
}));
