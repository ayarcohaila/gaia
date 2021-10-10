import { Paper, MenuItem, styled } from '@mui/material';

export const CustomPaper = styled(Paper)(() => ({
  padding: '12px',
  boxSizing: 'border-box',
  boxShadow: '0 6px 12px 0 rgba(33, 34, 35, 0.08)',
  borderRadius: '16px',
  marginTop: '8px'
}));

export const CustomMenuItem = styled(MenuItem, {
  shouldForwardProp: prop => prop !== 'isRed'
})(({ theme: { typography, palette }, isRed }) => ({
  ...typography.subtitle1,
  color: palette.grey[500],
  height: '40px',
  fontWeight: 'bold',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',

  '&:hover, &:focus': {
    color: isRed ? palette.error.main : palette.grey[700],
    backgroundColor: isRed && palette.error.hover
  }
}));
