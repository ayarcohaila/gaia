import { styled } from '@mui/material';

import Button from '~/base/button';
import SearchInput from '~/base/searchInput';

export const Input = styled(SearchInput)(
  ({
    theme: {
      breakpoints,
      palette: { grey },
      typography
    }
  }) => ({
    borderRadius: '28px',
    margin: '0',
    height: '56px',
    width: '360px',

    '& > .MuiInput-input': {
      ...typography.subtitle1,
      color: grey[700],
      fontFamily: 'IBMPlexMono',
      fontWeight: '600',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },

    '& > .MuiInput-input::placeholder': {
      color: grey[600],
      fontWeight: '600'
    },

    [breakpoints.down('sm')]: {
      width: '90%'
    }
  })
);

export const CustomButton = styled(Button)({
  height: '40px',
  padding: '12px 16px',
  transform: 'translateX(8px)',
  width: '180px'
});
