import Cookies from 'js-cookies'
import { COOKIE_NAME } from '../constants'


export const getCookie = () => {
  if (typeof window !== 'undefined') {
    return Cookies.getItem(COOKIE_NAME)
  }
}

export const removeCookie = () => {
  if (typeof window !== 'undefined') {
    return Cookies.removeItem(COOKIE_NAME)
  }
}
