import { Grid, AppBar, Link, Button, Avatar, IconButton, styled } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Container = styled(Grid, { shouldForwardProp: prop => prop !== 'isMobile' })(
  ({ isMobile }) => ({
    width: '100%',
    height: isMobile ? '72px' : '80px',
    padding: isMobile ? '20px' : '20px 80px',
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box'
  })
);

export const HeaderBar = styled(AppBar)(({ theme: { palette } }) => ({
  backgroundColor: palette.grey[200],
  boxShadow: 'none'
}));

export const MenuOptionList = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  gap: '12px'
}));

export const MenuOption = styled(Link)(({ theme: { typography, palette } }) => ({
  ...typography.h6,
  fontWeight: 'bold',
  color: palette.secondary.main,
  textDecoration: 'none',
  '&:hover': {
    color: palette.secondary.main
  }
}));

export const MoreButton = styled(Button)(({ theme: { typography, palette } }) => ({
  ...typography.h6,
  color: palette.secondary.main,
  fontWeight: 'bold',
  textTransform: 'unset',

  '&:hover': {
    backgroundColor: 'transparent'
  }
}));

export const CustomButton = styled(Button, {
  shouldForwardProp: prop => prop !== 'isBlack' && prop !== 'headerModal'
})(({ theme: { typography, palette }, isBlack, headerModal }) => ({
  ...typography.subtitle1,
  marginLeft: headerModal ? 0 : '12px',
  borderRadius: '20px',
  height: '40px',
  backgroundColor: isBlack && 'black',
  fontWeight: headerModal ? 400 : 'bold',
  textTransform: 'unset',
  letterSpacing: '0.2px',
  width: headerModal && '100%',

  '&:hover': {
    backgroundColor: isBlack ? palette.grey[600] : palette.primary.hover
  }
}));

export const SearchWrapper = styled(Grid)(() => ({
  marginLeft: 'auto',
  position: 'relative'
}));

export const AvatarButton = styled(Button)(() => ({
  marginLeft: '12px',
  backgroundColor: 'transparent',
  padding: 0,
  display: 'flex',
  alignItems: 'center',

  '&:hover': {
    backgroundColor: 'transparent'
  }
}));

export const UserAvatar = styled(Avatar)(({ theme: { palette } }) => ({
  backgroundColor: palette.primary.main,
  height: '40px'
}));

export const AvatarMoreIcon = styled(ArrowDropDownIcon, {
  shouldForwardProp: prop => prop !== 'rotate'
})(({ theme: { palette }, rotate }) => ({
  color: palette.grey[500],
  transform: rotate && 'rotate(180deg)'
}));

export const MobileMenuButton = styled(IconButton)(({ theme: { palette } }) => ({
  color: palette.grey[600],
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  boxSizing: 'border-box',
  border: `2px solid ${palette.grey[350]}`,
  marginLeft: 'auto',

  '& > svg': {
    height: '18px'
  },

  '&:hover': {
    backgroundColor: 'transparent'
  }
}));

export const ButtonText = styled(Button)(({ theme: { palette } }) => ({
  fontSize: '24px',
  padding: 0,
  color: palette.secondary.main,
  fontWeight: 400,
  textTransform: 'unset',
  letterSpacing: '0.2px',
  width: '100%'
}));

export const LogoImage = styled(Link)(() => ({
  cursor: 'pointer'
}));
