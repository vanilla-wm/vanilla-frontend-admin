import cookie from 'cookie'

export const getCookie = () => {
  if (typeof window !== 'undefined') {
    return cookie.parse(document.cookie)['vanilla-ssid']
  }
}
