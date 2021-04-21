import Head from 'next/head';
import { ApolloProvider } from '@apollo/client/react';
import { ThemeProvider } from 'styled-components';
import { Layout } from 'antd';

import { GlobalStyles } from '~/components/layout/globalStyles';
import Header from '~/components/header/header';
import Content from '~/layout/content';
import Footer from '~/layout/footer';
import theme from '~/themes/default';
import client from '~/config/apollo-client';

import 'antd/dist/antd.less';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"></link>
        </Head>
        <Layout>
          <Header />
          <Content>
            <Component {...pageProps} />
          </Content>
          <Footer />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
