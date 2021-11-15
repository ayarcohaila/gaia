import { Box, IconButton, styled } from '@mui/material';

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
    margin: '0 auto 16px',
    height: $height[2],
    width: $width[2]
  },

  [breakpoints.down('sm')]: {
    margin: '0 auto',
    height: $height[3],
    width: $width[3]
  }
}));

export const Video = styled('video')(() => ({
  borderRadius: '16px',
  height: '100%',
  objectFit: 'cover',
  width: '100%'
}));

export const PlayButton = styled(IconButton)(
  ({
    theme: {
      breakpoints,
      palette: { grey, secondary }
    }
  }) => ({
    backgroundColor: secondary.main,
    borderRadius: '10px',
    bottom: '20px',
    left: '20px',
    padding: '27px 25px 26px',
    position: 'absolute',

    '&:hover': {
      backgroundColor: grey[700]
    },

    [breakpoints.down('md')]: {
      padding: '20px 23px 19px'
    },

    [breakpoints.down('sm')]: {
      padding: '17px 15px 16px'
    }
  })
);
