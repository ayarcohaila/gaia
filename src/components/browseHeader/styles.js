import { Typography, styled, Button } from '@mui/material';
import { ArrowDropDownRounded as ArrowDropDownRoundedIcon } from '@mui/icons-material';

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
  boxSizing: 'border-box',
  padding: '16px 40px 20px',
  [theme.breakpoints.down('sm')]: {
    padding: '0 20px',
    flexDirection: 'column',
    marginTop: '20px'
  }
}));

export const ContainerItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const CustomButton = styled(Button, { shouldForwardProp: prop => prop !== 'active' })(
  ({ theme: { palette } }) => ({
    margin: '0',
    padding: '10px 10px 10px 10px',
    svg: {
      color: palette.grey[400]
    },
    p: {
      fontWeight: 'bold',
      textTransform: 'none'
    }
  })
);

export const Divider = styled('div')(({ theme }) => ({
  height: '20px',
  width: '2px',
  backgroundColor: theme.palette.grey[300],
  margin: '0 8px'
}));

export const ArrowIcon = styled(ArrowDropDownRoundedIcon)(({ theme: { palette } }) => ({
  color: palette.grey[600]
}));
