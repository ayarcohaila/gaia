import { useState, useRef } from 'react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Grid, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';
import Link from 'next/link';

import Dropdown from '~/base/dropdown';
import useAuth from '~/hooks/useAuth';
import useBreakpoints from '~/hooks/useBreakpoints';
import useToggle from '~/hooks/useToggle';
import { hasBrowse } from '~/config/config';
import { MARKETPLACE_TITLE, MENU_OPTIONS, USER_MENU_IDS, USER_MENU_OPTIONS } from './constants';

const HeaderModal = dynamic(() => import('~/components/modal/headerMenu'));

import * as Styled from './styles.js';

const Header = () => {
  const menuAnchorRef = useRef(null);
  const [stateModalHeader, toggleHeaderModal] = useToggle();
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const { login, user, logout } = useAuth();
  const { isMediumDevice } = useBreakpoints();
  const router = useRouter();

  const handleDropdownMenu = state => {
    setOpenUserMenu(prevState => (state !== undefined ? state : !prevState));
  };

  const handleClick = ({
    currentTarget: {
      dataset: { id }
    }
  }) => {
    if (stateModalHeader) {
      toggleHeaderModal();
    } else {
      handleDropdownMenu();
    }

    switch (id) {
      case USER_MENU_IDS.PROFILE:
        router.push(`/profile/${user?.addr}`);
        break;
      case USER_MENU_IDS.DAPPER_WALLET: {
        const address = `https://${
          process.env.NODE_ENV !== 'production' ? 'staging.' : ''
        }accounts.meetdapper.com/home`;
        window.open(address, '_blank')?.focus();
        break;
      }
      case USER_MENU_IDS.BROWSE: {
        router.push('/browse');
        break;
      }
      case USER_MENU_IDS.FAVORITES: {
        router.push('/favorites');
        break;
      }
      default:
        logout();
        break;
    }
  };

  const navigateToHome = () => {
    toggleHeaderModal();
    router.push('/ballerz');
  };

  return (
    <Styled.HeaderBar position="static">
      <Styled.Container component="section" isMobile={isMediumDevice}>
        <NextLink href="/">
          <Styled.LogoImage component="a">
            <NextImage
              width={isMediumDevice ? 75 : 102.4}
              height={isMediumDevice ? 29.3 : 40}
              src="/static/img/gaia_logo-black.svg"
              alt="GaiaLogo"
            />
          </Styled.LogoImage>
        </NextLink>
        {!isMediumDevice && (
          <Grid component="nav" ml="47px">
            <Styled.MenuOptionList component="ul">
              {MENU_OPTIONS.filter(menuOption => menuOption !== false).map(option => (
                <Grid key={option.label} item component="li">
                  <Link href={option.href}>
                    <Styled.MenuOption data-cy={`link-${option.label}`}>
                      {option.label}
                    </Styled.MenuOption>
                  </Link>
                </Grid>
              ))}
              {MENU_OPTIONS.length > 4 && (
                <Styled.MoreButton disableRipple variant="text" endIcon={<ArrowDropDownIcon />}>
                  More
                </Styled.MoreButton>
              )}
            </Styled.MenuOptionList>
          </Grid>
        )}
        {!isMediumDevice && (
          <Styled.SearchWrapper>
            {/* <Hidden xlDown>
              <SearchInput value={searchQuery} onChange={handleChangeSearch} />
            </Hidden> */}
          </Styled.SearchWrapper>
        )}
        {isMediumDevice ? (
          <Styled.MobileMenuButton
            onClick={toggleHeaderModal}
            data-cy="burger-button-mobile"
            aria-label="mobileMenu">
            <MenuIcon />
          </Styled.MobileMenuButton>
        ) : (
          <>
            {user?.loggedIn ? (
              <Styled.AvatarButton
                ref={menuAnchorRef}
                disableRipple
                variant="text"
                onClick={handleClick}
                onMouseEnter={() => handleDropdownMenu(true)}
                data-id={USER_MENU_IDS.PROFILE}
                aria-label="mobileMenu">
                <Styled.UserAvatar alt="User Icon" />
                <Styled.AvatarMoreIcon rotate={!!openUserMenu} />
              </Styled.AvatarButton>
            ) : (
              <Styled.CustomButton
                data-cy="login"
                variant="contained"
                aria-label="loginButton"
                onClick={login}>
                Sign In
              </Styled.CustomButton>
            )}
          </>
        )}
        <Dropdown
          menuAnchorRef={menuAnchorRef}
          isOpen={!!openUserMenu}
          onClose={handleDropdownMenu}
          options={USER_MENU_OPTIONS}
          handleClickOption={handleClick}
          onMouseLeave={() => handleDropdownMenu(false)}
          sx={{ width: '164px', marginRight: '30px' }}
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
            <NextImage width={102.4} height={40} src="/static/img/gaia_logo-black.svg" />
          </Button>
          {user?.loggedIn ? (
            <>
              {hasBrowse && (
                <Styled.ButtonText
                  data-cy="link-Marketplace"
                  variant="text"
                  onClick={handleClick}
                  data-id={USER_MENU_IDS.BROWSE}>
                  {MARKETPLACE_TITLE}
                </Styled.ButtonText>
              )}
              <Styled.ButtonText
                variant="text"
                onClick={handleClick}
                data-id={USER_MENU_IDS.PROFILE}>
                Profile
              </Styled.ButtonText>
              <Styled.ButtonText
                variant="text"
                onClick={handleClick}
                data-id={USER_MENU_IDS.DAPPER_WALLET}>
                My Wallet
              </Styled.ButtonText>
              <Styled.ButtonText variant="text" onClick={handleClick}>
                Sign Out
              </Styled.ButtonText>
            </>
          ) : (
            <>
              {hasBrowse && (
                <Styled.ButtonText
                  data-cy="link-Marketplace"
                  variant="text"
                  onClick={handleClick}
                  data-id={USER_MENU_IDS.BROWSE}>
                  {MARKETPLACE_TITLE}
                </Styled.ButtonText>
              )}
              <Styled.CustomButton data-cy="login" variant="contained" headerModal onClick={login}>
                Sign In
              </Styled.CustomButton>
            </>
          )}
        </Grid>
      </HeaderModal>
    </Styled.HeaderBar>
  );
};

export default Header;
