import { styled, Grid } from '@mui/material';

export const CustomGrid = styled(Grid)(({ theme: { breakpoints } }) => ({
  [breakpoints.down('mdx')]: {
    flexBasis: '100%',
    flexGrow: '0',
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));
