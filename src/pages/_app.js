import '../../public/static/fonts/fonts.css';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';
import { Container } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client/react';

import AppProvider from '~/context/appProvider';

import { GlobalStyles } from '~/styles/globalStyles';
import { ToastContainer, toast } from 'react-toastify';
import { Header, Content, Footer } from '~/layout';
import client from '~/config/apolloClient';
import { AuthProvider } from '~/providers/AuthProvider';
import * as ga from '~/utils/ga';
import StylesProvider from '~/context/stylesProvider';

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
    <StylesProvider>
      <AppProvider>
        <AuthProvider>
          <ApolloProvider client={client}>
            <GlobalStyles />
            <Head>
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link
                href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                rel="stylesheet"
              />
              <link
                href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"
                rel="stylesheet"
              />
              <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
              <link rel="shortcut icon" href="/favicon.ico" />
              <link rel="manifest" href="/manifest.json" />
              <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#404040" />
              <meta name="msapplication-TileColor" content="#404040" />
              <meta name="theme-color" content="#404040" />
              <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, maximum-scale=5, viewport-fit=cover"
              />
            </Head>
            <Container maxWidth="xll" disableGutters>
              <Header />
              <Content>
                <Component {...pageProps} />
              </Content>
            </Container>
            <Footer />
            <ToastContainer pauseOnFocusLoss={false} position={toast.POSITION.BOTTOM_LEFT} />
          </ApolloProvider>
        </AuthProvider>
      </AppProvider>
    </StylesProvider>
  );
}

export default MyApp;
