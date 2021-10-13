import { Grid, Typography, Button, IconButton, styled } from '@mui/material';
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

export const Wrapper = styled(Grid, { shouldForwardProp: prop => prop !== 'isMobile' })(
  ({ isMobile }) => ({
    width: '100%',
    borderSizing: 'border-box',
    display: 'flex',
    flexDirection: isMobile ? 'column-reverse' : 'row',
    gap: isMobile && '16px',
    alignItems: 'center',
    justifyContent: 'space-between'
  })
);

export const Text = styled(Typography, { shouldForwardProp: prop => prop !== 'isMobile' })(
  ({ theme: { palette }, isMobile }) => ({
    ...fontStyle,
    color: palette.grey[600],
    ...(isMobile && { fontSize: '13px' })
  })
);

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
    borderRadius: '7px',
    textTransform: 'capitalize',

    '& > span': {
      transform: isSelected && 'rotate(180deg)',
      marginLeft: '2px'
    },

    '&:hover': {
      backgroundColor: palette.grey[300]
    }
  })
);

export const SearchButton = styled(IconButton, {
  shouldForwardProp: prop => prop !== 'isSearching'
})(({ theme: { palette }, isSearching }) => ({
  color: palette.grey[600],
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  boxSizing: 'border-box',
  border: !isSearching && `2px solid ${palette.grey[350]}`,
  marginRight: isSearching && '-15px',

  '&:hover': {
    backgroundColor: isSearching && 'transparent'
  },

  '& > svg': {
    width: '18px',
    height: '18px'
  }
}));
