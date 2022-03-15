import { Grid, Button, Tab } from '@mui/material';
import { styled } from '~/themes/styled';

export const TabPanel = styled('div')(() => ({}));

export const StyledTab = styled(Tab, { shouldForwardProp: props => props !== 'isSelected' })(
  ({ theme, isSelected }) => ({
    '&&': {
      textTransform: 'none',
      ...theme.typography.h5
    }
  })
);

export const TabsContentContainer = styled(Grid)(({ theme: { breakpoints } }) => ({
  padding: '10px 0',
  [breakpoints.down('xl')]: {
    paddingTop: '30px'
  },
  [breakpoints.down('md')]: {
    paddingTop: '20px'
  },

  boxSizing: 'border-box'
}));
