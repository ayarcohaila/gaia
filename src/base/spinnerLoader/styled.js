import { Grid, Typography, styled } from '@mui/material';

export const Container = styled(Grid)(() => ({
  display: 'flex',
  gap: '12px',
  alignItems: 'center'
}));

export const Text = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.grey[600],
  fontSize: '16px',
  fontWeight: 'bold',
  letterSpacing: 0
}));
