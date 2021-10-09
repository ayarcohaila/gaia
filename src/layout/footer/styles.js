import { Link, styled } from '@mui/material';

import { Button, SearchInput } from '~/base';

export const CustomLink = styled(Link)(
  ({
    fontSize,
    theme: {
      palette: { grey },
      typography
    }
  }) => ({
    ...typography.subtitle2,
    color: grey[600],
    display: 'block',
    fontSize: fontSize ? fontSize : typography.subtitle2.fontSize,
    letterSpacing: '0.2px',

    '&:hover': {
      color: 'white'
    }
  })
);

export const Input = styled(SearchInput, { shouldForwardProp: prop => prop !== 'hasError' })(
  ({
    hasError,
    theme: {
      palette: { error, grey }
    }
  }) => ({
    backgroundColor: grey[700],
    border: hasError ? `2px solid ${error.dark}` : 'none',
    borderRadius: '28px',
    height: '50px',
    minWidth: '405px',

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
  transform: 'translateX(8px)',
  width: '130px'
});

export const DiscordIcon = styled('img')({
  height: '20px',
  transform: 'translateY(-3.5px)',
  width: '20px'
});
