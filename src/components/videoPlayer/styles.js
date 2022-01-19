import { Box, Grid, IconButton, styled } from '@mui/material';

export const VideoContainer = styled(Box, {
  shouldForwardProp: prop => prop !== '$height ' && prop !== '$width'
})(({ $height, $width, theme: { breakpoints } }) => ({
  borderRadius: '10px',
  margin: '0 auto',
  position: 'relative',
  height: $height[0],
  width: $width[0],

  [breakpoints.down(1066)]: {
    height: $height[1],
    width: $width[1]
  },

  [breakpoints.down('md')]: {
    height: $height[2],
    width: $width[2]
  },

  [breakpoints.down('sm')]: {
    margin: '0 auto',
    height: $height[3],
    width: $width[3]
  }
}));

export const Video = styled('video', { shouldForwardProp: props => props !== 'fullscreen' })(
  ({ fullscreen }) => ({
    borderRadius: '16px',
    objectFit: fullscreen ? 'contain' : 'cover',
    height: '100%',
    width: '100%'
  })
);

export const ActionsContainer = styled(Grid)(() => ({
  alignItems: 'center',
  bottom: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'absolute',
  padding: '0 20px',
  width: '100%'
}));

export const Button = styled(IconButton)(
  ({
    theme: {
      breakpoints,
      palette: { grey, secondary }
    }
  }) => ({
    backgroundColor: secondary.main,
    borderRadius: '10px',
    padding: '16px',

    '&:hover': {
      backgroundColor: grey[700]
    },

    [breakpoints.down('md')]: {
      padding: '14px'
    },

    [breakpoints.down('sm')]: {
      padding: '12px'
    }
  })
);
