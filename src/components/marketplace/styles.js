import { Grid, Button, styled, Typography } from '@mui/material';

export const GridResultNotFound = styled(Grid)(() => ({
  width: '100%',
  textAlign: 'center',
  marginTop: '96px'
}));

export const GridRenderList = styled(Grid, {
  shouldForwardProp: prop => !['showFilter', 'isMediumDevice'].includes(prop)
})(({ showFilter, isMediumDevice, theme }) => ({
  display: 'grid',
  gap: '16px',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignContent: 'baseline',
  width: !showFilter || isMediumDevice ? '100%' : 'auto',

  [theme.breakpoints.up('lg')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))'
  },

  [theme.breakpoints.down('lg')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)'
  },

  [theme.breakpoints.down('sm')]: {
    display: 'grid',
    gridTemplateColumns: '1fr'
  }
}));

export const GridLoadMore = styled(Grid)(() => ({
  margin: '32px 0 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const TypographyResultNotFound = styled(Typography)(({ theme: { palette } }) => ({
  fontSize: '20px',
  width: '100%',
  color: palette.grey[600]
}));

export const BlackButton = styled(Button)(({ theme: { typography, palette } }) => ({
  ...typography.subtitle1,
  padding: '16px 22px',
  height: '48px',
  borderRadius: '24px',
  color: 'white',
  fontSize: '14px',
  fontWeight: 'bold',
  textTransform: 'unset',
  lineHeight: '1.14',
  letterSpacing: '0.2px',
  backgroundColor: 'black',
  margin: 0,

  '&:hover': {
    backgroundColor: palette.grey[600]
  }
}));

export const Wrapper = styled(Grid, { shouldForwardProp: props => props !== 'showFilter' })(
  ({ theme, showFilter }) => ({
    display: !showFilter ? 'flex' : 'grid',
    gridTemplateColumns: '302px auto',
    padding: '0 40px',
    boxSizing: 'border-box',
    width: '100%',
    gap: '22px',
    margin: '0 auto',
    minHeight: '350px',

    [theme.breakpoints.down('md')]: {
      padding: '0 20px',
      display: 'flex',
      flexDirection: 'column',
      marginTop: '24px'
    }
  })
);

export const Container = styled(Grid)(({ theme: { breakpoints } }) => ({
  padding: '0 40px',
  boxSizing: 'border-box',

  [breakpoints.down('md')]: {
    padding: '0 20px'
  }
}));
