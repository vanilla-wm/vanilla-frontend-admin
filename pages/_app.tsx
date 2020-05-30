import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../config/GlobalStyle'
import theme from '../theme'
import AuthenticationProvider from '../modules/AuthenticationProvider'

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
    <ThemeProvider theme={theme}>
      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <GlobalStyle theme={theme} />
      <AuthenticationProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthenticationProvider>
    </ThemeProvider>
  )
}

export default App
