import React from 'react'
import { Container } from './index.styled'
import Menu from '../../modules/Menu'
import Disclaimer from '../../modules/Disclaimer'
import Authentication from '../../modules/Authentication'
import useAuth from '../../hooks/useAuth'
import Loader from '../../modules/Loader'

export default ({ children }) => {
  const { authState } = useAuth()

  return (
    <Container>
      {authState === 'authenticated' && (
        <>
          <Menu />
          <Disclaimer />
          {children}
        </>
      )}
      {authState === 'unAuthenticated' && <Authentication />}
      {authState === 'authenticating' && <Loader />}
    </Container>
  )
}
