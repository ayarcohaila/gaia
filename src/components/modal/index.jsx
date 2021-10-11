import { memo } from 'react';
import { Fade, IconButton, Modal as MuiModal, SwipeableDrawer, useTheme } from '@mui/material';
import { Close as CloseIcon, KeyboardArrowDown as ArrowDownIcon } from '@mui/icons-material';
import { Global } from '@emotion/react';
import PropTypes from 'prop-types';

import useBreakpoints from '~/hooks/useBreakpoints';
import * as Styled from './styles';
import { DRAWER_MODAL_PROPS, MODAL_BACKDROP_PROPS } from './constants';

export const DRAWER_BLEEDING = 56;

const Modal = ({
  asset,
  children,
  containerProps,
  description,
  descriptionSx,
  height,
  mobileHeight,
  open,
  onClose,
  title,
  titleSx,
  ...props
}) => {
  const { isSmallDevice } = useBreakpoints();
  const {
    palette: { grey }
  } = useTheme();

  const renderContent = () => (
    <Styled.Container mobileHeight={mobileHeight}>
      <Styled.Content height={isSmallDevice ? mobileHeight : height} {...containerProps}>
        {isSmallDevice && (
          <IconButton
            onClick={onClose}
            sx={{ position: 'absolute', left: '50%', marginLeft: '-16px', top: -120 }}>
            <ArrowDownIcon sx={{ color: grey[375], fontSize: 32 }} />
          </IconButton>
        )}
        <Styled.AssetContainer>
          <Styled.Asset alt={title} layout="fill" src={asset?.image} />
        </Styled.AssetContainer>
        <Styled.InfoContainer>
          <Styled.Title id={title} sx={titleSx}>
            {title}
          </Styled.Title>
          <Styled.Description id={description} sx={descriptionSx}>
            {description}
          </Styled.Description>
          {children}
        </Styled.InfoContainer>
        {!isSmallDevice && (
          <Styled.CloseButton startIcon={<CloseIcon sx={{ color: '#bcbfc8' }} />} onClick={onClose}>
            Close Window
          </Styled.CloseButton>
        )}
      </Styled.Content>
    </Styled.Container>
  );

  if (isSmallDevice) {
    return (
      <>
        <Global
          styles={{
            '.MuiDrawer-root > .MuiPaper-root': {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              overflow: 'visible'
            }
          }}
        />
        <SwipeableDrawer
          anchor="bottom"
          open={open}
          onClose={onClose}
          onOpen={onClose}
          disableSwipeToOpen={false}
          ModalProps={DRAWER_MODAL_PROPS}>
          {renderContent()}
        </SwipeableDrawer>
      </>
    );
  }

  return (
    <MuiModal BackdropProps={MODAL_BACKDROP_PROPS} open={open} onClose={onClose} {...props}>
      <Fade in={open} timeout={{ enter: 1000, exit: 750 }}>
        {renderContent()}
      </Fade>
    </MuiModal>
  );
};

Modal.propTypes = {
  asset: PropTypes.object,
  children: PropTypes.node,
  containerProps: PropTypes.object,
  description: PropTypes.string,
  descriptionSx: PropTypes.object,
  height: PropTypes.string,
  mobileHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  titleSx: PropTypes.object
};

Modal.defaultProps = {
  asset: {
    image: 'https://pbs.twimg.com/media/FA87bFnVEAE6iKc.jpg'
  },
  children: null,
  containerProps: {},
  description: '',
  descriptionSx: {},
  height: '358px',
  mobileHeight: '58vh',
  title: '',
  titleSx: {}
};

export default memo(Modal);
