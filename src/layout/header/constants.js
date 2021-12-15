import { LockOpenOutlined as LockOpenOutlinedIcon } from '@mui/icons-material';
import { hasSecondarySale } from '~/config/config';

export const MARKETPLACE_TITLE = 'BALLERZ Marketplace';

export const MENU_OPTIONS = [hasSecondarySale && { label: MARKETPLACE_TITLE, href: '/browse' }];

export const USER_MENU_IDS = {
  PROFILE: 'profile',
  SIGN_OUT: 'logout',
  DAPPER_WALLET: 'dapperWallet',
  ...(hasSecondarySale && { BROWSE: 'browse' })
};

export const USER_MENU_OPTIONS = [
  { id: USER_MENU_IDS.PROFILE, label: 'Profile' },
  { id: USER_MENU_IDS.DAPPER_WALLET, label: 'My Wallet' },
  {
    id: USER_MENU_IDS.SIGN_OUT,
    label: 'Sign Out',
    isRed: true,
    icon: <LockOpenOutlinedIcon fontSize="12px" />
  },
  hasSecondarySale && { id: USER_MENU_IDS.BROWSE, label: MARKETPLACE_TITLE }
].filter(option => option !== false);
