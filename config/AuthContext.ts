import React from 'react'

export type AuthState = 'authenticated' | 'unAuthenticated' | 'authenticating'

type Context = {
  authState: AuthState
  logout: () => void
}

export default React.createContext<Context>({
  authState: 'authenticating',
  logout: () => ({}),
})
