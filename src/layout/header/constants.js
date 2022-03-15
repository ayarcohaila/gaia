import { hasBrowse, hasCollectionPage } from '~/config/config';

import { LockIcon } from './styles.js';

export const MARKETPLACE_TITLE = 'Marketplace';
export const MYCOLLECTION_TITLE = 'My Collection';
export const COLLECTIONS_TITLE = 'Collections';

export const MENU_OPTIONS = [
  hasBrowse && { label: MYCOLLECTION_TITLE, href: '/profile/' },
  hasCollectionPage && { label: COLLECTIONS_TITLE, href: '/collections' }
];

export const USER_MENU_IDS = {
  PROFILE: 'profile',
  SIGN_OUT: 'logout',
  FAVORITES: 'favorites',
  DAPPER_WALLET: 'dapperWallet',
  ...(hasBrowse && { BROWSE: 'browse' })
};

export const USER_MENU_OPTIONS = [
  { id: USER_MENU_IDS.PROFILE, label: 'Profile' },
  { id: USER_MENU_IDS.FAVORITES, label: 'Favorites' },
  { id: USER_MENU_IDS.DAPPER_WALLET, label: 'My Wallet' },
  {
    id: USER_MENU_IDS.SIGN_OUT,
    label: 'Sign Out',
    isRed: true,
    icon: <LockIcon />
  }
].filter(option => option !== false);
