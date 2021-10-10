import { styled } from '@mui/material';

import { Button, SearchInput } from '~/base';

export const Input = styled(SearchInput)(
  ({
    theme: {
      palette: { grey }
    }
  }) => ({
    borderRadius: '28px',
    height: '50px',
    width: '360px',

    '& > .MuiInput-input': {
      color: grey[500],
      fontSize: '1rem'
    },

    '& > .MuiInput-input::placeholder': {
      color: grey[600],
      fontWeight: 'bold'
    },

    '&:hover > .MuiInput-input::placeholder': {
      color: grey[500]
    }
  })
);

export const CustomButton = styled(Button)({
  height: '40px',
  transform: 'translateX(8px)'
});
