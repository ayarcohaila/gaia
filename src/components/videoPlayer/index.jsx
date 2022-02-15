/* eslint-disable jsx-a11y/media-has-caption */
import { memo, useEffect, useRef, useState } from 'react';
import { Grid } from '@mui/material';
import {
  Pause as PauseIcon,
  PlayArrow as PlayIcon,
  VolumeOff as MutedIcon,
  VolumeUp as SoundIcon,
  Fullscreen as FullscreenIcon,
  FullscreenExit as FullscreenExitIcon
} from '@mui/icons-material';
import PropTypes from 'prop-types';

import useHover from '~/hooks/useHover';
import * as Styled from './styles';

function handleFullscreenChange(setIsFullscreen) {
  const navigators = [
    'fullscreenchange',
    'webkitfullscreenchange',
    'mozfullscreenchange',
    'msfullscreenchange'
  ];
  navigators.forEach(navigator => {
    document.addEventListener(
      navigator,
      function () {
        setIsFullscreen(document.fullscreen);
      },
      false
    );
  });
}

const VideoPlayer = ({ containerProps, height, poster, src, width, ...props }) => {
  const containerRef = useRef();
  const playerRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const isVideoHovered = useHover(containerRef);

  const togglePlay = event => {
    event.stopPropagation();
    setIsPlaying(prevState => !prevState);
  };

  const toggleMute = event => {
    event.stopPropagation();
    setIsMuted(prevState => !prevState);
  };

  const toggleFullscreen = event => {
    event.stopPropagation();
    const player = playerRef?.current;
    if (player.requestFullscreen) {
      player.requestFullscreen();
    } else if (player.webkitRequestFullscreen) {
      player.webkitRequestFullscreen();
    } else if (player.mozRequestFullScreen) {
      player.mozRequestFullScreen();
    } else if (player.webkitEnterFullScreen) {
      player.webkitEnterFullScreen();
    }
    setIsFullscreen(prevState => !prevState);
  };

  useEffect(() => {
    const player = playerRef?.current;
    if (player) {
      isPlaying ? player?.play() : player?.pause();
    }
  }, [isPlaying, playerRef]);

  useEffect(() => {
    handleFullscreenChange(setIsFullscreen);
  }, []);

  return (
    <Styled.VideoContainer $height={height} $width={width} ref={containerRef} {...containerProps}>
      <Styled.Video
        muted={isMuted}
        fullscreen={isFullscreen}
        onEnded={() => setIsPlaying(false)}
        poster={poster}
        ref={playerRef}
        playsInline
        {...props}>
        {!!isPlaying && <source src={src} type="video/mp4" />}
        Sorry, your browser have no support to embedded videos.
      </Styled.Video>
      {((!!isPlaying && isVideoHovered) || !isPlaying) && (
        <Styled.ActionsContainer>
          <Styled.Button aria-label="togglePlay" onClick={togglePlay}>
            {isPlaying ? (
              <PauseIcon color="white" fontSize="small" />
            ) : (
              <PlayIcon color="white" fontSize="small" />
            )}
          </Styled.Button>
          <Grid container justifyContent="flex-end" sx={{ gap: '12px' }}>
            <Styled.Button aria-label="toggleMute" onClick={toggleMute}>
              {isMuted ? (
                <MutedIcon color="white" fontSize="small" />
              ) : (
                <SoundIcon color="white" fontSize="small" />
              )}
            </Styled.Button>

            <Styled.Button aria-label="toggleFullscreen" onClick={toggleFullscreen}>
              {isFullscreen ? (
                <FullscreenExitIcon color="white" fontSize="small" />
              ) : (
                <FullscreenIcon color="white" fontSize="small" />
              )}
            </Styled.Button>
          </Grid>
        </Styled.ActionsContainer>
      )}
    </Styled.VideoContainer>
  );
};

VideoPlayer.propTypes = {
  containerProps: PropTypes.object,
  height: PropTypes.arrayOf(PropTypes.string),
  poster: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.arrayOf(PropTypes.string)
};

VideoPlayer.defaultProps = {
  containerProps: {},
  height: ['100%', '100%', '100%', '100%'],
  poster: null,
  width: ['424px', '380px', '320px', '275px']
};

export default memo(VideoPlayer);
