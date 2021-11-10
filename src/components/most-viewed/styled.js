import { styled, Grid, Typography } from '@mui/material';

export const Title = styled(Typography)(({ theme: { palette } }) => ({
  fontSize: '20px',
  fontWeight: 'bold',
  lineHeight: '1.2',
  letterSpacing: '0.2px',
  color: palette.grey[550]
}));

export const Container = styled(Grid)(() => ({
  padding: '80px',
  boxSizing: 'border-box'
}));

export const ListContainer = styled(Grid)(() => ({
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap',
  justifyContent: 'center'
}));

export const ContainerHeader = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '20px'
}));

export const LinkContent = styled(Grid)(({ theme: { palette } }) => ({
  display: 'flex',
  alignItems: 'center',
  color: palette.primary.main,

  '& > a': {
    color: palette.primary.main,
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: 1.14,
    letterSpacing: '0.2px'
  }
}));
