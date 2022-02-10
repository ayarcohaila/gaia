import { Grid, Button, styled, Tab } from '@mui/material';

export const TabPanel = styled('div')(() => ({}));

export const LoadMoreWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
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
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    padding: '0 40px',
    marginTop: '10px'
  },

  [theme.breakpoints.down('lg')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    padding: '0 20px',
    marginTop: '10px'
  },

  [theme.breakpoints.down('md')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    padding: '0',
    marginTop: '10px'
  },

  [theme.breakpoints.down('sm')]: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    padding: '0',
    marginTop: '5px'
  }
}));

export const StyledTab = styled(Tab, { shouldForwardProp: props => props !== 'isSelected' })(
  ({ theme, isSelected }) => ({
    '&&': {
      color: theme.palette.grey[600],
      textTransform: 'none'
    }
  })
);
