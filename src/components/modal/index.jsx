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
  open,
  onClose,
  title,
  ...props
}) => {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      aria-labelledby={title}
      aria-describedby={description}
      {...props}>
      <Styled.Container>
        <Styled.Content {...containerProps}>
          <Styled.AssetContainer>
            <Styled.Asset alt={title} layout="fill" src={asset} />
          </Styled.AssetContainer>
          <Styled.InfoContainer>
            <Styled.Title id={title}>{title}</Styled.Title>
            <Styled.Description id={description}>{description}</Styled.Description>
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
  asset: PropTypes.string,
  children: PropTypes.node,
  containerProps: PropTypes.object,
  description: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string
};

Modal.defaultProps = {
  asset: 'https://pbs.twimg.com/media/FA87bFnVEAE6iKc.jpg',
  children: null,
  containerProps: {},
  description: 'Enter sale price in FLOW',
  open: false,
  title: 'Sell NFT'
};

export default memo(Modal);
