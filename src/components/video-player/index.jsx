/* eslint-disable jsx-a11y/media-has-caption */
import { memo, useEffect, useRef, useState } from 'react';
import {
  Pause as PauseIcon,
  PlayArrow as PlayIcon,
  VolumeOff as MutedIcon,
  VolumeUp as SoundIcon
} from '@mui/icons-material';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const VideoPlayer = ({ containerProps, height, poster, src, width, ...props }) => {
  const playerRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const player = playerRef?.current;
    if (player) {
      isPlaying ? player?.play() : player?.pause();
    }
  }, [isPlaying, playerRef]);

  return (
    <Styled.VideoContainer $height={height} $width={width} {...containerProps}>
      <Styled.Video muted={isMuted} poster={poster} ref={playerRef} src={src} {...props}>
        Sorry, your browser have no support to embedded videos.
      </Styled.Video>
      <Styled.ActionsContainer>
        <Styled.PlayButton onClick={() => setIsPlaying(prevState => !prevState)}>
          {isPlaying ? (
            <PauseIcon color="white" fontSize="small" />
          ) : (
            <PlayIcon color="white" fontSize="small" />
          )}
        </Styled.PlayButton>
        <Styled.MuteButton onClick={() => setIsMuted(prevState => !prevState)}>
          {isMuted ? (
            <MutedIcon color="white" fontSize="small" />
          ) : (
            <SoundIcon color="white" fontSize="small" />
          )}
        </Styled.MuteButton>
      </Styled.ActionsContainer>
    </Styled.VideoContainer>
  );
};

VideoPlayer.propTypes = {
  containerProps: PropTypes.object,
  height: PropTypes.arrayOf(PropTypes.string),
  poster: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.arrayOf(PropTypes.string)
};

VideoPlayer.defaultProps = {
  containerProps: {},
  height: ['424px', '380px', '320px', '275px'],
  poster: 'https://images.ongaia.com/ipfs/QmZ6dDfmAzbKq7V37DyUeB8uxbn7yHA4LtP1tyFCwMkF3x/66.png',
  src: 'https://rebelrabbits.io/static/videos/new_cta.mp4',
  width: ['424px', '380px', '320px', '275px']
};

export default memo(VideoPlayer);
