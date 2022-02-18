import { Grid, Button, styled } from '@mui/material';

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
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    padding: '0 80px',
    marginTop: '40px'
  },

  [theme.breakpoints.down('xl')]: {
    padding: '0 5.55%'
  },

  [theme.breakpoints.down('lg')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    marginTop: '40px',
    padding: '0 5.55%'
  },

  [theme.breakpoints.down('md')]: {
    padding: '0 20px'
  },

  [theme.breakpoints.down('sm')]: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    marginTop: '20px'
  }
}));

export const FiltersContainer = styled(Grid)(({ theme: { breakpoints } }) => ({
  padding: '0 80px',
  boxSizing: 'border-box',

  [breakpoints.down('xl')]: {
    padding: '0 5.55%'
  },

  [breakpoints.down('sm')]: {
    padding: '0 20px'
  }
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
