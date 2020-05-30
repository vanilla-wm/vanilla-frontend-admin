import Cookies from 'js-cookies'

export const getCookie = () => {
  if (typeof window !== 'undefined') {
    return Cookies.getItem('vanilla-ssid')
  }
}

export const removeCookie = () => {
  if (typeof window !== 'undefined') {
    return Cookies.removeItem('vanilla-ssid')
  }
}
