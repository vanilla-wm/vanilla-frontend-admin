import useAuthCookieListener from './useCookieAuthListener'
import React from 'react'

export default () => {
  const [authState, setAuthState] = React.useState('authenticating')
  const cookie = useAuthCookieListener()

  React.useEffect(() => {
    if (!cookie) {
      setAuthState('unAuthenticated')
    } else {
      //request for verify
      // setTimeout(()=>setAuthState('authenticat'),2000)
    }
  }, [cookie])


  return {
    authState,
  }
}
