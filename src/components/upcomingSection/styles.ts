import { Grid, Typography } from '@mui/material';
import { styled } from '~/themes/styled';

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: '600',
  lineHeight: '1.2',
  letterSpacing: '0.2px',

  color: theme.palette.grey[700],

  [theme.breakpoints.up(1500)]: {
    fontSize: '25px'
  }
}));

export const GridCardContainer = styled(Grid)(() => ({
  gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
  display: 'grid',
  gap: '16px'
}));
