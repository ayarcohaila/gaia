import { Grid, styled } from '@mui/material';

export const ListWrapper = styled(Grid, { shouldForwardProp: prop => prop !== 'isMobile' })(
  ({ isMobile }) => ({
    padding: isMobile ? '0 20px' : '0 80px',
    boxSizing: 'border-box'
  })
);
