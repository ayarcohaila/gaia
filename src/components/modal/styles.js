import { Box, Button, Typography, styled } from '@mui/material';
import Image from 'next/image';

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

export const AssetContainer = styled(Box)(({ theme: { breakpoints } }) => ({
  backgroundColor: 'transparent',
  boxShadow: '0 26px 14px -24px rgba(17, 17, 23, 0.12), 0 0 14px 0 rgba(0, 0, 0, 0.06)',
  height: 180,
  marginLeft: -90,
  position: 'absolute',
  left: '50%',
  width: 180,
  top: -90,

  [breakpoints.down('sm')]: {
    height: 160,
    marginLeft: -80,
    width: 160
  }
}));

export const Asset = styled(Image)(() => ({
  borderRadius: 12.2,
  boxShadow: '0 26px 14px -24px rgba(17, 17, 23, 0.12), 0 0 14px 0 rgba(0, 0, 0, 0.06)'
}));

export const InfoContainer = styled(Box)(() => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  width: '100%'
}));

export const Title = styled(Typography)(
  ({
    theme: {
      palette: { secondary }
    }
  }) => ({
    color: secondary.main,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: '72px'
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
