import { styled, Grid, Typography } from '@mui/material';

export const Title = styled(Typography)(({ theme: { palette, breakpoints } }) => ({
  fontSize: '20px',
  fontWeight: 'bold',
  lineHeight: '1.2',
  letterSpacing: '0.2px',
  color: palette.grey[550],

  [breakpoints.down('md')]: {
    fontSize: '18px',
    lineHeight: '1.33'
  }
}));

export const Container = styled(Grid)(({ theme: { breakpoints } }) => ({
  padding: '0 80px',
  boxSizing: 'border-box',

  [breakpoints.down('md')]: {
    flexWrap: 'nowrap',
    padding: '0 20px'
  }
}));

export const ListContainer = styled(Grid)(() => ({
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap',
  justifyContent: 'center'
}));

export const ContainerHeader = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '20px'
}));

export const LinkContent = styled(Grid)(({ theme: { palette, breakpoints } }) => ({
  display: 'flex',
  alignItems: 'center',
  color: palette.primary.main,

  '& > a': {
    color: palette.primary.main,
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: 1.14,
    letterSpacing: '0.2px'
  },

  '& > svg': {
    width: '18px',
    marginTop: '2px'
  },

  [breakpoints.down('sm')]: {
    marginTop: '16px'
  }
}));
