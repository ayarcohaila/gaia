import { createTheme } from '@mui/material/styles';
import { Theme as BaseTheme } from '@mui/material/styles/createTheme';

const customTheme = {
  breakpoints: {
    values: {
      xs: 375,
      sm: 640,
      md: 1025,
      mdx: 1080,
      lg: 1200,
      lgm: 1300,
      xl: 1440,
      xll: 2560
    }
  },
  palette: {
    primary: {
      main: '#215cf1',
      dark: '#1a49c1',
      hover: '#1a49c1'
    },
    secondary: {
      main: '#171a24'
    },
    grey: {
      main: '#42454d',
      800: '#1c202a',
      700: '#272a36',
      650: '#42454d',
      600: '#6c7283',
      550: '#42454d',
      500: '#9a9fac',
      450: '#a6a7ac',
      400: '#bcbfc8',
      375: '#d8d8d8',
      350: '#dddfe3',
      300: '#e9eaed',
      200: '#f4f4f6',
      100: '#f6f7fa '
    },
    purple: {
      200: '#411f7e',
      100: '#402086'
    },
    darkPurple: {
      main: '#11042d'
    },
    error: {
      main: '#e9252f',
      dark: 'rgba(233, 37, 47, 0.8)',
      hover: '#fce9ea',
      light: '#d73e35',
      700: '#cf111b'
    },
    success: {
      main: '#0bbd69',
      light: '#56ba71'
    },
    white: { main: '#fff' },
    black: { main: '#000' },
    loader: { main: '#6c7283' }
  }
} as const;

const baseTheme = createTheme(customTheme) as BaseTheme & typeof customTheme;

const customTypography = {
  ...baseTheme.typography,
  h1: {
    fontSize: '3.5rem', // 56px
    fontWeight: 'bold',
    letterSpacing: '-1px',
    lineHeight: '3.75rem',

    [baseTheme.breakpoints.down('lg')]: {
      fontSize: '2.25rem', // 36px
      letterSpacing: '-0.6px',
      lineHeight: '2.5rem'
    }
  },
  h2: {
    fontSize: '2.5rem', // 40px
    fontWeight: '500',
    letterSpacing: '0',
    lineHeight: '2.75rem',

    [baseTheme.breakpoints.down('lg')]: {
      fontSize: '1.625rem', // 26px
      lineHeight: '1.875rem'
    }
  },
  h3: {
    fontSize: '2.25rem', // 36px
    fontWeight: 'bold',
    letterSpacing: '-0.6px',
    lineHeight: '2.5rem',

    [baseTheme.breakpoints.down('lg')]: {
      fontSize: '1.875rem', // 30px
      letterSpacing: '-0.5px',
      lineHeight: '2.125rem'
    }
  },
  h4: {
    fontSize: '1.25rem', // 20px
    fontWeight: 'bold',
    letterSpacing: '0',
    lineHeight: '1.5rem'
  },
  h5: {
    fontSize: '1rem', // 16px
    fontWeight: 'bold',
    letterSpacing: '0',
    lineHeight: '1.5rem'
  },
  h6: {
    fontSize: '1rem', // 16px
    fontWeight: 'normal',
    letterSpacing: '0',
    lineHeight: '1.5rem',

    [baseTheme.breakpoints.down('lg')]: {
      fontSize: '0.875rem', // 14px
      lineHeight: '1.25rem'
    }
  },
  subtitle1: {
    fontSize: '0.875rem', // 14px
    fontWeight: '500',
    letterSpacing: '0',
    lineHeight: '1rem'
  },
  subtitle2: {
    fontSize: '0.8125rem', // 13px
    fontWeight: '500',
    letterSpacing: '0',
    lineHeight: '1.rem',

    [baseTheme.breakpoints.down('lg')]: {
      fontWeight: 'regular'
    }
  },
  body1: {
    fontSize: '0.75rem', // 12px
    fontWeight: '500',
    letterSpacing: '0.6px',
    lineHeight: '1rem'
  },
  link1: {
    fontFamily: 'StaffGroteskBold',
    fontSize: '0.875rem', // 14px
    fontWeight: '700',
    letterSpacing: '0.2px',
    lineHeight: '1rem'
  }
} as const;

const theme = {
  ...baseTheme,
  typography: customTypography
};

export type Theme = typeof theme;
export default theme as Theme;
