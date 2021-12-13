import { styled } from '@mui/material';

export const Container = styled('div', {
  shouldForwardProp: prop => prop !== 'active' && prop !== 'pageHeight'
})(({ active, pageHeight }) => ({
  position: 'absolute',
  display: !active && 'none',
  width: '100%',
  height: pageHeight,
  zIndex: '1',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: 'rgba(0,0,0,.5)'
}));
