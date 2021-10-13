import { useState, useRef } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Grid, Link, Button } from '@mui/material';
import { ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';
import NextImage from 'next/image';

import useAuth from '~/hooks/useAuth';
import useToggle from '~/hooks/useToggle';
import { HeaderModal } from '~/components';
import { Dropdown, SearchInput } from '~/base';
import useBreakpoints from '~/hooks/useBreakpoints.js';
import MenuIcon from '@mui/icons-material/Menu';
import { MENU_OPTIONS, USER_MENU_IDS, USER_MENU_OPTIONS } from './constants';

import * as Styled from './styles.js';

const Header = () => {
  const menuAnchorRef = useRef(null);
  const [stateModalHeader, toggleHeaderModal] = useToggle();
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
    if (stateModalHeader) {
      toggleHeaderModal();
    } else {
      toggleUserMenu();
    }
    if (id === USER_MENU_IDS.PROFILE) {
      router.push(`/profile/${user?.addr}`);
    } else {
      logout();
    }
  };

  const navigateToHome = () => {
    toggleHeaderModal();
    router.push('/ballerz');
  };

  return (
    <Styled.HeaderBar position="static">
      <Styled.Container component="section" isMobile={isMediumDevice}>
        <NextLink href="/ballerz">
          <Link component="a">
            <NextImage width={90} height={40} src="/static/img/gaia_logo-black.png" />
          </Link>
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
        {isMediumDevice ? (
          <Styled.MobileMenuButton onClick={toggleHeaderModal}>
            <MenuIcon />
          </Styled.MobileMenuButton>
        ) : (
          <>
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
          </>
        )}
        <Dropdown
          menuAnchorRef={menuAnchorRef}
          isOpen={openUserMenu}
          onClose={toggleUserMenu}
          options={USER_MENU_OPTIONS}
          handleClickOption={handleClick}
        />
      </Styled.Container>
      <HeaderModal open={stateModalHeader} onClose={toggleHeaderModal}>
        <Grid
          container
          sx={{ gap: '24px' }}
          alignItems="center"
          justifyContent="center"
          direction="column">
          <Button variant="text" disableRipple onClick={navigateToHome}>
            <NextImage width={90} height={40} src="/static/img/gaia_logo-black.png" />
          </Button>
          {user?.loggedIn ? (
            <>
              <Styled.ButtonText
                variant="text"
                onClick={handleClick}
                data-id={USER_MENU_IDS.PROFILE}>
                Profile
              </Styled.ButtonText>
              <Styled.ButtonText variant="text" onClick={handleClick}>
                Sign Out
              </Styled.ButtonText>
            </>
          ) : (
            <Styled.CustomButton variant="contained" headerModal onClick={login}>
              Sign in
            </Styled.CustomButton>
          )}
        </Grid>
      </HeaderModal>
    </Styled.HeaderBar>
  );
};

export default Header;
