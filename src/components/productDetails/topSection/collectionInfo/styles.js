import { Avatar, styled } from '@mui/material';
import { Verified } from '@mui/icons-material';

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
