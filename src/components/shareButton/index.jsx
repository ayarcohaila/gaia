import RoundedIconButton from '~/base/RoundedIconButton';
import IosShareTwoToneIcon from '@mui/icons-material/IosShareTwoTone';
import { toast } from 'react-toastify';

import React, { useEffect, useState } from 'react';

import { StyledContainer } from './styled';
import { Popover } from '@mui/material';

import useBreakpoints from '~/hooks/useBreakpoints';

const ShareButton = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const facebookShareLink = `https://web.facebook.com/sharer.php?u=${currentLocation}&_rdc=1&_rdr`;
  const twitterShareLink = `https://twitter.com/intent/tweet?url=${currentLocation}`;
  const { isMediumDevice } = useBreakpoints();

  useEffect(() => {
    setCurrentLocation(window.location.href);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentLocation);
    toast.success('Link copied!');
  };

  const handleClick = event => {
    setIsShareModalOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setIsShareModalOpen(false);
  };

  const id = isShareModalOpen ? 'popover' : undefined;

  return (
    <>
      <RoundedIconButton aria-describedby={id} onClick={handleClick}>
        <IosShareTwoToneIcon />
      </RoundedIconButton>
      <Popover
        id={id}
        open={isShareModalOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: isMediumDevice ? 'left' : 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: isMediumDevice ? 'left' : 'right'
        }}>
        <StyledContainer open={isShareModalOpen}>
          <ul>
            <li>
              <a href={facebookShareLink} target="_blank" rel="noreferrer noopener">
                <img src="/icons/facebook.webp" alt="facebook" />
                Share on Facebook
              </a>
            </li>
            <li>
              <a href={twitterShareLink} target="_blank" rel="noreferrer noopener">
                <img src="/icons/twitter.svg" alt="twitter" />
                Share on Twitter
              </a>
            </li>
            <li>
              <button onClick={handleCopyLink}>
                <img src="/icons/gaia-icon.png" alt="gaia" />
                Copy Link
              </button>
            </li>
          </ul>
        </StyledContainer>
      </Popover>
    </>
  );
};

export default ShareButton;
