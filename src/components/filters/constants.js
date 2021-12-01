//TODO: Uncomment when we have more filters
// import {
//   Headphones as MusicIcon,
//   Icecream as MoreIcon,
//   MicExternalOn as PopCultureIcon,
//   SportsBasketball as SportsIcon,
//   Theaters as MoviesIcon
// } from '@mui/icons-material';
import { BALLERZ_PROPERTIES } from '~/utils/constants';
import { COLLECTION_LIST_CONFIG } from '~/../collections_setup';

export const FILTERS_TYPES = {
  SINGLE: 'single',
  MULTI: 'multi',
  RANGE: 'range'
};

export const FILTERS_IDS = {
  PRICE: 'price',
  STATUS: 'status',
  COLLECTIONS: 'collections',
  PROPERTIES: 'properties'
};

export const FILTERS = [
  {
    id: FILTERS_IDS.PRICE,
    label: 'Price',
    type: FILTERS_TYPES.RANGE
  },
  {
    id: FILTERS_IDS.STATUS,
    label: 'Status',
    type: FILTERS_TYPES.SINGLE,
    options: [
      {
        id: 'buyNow',
        label: 'Buy Now'
      },
      {
        id: 'viewAll',
        label: 'View All'
      }
    ]
  },
  {
    id: FILTERS_IDS.COLLECTIONS,
    label: 'Collection',
    type: FILTERS_TYPES.MULTI,
    options: [
      {
        id: COLLECTION_LIST_CONFIG.ballerz.id,
        label: 'BALLERZ',
        properties: BALLERZ_PROPERTIES
      },
      {
        id: COLLECTION_LIST_CONFIG.bryson.id,
        label: 'Bryson DeChambeau'
      }
    ]
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
