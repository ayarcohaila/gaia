import { Button, styled } from '@mui/material';

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
