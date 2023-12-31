import { Grid, styled } from '@mui/material';

const Container = styled(Grid)(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '8px'
}));

const BoxData = styled(Grid)(({ theme: { palette } }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: palette.grey[200],
  borderRadius: '16px',
  padding: '8px 16px',
  boxSizing: 'border-box'
}));

export { Container, BoxData };
