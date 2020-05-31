import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../config/GlobalStyle'
import theme from '../theme'
import AppProvider from '../modules/AppProvider'
import { DefaultSeo } from 'next-seo/lib'
import getConfig from 'next/config'

const App = ({
  Component,
  pageProps,
}: AppProps & {
  Component: {
    Layout?: () => React.ReactNode
  }
}) => {
  const Layout = Component.Layout || (({ children }) => children)
  const {
    publicRuntimeConfig: { BASE_PATH },
  } = getConfig()

  return (
    <>
      <DefaultSeo
        title="Vanilla Admin"
        description="Verify payment stream before sending content to the user via Vanilla API."
        openGraph={{
          type: 'website',
          locale: 'en_US',
          title: 'Vanilla Admin',
          description:
            'Verify payment stream before sending content to the user via Vanilla API.',
          url: BASE_PATH,
          images: [
            {
              url: `${BASE_PATH}/images/og-image.jpg`,
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
          ],
        }}
        twitter={{
          site: '@CinnamonVideo',
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
