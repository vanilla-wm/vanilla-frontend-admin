import useAuthCookieListener from '../../hooks/useCookieAuthListener'
import React from 'react'
import { removeCookie } from '../../utils/cookie'
import AuthContext, { AuthState } from '../../config/AuthContext'

export default ({ children }) => {
  const [authState, setAuthState] = React.useState<AuthState>('authenticating')
  const cookie = useAuthCookieListener()

  const logout = () => {
    removeCookie()
    setAuthState('unAuthenticated')
  }

  React.useEffect(() => {
    if (!cookie) {
      setAuthState('unAuthenticated')
    } else {
      //request for verify
      setTimeout(() => setAuthState('authenticated'), 2000)
    }
  }, [cookie])

  return (
    <AuthContext.Provider
      value={{
        authState,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
