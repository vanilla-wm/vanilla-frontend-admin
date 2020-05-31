import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../config/GlobalStyle'
import theme from '../theme'
import AppProvider from '../modules/AppProvider'
import { DefaultSeo } from 'next-seo/lib'

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
      <DefaultSeo
        title="Vanilla Admin"
        description="Verify payment stream before sending content to the user via Vanilla API."
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://admin.vanilla.so',
          site_name: 'Vanilla Admin',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
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
