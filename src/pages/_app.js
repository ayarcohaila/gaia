import '../../public/static/fonts/fonts.css';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import AppProvider from '~/context';

import { GlobalStyles } from '~/styles/globalStyles';
import { ToastContainer, toast } from 'react-toastify';
import { Header, Content, Footer } from '~/layout';
import theme from '~/themes/default';
import muiTheme from '~/themes/materialTheme';
import client from '~/config/apollo-client';
import { AuthProvider } from '~/providers/AuthProvider';
import * as ga from '~/utils/ga';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      ga.logPageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <AuthProvider>
            <ApolloProvider client={client}>
              <GlobalStyles />
              <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link
                  href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                  rel="stylesheet"></link>
                <link
                  href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"
                  rel="stylesheet"></link>
                <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
                <link
                  rel="apple-touch-icon"
                  sizes="114x114"
                  href="/favicon/apple-icon-114x114.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="120x120"
                  href="/favicon/apple-icon-120x120.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="144x144"
                  href="/favicon/apple-icon-144x144.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="152x152"
                  href="/favicon/apple-icon-152x152.png"
                />
                <link
                  rel="apple-touch-icon"
                  sizes="180x180"
                  href="/favicon/apple-icon-180x180.png"
                />
                <link
                  rel="icon"
                  type="image/png"
                  sizes="192x192"
                  href="/favicon/android-icon-192x192.png"
                />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />
              </Head>
              <Header />
              <Content>
                <Component {...pageProps} />
              </Content>
              <Footer />
              <ToastContainer pauseOnFocusLoss={false} position={toast.POSITION.BOTTOM_LEFT} />
            </ApolloProvider>
          </AuthProvider>
        </AppProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default MyApp;
