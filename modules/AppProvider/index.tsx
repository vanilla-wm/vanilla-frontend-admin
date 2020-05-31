import useAuthCookieListener from '../../hooks/useCookieAuthListener'
import React from 'react'
import { removeCookie } from '../../utils/cookie'
import AuthContext, { AuthState } from '../../config/AuthContext'
import UserContext from '../../config/UserContext'
import loadUser from './actions/loadUser'

export default ({ children }) => {
  const [authState, setAuthState] = React.useState<AuthState>('authenticating')
  const [user, setUser] = React.useState(null)
  const { cookie } = useAuthCookieListener()

  const logout = () => {
    removeCookie()
    setAuthState('unAuthenticated')
  }

  React.useEffect(() => {
    if (!cookie) {
      setAuthState('unAuthenticated')
    } else {
      loadUser({
        onSuccess: (user) => {
          setUser(user)
          setAuthState('authenticated')
        },
        onFailure: logout,
      })
    }
  }, [cookie])

  return (
    <AuthContext.Provider
      value={{
        authState,
        logout,
      }}
    >
      <UserContext.Provider
        value={{
          ...user,
          setPaymentPointer: (paymentPointer) =>
            setUser((user) => ({ ...user, paymentPointer })),
        }}
      >
        {children}
      </UserContext.Provider>
    </AuthContext.Provider>
  )
}
