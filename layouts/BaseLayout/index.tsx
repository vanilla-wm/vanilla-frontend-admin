import React from 'react'
import { Container } from './index.styled'
import Menu from '../../modules/Menu'
import Disclaimer from '../../modules/Disclaimer'

export default ({ children }) => (
  <Container>
    <Menu />
    <Disclaimer />
    {children}
  </Container>
)
