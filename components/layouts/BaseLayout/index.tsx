import React from 'react'
import { Container } from './index.styled'
import Menu from '../../../modules/Menu'
import SignInForm from '../../../modules/SignInForm'
import Loader from '../../../modules/Loader'
import AuthContext from '../../../config/AuthContext'
import Disclaimer from '../../../modules/Disclaimer'

export default ({ children }) => {
  const { authState } = React.useContext(AuthContext)
  return (
    <Container>
      {authState === 'authenticated' && (
        <>
          <Menu />
          <Disclaimer />
          {children}
        </>
      )}
      {authState === 'unAuthenticated' && <SignInForm />}
      {authState === 'authenticating' && <Loader />}
    </Container>
  )
}
