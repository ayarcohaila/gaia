import { Grid, Avatar } from '@mui/material';
import { Verified } from '@mui/icons-material';
import { styled } from '~/themes/styled';

export const Container = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%'
}));

export const Collection = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center'
}));

export const CollectionInforAvatar = styled(Avatar)(({ theme }) => ({
  height: '48px',
  width: '48px',

  [theme.breakpoints.down('md')]: {
    height: '56px',
    width: '56px'
  }
}));

export const VerifiedIcon = styled(Verified)(() => ({
  height: '16px',
  width: '16px'
}));
