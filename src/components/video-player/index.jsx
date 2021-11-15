/* eslint-disable jsx-a11y/media-has-caption */
import { memo, useEffect, useRef, useState } from 'react';
import { Pause as PauseIcon, PlayArrow as PlayIcon } from '@mui/icons-material';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const VideoPlayer = ({ containerSx, height, poster, src, width }) => {
  const playerRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const player = playerRef?.current;
    if (player) {
      isPlaying ? player?.play() : player?.pause();
    }
  }, [isPlaying, playerRef]);

  return (
    <Styled.VideoContainer $height={height} $width={width} sx={containerSx}>
      <Styled.Video poster={poster} ref={playerRef} src={src}>
        Sorry, your browser have no support to embedded videos.
      </Styled.Video>
      <Styled.PlayButton onClick={() => setIsPlaying(prevState => !prevState)}>
        {isPlaying ? (
          <PauseIcon color="white" fontSize="small" />
        ) : (
          <PlayIcon color="white" fontSize="small" />
        )}
      </Styled.PlayButton>
    </Styled.VideoContainer>
  );
};

VideoPlayer.propTypes = {
  containerSx: PropTypes.object,
  height: PropTypes.arrayOf(PropTypes.string),
  poster: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.arrayOf(PropTypes.string)
};

VideoPlayer.defaultProps = {
  containerSx: {},
  height: ['424px', '380px', '320px', '275px'],
  width: ['424px', '380px', '320px', '275px'],
  //TODO: Remove it when finishing the task,
  poster: 'https://images.ongaia.com/ipfs/QmZ6dDfmAzbKq7V37DyUeB8uxbn7yHA4LtP1tyFCwMkF3x/66.png',
  src: 'https://rebelrabbits.io/static/videos/new_cta.mp4'
};

export default memo(VideoPlayer);
