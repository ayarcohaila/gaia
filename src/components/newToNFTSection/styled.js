import { Grid, Typography } from '@mui/material';
import { styled } from '~/themes/styled';

export const CustomGrid = styled(Grid)(({ theme: { breakpoints } }) => ({
  [breakpoints.down('mdx')]: {
    flexBasis: '100%',
    flexGrow: '0',
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[650],
  fontSize: '20px',
  fontWeight: '600',
  lineHeight: '1.2',
  letterSpacing: '0.2px',

  [theme.breakpoints.up(1500)]: {
    fontSize: '25px'
  }
}));
