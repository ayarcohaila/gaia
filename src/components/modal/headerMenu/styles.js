import { Drawer, Grid, Button, styled } from '@mui/material';

export const Container = styled(Drawer)(({ theme: { palette } }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: palette.grey[200]
}));

export const Wrapper = styled(Grid)(() => ({
  width: '100vw',
  height: '100vh',
  padding: '20px 10px',
  position: 'relative'
}));

export const CloseButton = styled(Button)(({ theme: { palette } }) => ({
  position: 'absolute',
  top: 20,
  right: 10,
  padding: 0,
  textTransform: 'none',
  color: palette.secondary.main
}));
