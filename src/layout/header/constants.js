import { LockOpenOutlined as LockOpenOutlinedIcon } from '@mui/icons-material';

export const MENU_OPTIONS = [
  { label: 'Sports', href: '/sports' },
  { label: 'Movies', href: '/movies' },
  { label: 'Music', href: '/music' },
  { label: 'Pop Culture', href: '/pop-culture' }
];

export const USER_MENU_IDS = {
  PROFILE: 'profile',
  SIGN_OUT: 'logout',
  DAPPER_WALLET: 'dapperWallet'
};

export const USER_MENU_OPTIONS = [
  { id: USER_MENU_IDS.PROFILE, label: 'Profile' },
  { id: USER_MENU_IDS.DAPPER_WALLET, label: 'My Dapper Wallet' },
  {
    id: USER_MENU_IDS.SIGN_OUT,
    label: 'Sign Out',
    isRed: true,
    icon: <LockOpenOutlinedIcon fontSize="12px" />
  }
];
