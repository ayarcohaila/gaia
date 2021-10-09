import { Grid, Typography, Button, styled } from '@mui/material';
import {
  BurstMode as BurstModeIcon,
  ArrowDropDown as ArrowDropDownIcon
} from '@mui/icons-material';

const fontStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  lineHeight: '1.14',
  letterSpacing: '0.2px'
};

export const Wrapper = styled(Grid)(() => ({
  width: '100%',
  borderSizing: 'border-box',
  display: 'flex',
  justifyContent: 'space-between'
}));

export const Text = styled(Typography)(({ theme: { palette } }) => ({
  ...fontStyle,
  color: palette.grey[600]
}));

export const Container = styled(Grid, { shouldForwardProp: prop => prop !== 'space' })(
  ({ space }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: space && '12px'
  })
);

export const BurstIcon = styled(BurstModeIcon)(({ theme: { palette } }) => ({
  transform: 'scaleX(-1)',
  width: '20px',
  color: palette.grey[600],
  marginRight: '6px'
}));

export const ArrowIcon = styled(ArrowDropDownIcon)(({ theme: { palette } }) => ({
  width: '18px',
  color: palette.grey[600]
}));

export const OutlineButton = styled(Button, { shouldForwardProp: prop => prop !== 'isSelected' })(
  ({ theme: { palette }, isSelected }) => ({
    ...fontStyle,
    height: '48px',
    padding: '16px 24px 16px 22px',
    boxSizing: 'border-box',
    borderRadius: '28px',
    border: `solid 2px ${isSelected ? palette.grey[100] : palette.grey[350]}`,
    color: isSelected ? palette.grey[700] : palette.grey[600],
    backgroundColor: isSelected ? palette.grey[100] : 'transparent',
    textTransform: 'capitalize',

    '& > span': {
      marginLeft: '30px',
      '& > svg': {
        color: isSelected && palette.primary.main
      }
    }
  })
);

export const OrderButton = styled(Button, { shouldForwardProp: prop => prop !== 'isSelected' })(
  ({ theme: { palette }, isSelected }) => ({
    ...fontStyle,
    color: palette.grey[600],
    padding: '8px 6px',
    boxSizing: 'border-box',
    textTransform: 'capitalize',
    backgroundColor: isSelected && palette.grey[300],

    '& > span': {
      marginLeft: '2px'
    },

    '&:hover': {
      backgroundColor: palette.grey[300]
    }
  })
);
