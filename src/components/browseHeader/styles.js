import { Typography, styled, Button } from '@mui/material';

export const Text = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.grey[600],
  fontSize: '13px'
}));

export const Container = styled('div', { shouldForwardProp: prop => prop !== 'withBorder' })(
  ({ withBorder, theme: { palette } }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: withBorder ? `2px solid ${palette.grey[300]}` : 'none'
  })
);

export const MainConteiner = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: '1800px',
  padding: '16px 80px 20px',
  [theme.breakpoints.down('sm')]: {
    padding: '0 20px'
  }
}));

export const ContainerItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const CustomButton = styled(Button, { shouldForwardProp: prop => prop !== 'active' })(
  ({ active, theme: { palette } }) => ({
    margin: '0',
    padding: '10px 0 10px 10px',
    svg: {
      color: active ? palette.white.main : palette.grey[400]
    },

    backgroundColor: active && palette.primary.main,

    p: {
      fontWeight: 'bold',
      textTransform: 'none',
      color: active && palette.white.main
    }
  })
);

export const Divider = styled('div')(({ theme }) => ({
  height: '20px',
  width: '2px',
  backgroundColor: theme.palette.grey[300],
  margin: '0 8px'
}));
