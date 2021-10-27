import muiTheme from '~/themes/materialTheme';

export const ITEMS = [
  {
    label: 'BALLERZ',
    href: 'https://www.ballerz.xyz/'
  },
  {
    label: 'Bitcoin Origins',
    href: 'https://www.btcorigins.com/'
  },
  {
    label: 'NFT Genius',
    href: 'https://nftgenius.com/'
  },
  {
    label: 'NiftyCap',
    href: 'https://niftycap.com/'
  },
  {
    label: 'Rebel Rabbits',
    href: 'https://rebelrabbits.io/'
  }
];

const {
  palette: { grey }
} = muiTheme;

export const iconStyles = {
  color: grey[600],
  height: '20px',
  ml: '18px',
  width: '20px',
  ':hover': { color: grey[400] }
};
