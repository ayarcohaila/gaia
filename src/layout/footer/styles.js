import { Link, styled } from '@mui/material';

import { Button, SearchInput } from '~/base';

const INPUT_PROPS = ['hasError', 'isSigned'];

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
    lineHeight: '1.5',

    '&:hover': {
      color: 'white'
    }
  })
);

export const Input = styled(SearchInput, {
  shouldForwardProp: prop => !INPUT_PROPS.includes(prop)
})(
  ({
    hasError,
    isSigned,
    theme: {
      breakpoints,
      palette: { error, grey, success }
    }
  }) => ({
    backgroundColor: grey[700],
    border: hasError ? `2px solid ${error.dark}` : 'none',
    borderRadius: '28px',
    height: '50px',
    minWidth: '405px',

    '& > .MuiInput-input': {
      color: isSigned ? success.light : grey[500],
      fontSize: '1rem'
    },

    '& > .MuiInput-input::placeholder': {
      color: grey[600],
      fontWeight: 'bold'
    },

    '&:hover > .MuiInput-input::placeholder': {
      color: grey[500]
    },

    [breakpoints.down('sm')]: {
      minWidth: '80%'
    },

    [breakpoints.down('xs')]: {
      maxWidth: '280px'
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

export const Logo = styled(Link)(() => ({
  fontSize: '40px',
  color: 'white',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  textDecoration: 'none',
  cursor: 'pointer',

  '&:hover': {
    color: 'white'
  }
}));
