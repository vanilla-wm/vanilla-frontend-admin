import Cookies from 'js-cookies'
import { COOKIE_NAME } from '../constants'
import getConfig from 'next/config'

export const getCookie = () => {
  if (typeof window !== 'undefined') {
    return Cookies.getItem(COOKIE_NAME)
  }
}

export const removeCookie = () => {
  const { publicRuntimeConfig } = getConfig()

  if (typeof window !== 'undefined') {
    return Cookies.removeItem(COOKIE_NAME, '/', publicRuntimeConfig.DOMAIN)
  }
}
