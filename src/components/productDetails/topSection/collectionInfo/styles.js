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

export const FavoriteButton = styled(Button, { shouldForwardProp: prop => prop !== 'isFavorite' })(
  ({ theme: { palette, breakpoints }, isFavorite }) => ({
    width: '48px',
    minWidth: 'unset',
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: isFavorite ? `${palette.error.main}80` : palette.grey[200],
    cursor: 'pointer',
    color: palette.error.main,

    svg: {
      width: '18px',
      fill: isFavorite ? palette.error.main : palette.grey[600]
    },

    ':hover': {
      border: `2px solid ${palette.error.main}`,
      color: palette.error.main,
      svg: {
        fill: palette.error.main
      }
    },

    [breakpoints.down('md')]: {
      ':hover': {
        backgroundColor: isFavorite ? `${palette.error.main}80` : palette.grey[200],
        border: 'none',
        svg: {
          fill: isFavorite ? palette.error.main : palette.grey[600]
        }
      }
    }
  })
);

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
