import {
  styled,
  Box,
  Grid as GridMui,
  Button as MuiButton,
  Typography,
  Divider as MuiDivider
} from '@mui/material';

export const ContainerMobile = styled(GridMui)(({ theme: { breakpoints } }) => ({
  [breakpoints.down('md')]: {
    display: 'flex'
  },
  display: 'none'
}));

export const ContainerDesktop = styled(GridMui)(({ theme: { breakpoints } }) => ({
  [breakpoints.down('md')]: {
    display: 'none'
  },
  display: 'flex'
}));

export const Grid = styled(GridMui)(({ theme: { breakpoints } }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
}));
