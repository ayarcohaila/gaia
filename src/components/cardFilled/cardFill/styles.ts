import { Avatar, Divider, styled, Typography } from '@mui/material';

export const CardDivider = styled(Divider)(({ theme }) => ({
  height: '2px',
  opacity: '0.16',
  background: theme.palette.common.white
}));

export const Description = styled(Typography)(() => ({
  opacity: '0.64',
  lineHeight: '1.33',
  letterSpacing: '0.6px'
}));

export const AvatarCollection = styled(Avatar)(() => ({
  width: '60px',
  height: '60px'
}));

export const VerticalDivider = styled(Divider)(({ theme }) => ({
  margin: 'auto 20px',
  opacity: '0.25',
  height: '75%',
  background: theme.palette.common.white
}));
