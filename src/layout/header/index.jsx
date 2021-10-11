import { useState, useRef } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Grid } from '@mui/material';
import { ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';

import useAuth from '~/hooks/useAuth';
import { Dropdown, SearchInput } from '~/base';
import useBreakpoints from '~/hooks/useBreakpoints.js';

import { MENU_OPTIONS, USER_MENU_IDS, USER_MENU_OPTIONS } from './constants';
import * as Styled from './styles.js';

const Header = () => {
  const menuAnchorRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const { login, user, logout } = useAuth();
  const { isMediumDevice } = useBreakpoints();
  const router = useRouter();

  const handleChangeSearch = ({ target: { value } }) => {
    setSearchQuery(value);
  };

  const toggleUserMenu = () => {
    setOpenUserMenu(prevState => !prevState);
  };

  const handleClick = ({
    target: {
      dataset: { id }
    }
  }) => {
    toggleUserMenu();
    if (id === USER_MENU_IDS.PROFILE) {
      router.push(`/profile/${user?.addr}`);
    } else {
      logout();
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
        {!isMediumDevice && (
          <Styled.SearchWrapper>
            <SearchInput value={searchQuery} onChange={handleChangeSearch} />
          </Styled.SearchWrapper>
        )}
        <Styled.CustomButton isBlack variant="contained">
          Sell NFT
        </Styled.CustomButton>
        {user?.loggedIn ? (
          <Styled.AvatarButton
            ref={menuAnchorRef}
            disableRipple
            variant="text"
            onClick={toggleUserMenu}>
            <Styled.UserAvatar alt="User Icon" />
            <Styled.AvatarMoreIcon rotate={!!openUserMenu} />
          </Styled.AvatarButton>
        ) : (
          <Styled.CustomButton variant="contained" onClick={login}>
            Sign in
          </Styled.CustomButton>
        )}
        <Dropdown
          menuAnchorRef={menuAnchorRef}
          isOpen={openUserMenu}
          onClose={toggleUserMenu}
          options={USER_MENU_OPTIONS}
          handleClickOption={handleClick}
        />
      </Styled.Container>
    </Styled.HeaderBar>
  );
};

export default Header;
