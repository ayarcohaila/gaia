import { Divider, Typography } from '@mui/material';
import { styled } from '~/themes/styled';

export const CardDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.common.white
}));

export const Description = styled(Typography)(() => ({
  opacity: '0.64',
  lineHeight: '1.33',
  letterSpacing: '0.6px'
}));

export const VerticalDivider = styled(Divider)(({ theme }) => ({
  margin: 'auto 20px',
  opacity: '0.25',
  height: '75%',
  background: theme.palette.common.white
}));

export const BurstIcon = styled('img')(() => ({
  width: '25px',
  height: '25px'
}));

export const CollectionIcon = styled('img')(() => ({
  maxWidth: '60%'
}));
