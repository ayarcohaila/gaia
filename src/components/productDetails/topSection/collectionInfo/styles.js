import { Grid, Button, Avatar, styled } from '@mui/material';
import { Verified } from '@mui/icons-material';

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

export const FavoriteButton = styled(Button)(({ theme: { palette } }) => ({
  width: '48px',
  minWidth: 'unset',
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: palette.grey[200],
  cursor: 'pointer',

  svg: {
    width: '18px',
    fill: palette.grey[600]
  },

  ':hover': {
    backgroundColor: `${palette.error.main}80`,
    svg: {
      fill: palette.error.main
    }
  }
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
