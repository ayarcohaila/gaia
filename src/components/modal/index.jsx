import { memo, useState } from 'react';
import {
  Fade,
  IconButton,
  Modal as MuiModal,
  SwipeableDrawer,
  Grid,
  CircularProgress,
  useTheme,
  Dialog
} from '@mui/material';

import { Close as CloseIcon, KeyboardArrowDown as ArrowDownIcon } from '@mui/icons-material';
import { Global } from '@emotion/react';
import PropTypes from 'prop-types';

import { useBreakpoints } from '~/hooks';

import { DRAWER_MODAL_PROPS, MODAL_BACKDROP_PROPS } from './constants';
import * as Styled from './styles';

export const DRAWER_BLEEDING = 56;

const Modal = ({
  arrowSx,
  asset,
  children,
  containerProps,
  contentSx,
  description,
  descriptionSx,
  height,
  mobileHeight,
  open,
  onClose,
  shouldRenderSwiperOnMobile,
  title,
  titleSx,
  disableCloseButton,
  ...props
}) => {
  const { isSmallDevice } = useBreakpoints();
  const {
    palette: { grey }
  } = useTheme();

  const [imgLoaded, setImgLoaded] = useState(false);

  const handleLoad = () => {
    setImgLoaded(true);
  };

  const renderContent = () => (
    <Styled.Container mobileHeight={mobileHeight}>
      <Styled.Content height={isSmallDevice ? mobileHeight : height} {...containerProps}>
        {isSmallDevice && (
          <IconButton
            onClick={onClose}
            sx={{ position: 'absolute', left: '50%', marginLeft: '-24px', top: -135, ...arrowSx }}>
            <ArrowDownIcon sx={{ color: grey[375], fontSize: 32 }} />
          </IconButton>
        )}
        {asset?.img && (
          <>
            {!imgLoaded ? (
              <Styled.AssetContainer>
                <Styled.AssetSkeleton animation="wave" variant="rectangular" />
              </Styled.AssetContainer>
            ) : undefined}
            <Styled.AssetContainer display={!imgLoaded && 'none'}>
              <Grid sx={{ display: !imgLoaded && 'none', position: 'relative' }}>
                <Styled.Asset
                  alt={title}
                  layout="fill"
                  src={asset?.img}
                  onLoad={() => handleLoad()}
                />
              </Grid>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '12.2px',
                  background: grey[375],
                  display: imgLoaded && 'none'
                }}>
                <CircularProgress size={32} color="white" />
              </Grid>
            </Styled.AssetContainer>
          </>
        )}
        <Styled.InfoContainer sx={contentSx}>
          {!!title && (
            <Styled.Title id={title} sx={titleSx}>
              {title}
            </Styled.Title>
          )}
          {!!description && (
            <Styled.Description id={description} sx={descriptionSx}>
              {description}
            </Styled.Description>
          )}
          {children}
        </Styled.InfoContainer>
        {!isSmallDevice && !disableCloseButton && (
          <Styled.CloseButton startIcon={<CloseIcon sx={{ color: '#bcbfc8' }} />} onClick={onClose}>
            Close Window
          </Styled.CloseButton>
        )}
      </Styled.Content>
    </Styled.Container>
  );

  if (isSmallDevice) {
    if (shouldRenderSwiperOnMobile) {
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
      </>;
    }
    return (
      <Dialog open={open} onClose={onClose} fullScreen>
        {renderContent()}
      </Dialog>
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
  arrowSx: PropTypes.object,
  asset: PropTypes.object,
  children: PropTypes.node,
  containerProps: PropTypes.object,
  contentSx: PropTypes.object,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  descriptionSx: PropTypes.object,
  disableCloseButton: PropTypes.bool,
  height: PropTypes.string,
  mobileHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  titleSx: PropTypes.object,
  shouldRenderSwiperOnMobile: PropTypes.bool
};

Modal.defaultProps = {
  arrowSx: {},
  asset: {
    img: 'https://pbs.twimg.com/media/FA87bFnVEAE6iKc.jpg'
  },
  children: null,
  containerProps: {},
  contentSx: {},
  description: '',
  descriptionSx: {},
  disableCloseButton: false,
  height: '358px',
  mobileHeight: '58vh',
  shouldRenderSwiperOnMobile: true,
  title: '',
  titleSx: {}
};

export default memo(Modal);
