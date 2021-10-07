import { Grid, AppBar, Link, Button, Avatar, Popper, Paper, MenuItem } from '@mui/material';
import styled from 'styled-components';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Container = styled(Grid)`
  width: 100%;
  height: 80px;
  padding: 20px 80px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

export const HeaderBar = styled(AppBar)`
  background-color: ${({ theme: { palette } }) => palette.grey[200]};
`;

export const Logo = styled(Link)`
  font-size: ${({ theme: { typography } }) => typography.pxToRem(24)};
  color: ${({ theme: { palette } }) => palette.secondary.main};
  font-weight: bold;
  margin-right: 38px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme: { palette } }) => palette.secondary.main};
  }
`;

export const MenuOptionList = styled(Grid)`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 12px;
`;

export const MenuOption = styled(Link)`
  ${({ theme: { typography } }) => typography.h6}
  font-weight: bold;
  color: ${({ theme: { palette } }) => palette.secondary.main};
  text-decoration: none;

  &:hover {
    color: ${({ theme: { palette } }) => palette.secondary.main};
  }
`;

export const MoreButton = styled(Button)`
  ${({ theme: { typography } }) => typography.h6}
  color: ${({ theme: { palette } }) => palette.secondary.main};
  font-weight: bold;
  text-transform: unset;

  &:hover {
    background-color: transparent;
  }

  & > span {
    margin-left: 0;
  }
`;

export const CustomButton = styled(Button)`
  ${({ theme: { typography } }) => typography.subtitle1}
  margin-left: 12px;
  border-radius: 20px;
  height: 40px;
  background-color: ${({ $isBlack }) => $isBlack && 'black'};
  font-weight: bold;
  text-transform: unset;

  &:hover {
    background-color: ${({ theme: { palette }, $isBlack }) =>
      $isBlack ? palette.grey[600] : palette.primary.hover};
  }
`;

export const SearchWrapper = styled(Grid)`
  margin-left: auto;
  position: relative;
`;

export const AvatarButton = styled(Button)`
  margin-left: 12px;
  background-color: transparent;
  padding: 0;
  display: flex;
  align-items: center;

  &:hover {
    background-color: transparent;
  }
`;

export const UserAvatar = styled(Avatar)`
  background-color: ${({ theme: { palette } }) => palette.primary.main};
  height: 40px;
`;

export const AvatarMoreIcon = styled(ArrowDropDownIcon)`
  color: ${({ theme: { palette } }) => palette.grey[500]};
  transform: ${({ rotate }) => rotate && 'rotate(180deg)'};
`;

export const UserMenu = styled(Popper)`
  color: ${({ theme: { palette } }) => palette.grey[500]};
  transform: ${({ rotate }) => rotate && 'rotate(180deg)'};
`;

export const CustomPaper = styled(Paper)`
  padding: 12px;
  box-sizing: border-box;
  box-shadow: 0 6px 12px 0 rgba(33, 34, 35, 0.08);
  border-radius: 16px;
  margin-top: 8px;
`;

export const CustomMenuItem = styled(MenuItem)`
  ${({ theme: { typography } }) => typography.subtitle1}
  color: ${({ theme: { palette } }) => palette.grey[500]};
  height: 40px;
  font-weight: bold;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &:hover,
  &:focus {
    color: ${({ theme: { palette }, $isSignOut }) =>
      $isSignOut ? palette.error.main : palette.grey[700]};
    background-color: ${({ theme: { palette }, $isSignOut }) => $isSignOut && palette.error.hover};
  }
`;
