import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import { IntlProvider } from 'react-intl'
import GlobalStyle from '../config/GlobalStyle'
import theme from '../theme'
import AppProvider from '../modules/AppProvider'

const App = ({
  Component,
  pageProps,
}: AppProps & {
  Component: {
    Layout?: () => React.ReactNode
  }
}) => {
  const Layout = Component.Layout || (({ children }) => children)

  return (
    <>
      <Head>
        <title>Vanilla - Web Monetization Verifier</title>
        <meta name="title" content="Vanilla - Web Monetization Verifier" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <IntlProvider locale='en'>
          <AppProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AppProvider>
        </IntlProvider>
      </ThemeProvider>
    </>
  )
}

export default App
