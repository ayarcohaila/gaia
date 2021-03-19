import 'antd/dist/antd.less';
import { GlobalStyles } from '../components/layout/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from '../themes/default';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
