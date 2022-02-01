import { styled, Box } from '@mui/material';

export const StyledRoundedIconButton = styled(Box)(({ theme: { palette, breakpoints } }) => ({
  backgroundColor: palette.grey[200],
  height: '48px',
  width: '48px',
  border: 'none',
  borderRadius: '24px',
  [breakpoints.down('md')]: {
    marginRight: '10px'
  },

  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    filter: 'brightness(0.95)'
  },

  svg: {
    width: '18px',
    fill: palette.grey[600]
  }
}));
