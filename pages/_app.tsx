import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../config/GlobalStyle'
import theme from '../theme'
import AppProvider from '../modules/AppProvider'
import Head from 'next/head'

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
        <AppProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppProvider>
      </ThemeProvider>
    </>
  )
}

export default App
