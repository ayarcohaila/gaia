import { Grid, AppBar, Link, Button, Avatar, Paper, MenuItem, styled } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Container = styled(Grid)(() => ({
  width: '100%',
  height: '80px',
  padding: '20px 80px',
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box'
}));

export const HeaderBar = styled(AppBar)(({ theme: { palette } }) => ({
  backgroundColor: palette.grey[200]
}));

export const Logo = styled(Link)(({ theme: { typography, palette } }) => ({
  fontSize: typography.pxToRem(24),
  color: palette.secondary.main,
  fontWeight: 'bold',
  marginRight: '38px',
  textTransform: 'uppercase',
  textDecoration: 'none',
  cursor: 'pointer',

  '&:hover': {
    color: palette.secondary.main
  }
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

export const CustomButton = styled(Button, { shouldForwardProp: prop => prop !== 'isBlack' })(
  ({ theme: { typography }, isBlack }) => ({
    ...typography.subtitle1,
    marginLeft: '12px',
    borderRadius: '20px',
    height: '40px',
    backgroundColor: isBlack && 'black',
    fontWeight: 'bold',
    textTransform: 'unset'
  })
);

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

export const CustomPaper = styled(Paper)(() => ({
  padding: '12px',
  boxSizing: 'border-box',
  boxShadow: '0 6px 12px 0 rgba(33, 34, 35, 0.08)',
  borderRadius: '16px',
  marginTop: '8px'
}));

export const CustomMenuItem = styled(MenuItem, {
  shouldForwardProp: prop => prop !== 'isSignOut'
})(({ theme: { typography, palette }, isSignOut }) => ({
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
    color: isSignOut ? palette.error.main : palette.grey[700],
    backgroundColor: isSignOut && palette.error.hover
  }
}));
