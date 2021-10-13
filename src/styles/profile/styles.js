import { Grid, styled } from '@mui/material';

export const ListWrapper = styled(Grid, { shouldForwardProp: prop => prop !== 'isMobile' })(
  ({ theme: { breakpoints } }) => ({
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoFlow: 'row',
    gap: '24px',
    justifyItems: 'center',
    width: '100%',

    [breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      padding: '0 20px'
    },

    [breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(1, 1fr)'
    }
  })
);
