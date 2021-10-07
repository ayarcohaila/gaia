import muiTheme from '~/themes/materialTheme';

export const COLUMNS = [
  {
    title: 'Our Network',
    items: [
      {
        label: 'Bitcoin Origins',
        href: 'https://www.btcorigins.com/'
      },
      {
        label: 'Cryptobuds ',
        href: 'https://twitter.com/buds_crypto'
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
    ]
  },
  {
    title: 'Our Investors',
    items: [
      {
        label: 'Mark Cuban',
        href: 'https://twitter.com/mcuban'
      },
      {
        label: 'Anthony Pompliano',
        href: 'https://twitter.com/APompliano'
      },
      {
        label: 'Roham Gharegozlou',
        href: 'https://www.linkedin.com/in/roham/'
      },
      {
        label: 'HOF Capital',
        href: 'https://www.hofvc.com/'
      },
      {
        label: 'Sound Ventures',
        href: 'https://www.soundventures.com/'
      }
    ]
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
