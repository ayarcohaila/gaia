import { Typography, styled, Button, Grid } from '@mui/material';
import { ArrowDropDownRounded as ArrowDropDownRoundedIcon } from '@mui/icons-material';

export const Text = styled(Typography)(({ theme: { palette } }) => ({
  color: palette.grey[600],
  fontSize: '13px'
}));

export const Container = styled(Grid, {
  shouldForwardProp: prop => !['isSmallDevice', 'isMediumDevice', 'withBorder'].includes(prop)
})(({ withBorder, isSmallDevice, isMediumDevice, theme: { palette } }) => ({
  display: isSmallDevice || isMediumDevice ? 'flex' : 'grid',
  gridTemplateColumns: '302px auto',
  alignItems: 'center',
  padding: isSmallDevice ? 0 : '0 40px',
  boxSizing: 'border-box',
  width: '100%',
  gap: '22px',
  margin: '0 auto',
  borderTop: withBorder ? `2px solid ${palette.grey[300]}` : 'none'
}));

export const MainContainer = styled(Grid, { shouldForwardProp: prop => prop !== 'withCenter' })(
  ({ theme, withCenter }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    boxSizing: 'border-box',
    padding: '16px 0 20px',

    [theme.breakpoints.down('sm')]: {
      padding: '0 20px',
      flexDirection: 'column',
      marginTop: '20px'
    },

    ...(withCenter
      ? {
          display: 'grid',
          gridTemplateColumns: '3fr 1fr'
        }
      : {})
  })
);

export const ContainerItem = styled(Grid, { shouldForwardProp: prop => prop !== 'rightPosition' })(
  ({ rightPosition }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: rightPosition ? 'flex-end' : 'center',
    whiteSpace: 'nowrap'
  })
);
export const CustomButton = styled(Button, { shouldForwardProp: prop => prop !== 'active' })(
  ({ theme: { palette } }) => ({
    margin: '0',
    padding: '10px 10px 10px 10px',
    whiteSpace: 'nowrap',
    svg: {
      color: palette.grey[400]
    },
    p: {
      fontWeight: 'bold',
      textTransform: 'none'
    }
  })
);

export const Divider = styled(Grid)(({ theme }) => ({
  height: '20px',
  width: '2px',
  backgroundColor: theme.palette.grey[300],
  margin: '0 8px'
}));

export const ArrowIcon = styled(ArrowDropDownRoundedIcon)(({ theme: { palette } }) => ({
  color: palette.grey[600]
}));
