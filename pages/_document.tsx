import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import getConfig from 'next/config'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    // @ts-ignore
    const { styleTags } = this.props
    const {
      publicRuntimeConfig: { BASE_PATH },
    } = getConfig()

    return (
      <html lang="en" dir="ltr">
        <Head>
          <meta
            name="description"
            content="Verify payment streams before showing exclusive content to users."
          />
          <meta
            name="keywords"
            content="Content, Creators, Cinnamon, Web, Monetization, Web Monetization, Interledger, Grant for the Web, Grant, Coil, Payments"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="monetization" content="$ilp.uphold.com/2Na6ff4BNePb" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={BASE_PATH} />
          <meta
            property="og:title"
            content="Vanilla - Web Monetization Verifier"
          />
          <meta
            property="og:description"
            content="Verify payment streams before showing exclusive content to users."
          />
          <meta property="og:image" content={`${BASE_PATH}/images/twitter.png`} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={BASE_PATH} />
          <meta
            property="twitter:title"
            content="Vanilla - Web Monetization Verifier"
          />
          <meta
            property="twitter:description"
            content="Verify payment streams before showing exclusive content to users."
          />
          <meta property="twitter:image" content={`${BASE_PATH}/images/twitter.png`} />

          {/*Icons*/}
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/icons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/icons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/icons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/icons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/icons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/icons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/icons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/icons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/icons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/icons/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#000000" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-168106177-1"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              gtag('config', 'UA-168106177-1');
          `,
            }}
          />
          {styleTags}
        </Head>
        <Main />
        <NextScript />
      </html>
    )
  }
}
