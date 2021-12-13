import { Grid, Link, styled } from '@mui/material';

export const Container = styled(Grid)(({ theme: { breakpoints, palette } }) => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: palette.white.main,
  borderRadius: '16px',
  margin: '0 auto',
  maxWidth: '1800px',
  padding: '32px',
  width: '100%',
  flexGrow: 1,
  [breakpoints.down('md')]: {
    padding: '20px'
  },
  [breakpoints.down('sm')]: {
    padding: '0px'
  }
}));

export const CustomCard = styled(Grid)(({ theme: { breakpoints } }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '0 50px',
  maxHeight: '100%',
  [breakpoints.down('md')]: {
    padding: '20px'
  }
}));

export const ContentSection = styled(Grid)(({ theme: { breakpoints } }) => ({
  padding: '70px 100px',
  maxWidth: '1800px',
  [breakpoints.down('sm')]: {
    padding: '50px 0px',
    justifyContent: 'center'
  }
}));

export const ContentSectionItem = styled(Grid)(({ theme: { breakpoints } }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',

  [breakpoints.down('md')]: {
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

export const TextContainer = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column'
}));

export const CustomLinkText = styled(Link)(({ theme }) => ({
  ...theme.typography.h5,
  color: theme.palette.black.main,
  textDecoration: 'none',
  fontWeight: 'normal',
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.primary.main
  }
}));
