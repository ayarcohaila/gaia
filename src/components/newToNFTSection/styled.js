import { Grid, Typography } from '@mui/material';
import { styled } from '~/themes/styled';

export const Container = styled(Grid)(({ theme }) => ({
  margin: '40px 5px 0',

  [theme.breakpoints.up('md')]: {
    margin: '40px 32px 0'
  }
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: '600',
  lineHeight: '1.2',
  letterSpacing: '0.2px',
  marginBottom: '30px',
  color: theme.palette.grey[700],

  [theme.breakpoints.up(1500)]: {
    fontSize: '25px'
  }
}));
