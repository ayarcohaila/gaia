import { Grid, Button, Tab, Typography } from '@mui/material';
import { styled } from '~/themes/styled';
export const TabPanel = styled('div')(() => ({}));

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
    marginTop: '30px'
  },

  [theme.breakpoints.up('xl')]: {
    marginTop: '10px'
  },

  [theme.breakpoints.down('xl')]: {
    padding: '0 5.55%'
  },

  [theme.breakpoints.down('lg')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    marginTop: '30px',
    padding: '0 5.55%'
  },

  [theme.breakpoints.down('md')]: {
    marginTop: '20px',
    padding: '0 20px'
  },

  [theme.breakpoints.down('sm')]: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    marginTop: '20px'
  }
}));

export const FiltersContainer = styled(Grid)(({ theme: { breakpoints } }) => ({
  padding: '20px 80px',
  boxSizing: 'border-box',

  [breakpoints.down('xl')]: {
    padding: '0 5.55%'
  },

  [breakpoints.down('sm')]: {
    padding: '0 20px'
  }
}));

export const EmptyContainer = styled(Grid)(({ theme: { breakpoints } }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '300px',
  padding: '0 20px',
  boxSizing: 'border-box',
  [breakpoints.down('sm')]: {
    textAlign: 'center'
  }
}));

export const EmptyText = styled(Typography)(({ theme: { typography } }) => ({
  ...typography.body1,
  fontSize: '20px',
  lineHeight: '1.5rem'
}));
