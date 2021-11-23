//TODO: Uncomment when we have more filters
// import {
//   Headphones as MusicIcon,
//   Icecream as MoreIcon,
//   MicExternalOn as PopCultureIcon,
//   SportsBasketball as SportsIcon,
//   Theaters as MoviesIcon
// } from '@mui/icons-material';

export const FILTERS = [
  {
    id: 'collection',
    label: 'Collection',
    options: [
      {
        id: 'ballerz',
        label: 'BALLERZ'
      },
      {
        id: 'bryson',
        label: 'Bryson DeChambeau'
      }
    ]
  },
  {
    id: 'price',
    label: 'Price'
  }
  //TODO: Uncomment when we have more filters
  // {
  //   id: 'category',
  //   label: 'Category',
  //   options: [
  //     {
  //       id: 'sports',
  //       label: 'Sports',
  //       renderIcon: (isSelected, color) => <SportsIcon color={color} fontSize="12px" />
  //     },
  //     {
  //       id: 'movies',
  //       label: 'Movies',
  //       renderIcon: (isSelected, color) => <MoviesIcon color={color} fontSize="12px" />
  //     },
  //     {
  //       id: 'music',
  //       label: 'Music',
  //       renderIcon: (isSelected, color) => <MusicIcon color={color} fontSize="12px" />
  //     },
  //     {
  //       id: 'pop-culture',
  //       label: 'Pop Culture',
  //       renderIcon: (isSelected, color) => <PopCultureIcon color={color} fontSize="12px" />
  //     },
  //     {
  //       id: 'more',
  //       label: 'More',
  //       renderIcon: (isSelected, color) => <MoreIcon color={color} fontSize="12px" />
  //     }
  //   ]
  // },
  // {
  //   id: 'type',
  //   label: 'Type',
  //   options: [
  //     {
  //       id: 'nft',
  //       label: 'NFT'
  //     },
  //     {
  //       id: 'sets',
  //       label: 'Sets'
  //     }
  //   ]
  // },
  // {
  //   id: 'mint-number',
  //   label: 'Mint Number',
  //   options: [
  //     {
  //       id: 'minimum',
  //       label: 'Minimum'
  //     },
  //     {
  //       id: 'maximum',
  //       label: 'Maximum'
  //     }
  //   ]
  // },
  // {
  //   id: 'edition-size',
  //   label: 'Edition Size',
  //   options: [
  //     {
  //       id: 'minimum',
  //       label: 'Minimum'
  //     },
  //     {
  //       id: 'maximum',
  //       label: 'Maximum'
  //     }
  //   ]
  // }
];
