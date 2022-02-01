import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import theme from '~/themes/default';
import muiTheme from '~/themes/materialTheme';

const StylesProvider = ({ children }: PropsWithChildren<{}>) => (
  <MuiThemeProvider theme={muiTheme}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </MuiThemeProvider>
);

export default StylesProvider;
