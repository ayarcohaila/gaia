import { Link, styled } from '@mui/material';

import { Button } from '~/base';
import { SearchInput } from '~/components';

export const CustomLink = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.grey[600],
  display: 'block',

  '&:hover': {
    color: 'white'
  }
}));

export const Input = styled(SearchInput)(({ theme, error }) => ({
  backgroundColor: theme.palette.grey[700],
  border: error ? `2px solid ${theme.palette.error.dark}` : 'none',
  borderRadius: '28px',
  height: '50px',

  '& > .MuiInput-input': {
    color: theme.palette.grey[500]
  },

  '& > .MuiInput-input::placeholder': {
    color: theme.palette.grey[600]
  },

  '&:hover > .MuiInput-input::placeholder': {
    color: theme.palette.grey[500]
  }
}));

export const CustomButton = styled(Button)({
  height: '40px',
  transform: 'translateX(8px)',
  width: '130px'
});

export const DiscordIcon = styled('img')({
  height: '20px',
  transform: 'translateY(-3.5px)',
  width: '20px'
});
