import { memo } from 'react';
import { Modal as MuiModal } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const Modal = ({
  asset,
  children,
  containerProps,
  description,
  descriptionSx,
  height,
  open,
  onClose,
  title,
  titleSx,
  ...props
}) => {
  return (
    <MuiModal
      BackdropProps={{
        sx: {
          WebkitBackdropFilter: 'blur(20px)',
          backdropFilter: 'blur(20px)',
          bgcolor: 'rgba(28, 29, 34, 0.94)'
        }
      }}
      open={open}
      onClose={onClose}
      {...props}>
      <Styled.Container>
        <Styled.Content height={height} {...containerProps}>
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
          <Styled.CloseButton startIcon={<CloseIcon sx={{ color: '#bcbfc8' }} />} onClick={onClose}>
            Close Window
          </Styled.CloseButton>
        </Styled.Content>
      </Styled.Container>
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
  open: false,
  title: '',
  titleSx: {}
};

export default memo(Modal);
