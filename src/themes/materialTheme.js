import { createTheme } from '@mui/material/styles';

const breakpoints = {
  values: {
    xs: 375,
    sm: 640,
    md: 1024,
    lg: 1200,
    xl: 1536
  }
};

const theme = createTheme({
  breakpoints,
  palette: {
    primary: {
      main: '#215cf1'
    },
    secondary: {
      main: '#171a24'
    },
    grey: {
      700: '#272a36',
      600: '#6c7283',
      500: '#9a9fac',
      400: '#bcbfc8',
      300: '#e9eaed',
      200: '#f4f4f6',
      100: '#ffffff'
    },
    error: {
      main: '#e9252f'
    },
    success: {
      main: '#0bbd69'
    }
  }
});

theme.typography = {
  h1: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    letterSpacing: '-1px',
    lineHeight: '3.75rem',

    [theme.breakpoints.down('lg')]: {
      fontSize: '2.25rem',
      letterSpacing: '-0.6px',
      lineHeight: '2.5rem'
    }
  },
  h2: {
    fontSize: '2.5rem',
    fontWeight: 'medium',
    letterSpacing: '0',
    lineHeight: '2.75rem',

    [theme.breakpoints.down('lg')]: {
      fontSize: '1.625rem',
      lineHeight: '1.875rem'
    }
  },
  h3: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    letterSpacing: '-0.6px',
    lineHeight: '2.5rem',

    [theme.breakpoints.down('lg')]: {
      fontSize: '1.875rem',
      letterSpacing: '-0.5px',
      lineHeight: '2.125rem'
    }
  },
  h4: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    letterSpacing: '0',
    lineHeight: '1.5rem'
  },
  h5: {
    fontSize: '1rem',
    fontWeight: 'bold',
    letterSpacing: '0',
    lineHeight: '1.5rem'
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 'regular',
    letterSpacing: '0',
    lineHeight: '1.5rem',

    [theme.breakpoints.down('lg')]: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem'
    }
  },
  subtitle1: {
    fontSize: '0.875rem',
    fontWeight: 'medium',
    letterSpacing: '0',
    lineHeight: '1rem'
  },
  subtitle2: {
    fontSize: '0.8125rem',
    fontWeight: 'medium',
    letterSpacing: '0',
    lineHeight: '1.rem',

    [theme.breakpoints.down('lg')]: {
      fontWeight: 'regular'
    }
  },
  body1: {
    fontSize: '0.75rem',
    fontWeight: '500',
    letterSpacing: '0.6px',
    lineHeight: '1rem'
  }
};

export default theme;
