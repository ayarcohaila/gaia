import { useState, useRef } from 'react';
import { Grid, MenuList, ClickAwayListener } from '@mui/material';
import useAuth from '~/hooks/useAuth';
import { useRouter } from 'next/router';
import * as Styled from './styled.js';
import { SearchInput } from '~/components';
import NextLink from 'next/link';

import {
  ArrowDropDown as ArrowDropDownIcon,
  LockOpenOutlined as LockOpenOutlinedIcon
} from '@mui/icons-material';

const MENU_OPTIONS = [
  { label: 'Sports', href: '/sports' },
  { label: 'Movies', href: '/movies' },
  { label: 'Music', href: '/music' },
  { label: 'Pop Culture', href: '/pop-culture' }
];

const Header = () => {
  const menuAnchorRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const { login, user, logout } = useAuth();
  const router = useRouter();

  const handleChangeSearch = ({ target: { value } }) => {
    setSearchQuery(value);
  };

  const toggleUserMenu = () => {
    setOpenUserMenu(prevState => !prevState);
  };

  const navigateToUserProfile = () => {
    toggleUserMenu();
    router.push(`/profile/${user?.addr}`);
  };

  const handleLogout = () => {
    toggleUserMenu();
    logout();
  };

  const handleListKeyDown = event => {
    if (event.key === 'Escape') {
      setOpenUserMenu(false);
    }
  };

  return (
    <Styled.HeaderBar position="static">
      <Styled.Container component="section">
        <NextLink href="/">
          <Styled.Logo>Gaia</Styled.Logo>
        </NextLink>
        {/* TODO: Remove "hidden" when implement the routes redirection */}
        <Grid component="nav" hidden>
          <Styled.MenuOptionList component="ul">
            {MENU_OPTIONS.map(option => (
              <Grid key={option.label} item component="li">
                <Styled.MenuOption href={option.href}>{option.label}</Styled.MenuOption>
              </Grid>
            ))}
            {MENU_OPTIONS.length > 4 && (
              <Styled.MoreButton disableRipple variant="text" endIcon={<ArrowDropDownIcon />}>
                More
              </Styled.MoreButton>
            )}
          </Styled.MenuOptionList>
        </Grid>
        <Styled.SearchWrapper>
          <SearchInput value={searchQuery} onChange={handleChangeSearch} />
        </Styled.SearchWrapper>
        <Styled.CustomButton $isBlack variant="contained">
          Sell NFT
        </Styled.CustomButton>
        {user?.loggedIn ? (
          <Styled.AvatarButton
            ref={menuAnchorRef}
            disableRipple
            variant="text"
            onClick={toggleUserMenu}>
            <Styled.UserAvatar alt="User Icon" />
            <Styled.AvatarMoreIcon $rotate={!!openUserMenu} />
          </Styled.AvatarButton>
        ) : (
          <Styled.CustomButton variant="contained" onClick={login}>
            Sign in
          </Styled.CustomButton>
        )}
        <Styled.UserMenu
          anchorEl={menuAnchorRef?.current}
          open={openUserMenu}
          onClose={toggleUserMenu}>
          <Styled.CustomPaper>
            <ClickAwayListener onClickAway={toggleUserMenu}>
              <MenuList autoFocus onKeyDown={handleListKeyDown}>
                <Styled.CustomMenuItem onClick={navigateToUserProfile}>
                  Profile
                </Styled.CustomMenuItem>
                <Styled.CustomMenuItem $isSignOut onClick={handleLogout}>
                  <LockOpenOutlinedIcon fontSize="12px" />
                  Sign Out
                </Styled.CustomMenuItem>
              </MenuList>
            </ClickAwayListener>
          </Styled.CustomPaper>
        </Styled.UserMenu>
      </Styled.Container>
    </Styled.HeaderBar>
  );
};

export default Header;
