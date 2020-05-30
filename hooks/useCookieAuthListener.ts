import React from 'react'
import Router from 'next/router'
import { getCookie } from '../utils/cookie'


/** Using `routeChangeStart` event on Router path change is more perf optimal way to keep track of cookie changes
 * than using infinite loop to check cookies.
 * Source example Instagram
 * */
export default () => {
  const [cookie, setCookie] = React.useState(getCookie())

  React.useEffect(() => {
    const handleRouteChange = () => {
      const newCookie = getCookie()
      if (newCookie !== cookie) {
        setCookie(newCookie)
      }
    }
    Router.events.on('routeChangeStart', handleRouteChange)

    return () => Router.events.off('routeChangeStart', handleRouteChange)
  }, [cookie])

  return {
    cookie,
  }
}
