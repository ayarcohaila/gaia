import { styled, Link } from '@mui/material';

export const CustomLink = styled(Link)(({ theme: { palette } }) => ({
  textDecoration: 'none',
  color: palette.primary.main,
  cursor: 'pointer'
}));
