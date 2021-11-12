import { memo, useCallback, useRef, useState } from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { Pause as PauseIcon, PlayArrow as PlayIcon } from '@mui/icons-material';
import PropTypes from 'prop-types';

import { replaceFileExtension } from '~/utils/string';

const VideoPlayer = ({ containerSx, poster, src }) => {
  const {
    palette: { secondary, grey }
  } = useTheme();
  const playerRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = useCallback(() => {
    setIsPlaying(prevState => !prevState);
    if (!isPlaying) {
      playerRef?.current?.play();
      return;
    }
    playerRef?.current?.pause();
  }, [isPlaying, playerRef]);

  return (
    <Box
      borderRadius="10px"
      height="586px"
      margin="0 auto"
      position="relative"
      width="424px"
      sx={containerSx}>
      <video
        autoPlay={false}
        height="100%"
        width="100%"
        controls={false}
        poster={poster}
        ref={playerRef}
        src={src}>
        <track default kind="captions" srcLang="en" src={replaceFileExtension(src, 'vtt')} />
        Sorry, your browser have no support to embedded videos.
      </video>
      <IconButton
        onClick={handlePlay}
        sx={{
          bgcolor: secondary.main,
          borderRadius: '10px',
          bottom: '16px',
          left: '16px',
          padding: '27px 25px 26px',
          position: 'absolute',
          ':hover': {
            bgcolor: grey[700]
          }
        }}>
        {isPlaying ? (
          <PauseIcon color="white" fontSize="small" />
        ) : (
          <PlayIcon color="white" fontSize="small" />
        )}
      </IconButton>
    </Box>
  );
};

VideoPlayer.propTypes = {
  containerSx: PropTypes.object,
  poster: PropTypes.string,
  src: PropTypes.string
};

VideoPlayer.defaultProps = {
  containerSx: {},
  //TODO: Remove it when finishing the task,
  poster: 'https://images.ongaia.com/ipfs/QmZ6dDfmAzbKq7V37DyUeB8uxbn7yHA4LtP1tyFCwMkF3x/66.png',
  src: 'https://rebelrabbits.io/static/videos/new_cta.mp4'
};

export default memo(VideoPlayer);
