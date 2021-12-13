import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class _Document extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            httpEquiv="Content-Security-Policy"
            content="default-src 'self';
            script-src 'report-sample' 'self' https://www.googletagmanager.com/gtag/js;
            style-src 'report-sample' 'self';
            object-src 'none';
            base-uri 'self';
            connect-src 'self' https://flow-testnet.g.alchemy.com https://o189304.ingest.sentry.io https://staging.accounts.meetdapper.com https://www.google-analytics.com https://accounts.meetdapper.com https://flow-mainnet.g.alchemy.com;
            font-src 'self' https://fonts.gstatic.com;
            frame-src 'self';
            img-src 'self' data: https://images.ongaia.com;
            manifest-src 'self';
            media-src 'self' https://images.ongaia.com;
            report-uri https://6197fef357efdeabc05d2204.endpoint.csper.io/?v=0;
            worker-src 'none';"
          />

          {process.env.NODE_ENV === 'production' && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];
                         function gtag(){dataLayer.push(arguments);}
                         gtag('js', new Date());
                         gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                           page_path: window.location.pathname,
                         });`
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}