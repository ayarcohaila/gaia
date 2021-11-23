import {
  Headphones as MusicIcon,
  Icecream as MoreIcon,
  MicExternalOn as PopCultureIcon,
  SportsBasketball as SportsIcon,
  Theaters as MoviesIcon
} from '@mui/icons-material';

export const FILTERS = [
  {
    id: 'category',
    label: 'Category',
    options: [
      {
        id: 'sports',
        label: 'Sports',
        renderIcon: (isSelected, color) => <SportsIcon color={color} fontSize="12px" />
      },
      {
        id: 'movies',
        label: 'Movies',
        renderIcon: (isSelected, color) => <MoviesIcon color={color} fontSize="12px" />
      },
      {
        id: 'music',
        label: 'Music',
        renderIcon: (isSelected, color) => <MusicIcon color={color} fontSize="12px" />
      },
      {
        id: 'pop-culture',
        label: 'Pop Culture',
        renderIcon: (isSelected, color) => <PopCultureIcon color={color} fontSize="12px" />
      },
      {
        id: 'more',
        label: 'More',
        renderIcon: (isSelected, color) => <MoreIcon color={color} fontSize="12px" />
      }
    ]
  },
  {
    id: 'brand',
    label: 'Brand',
    type: 'select',
    options: []
  },
  {
    id: 'collection',
    label: 'Collection',
    type: 'select',
    options: []
  },
  {
    id: 'price',
    label: 'Price',
    type: 'select',
    options: []
  },
  {
    id: 'type',
    label: 'Type',
    type: 'select',
    options: []
  },
  {
    id: 'mint-number',
    label: 'Mint Number',
    type: 'select',
    options: []
  },
  {
    id: 'edition-size',
    label: 'Edition Size',
    type: 'select',
    options: []
  }
];
