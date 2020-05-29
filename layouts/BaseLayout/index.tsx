import React from 'react'
import { Container } from './index.styled'
import Menu from '../../modules/Menu'

export default ({ children }) => (
  <Container>
    <Menu />
    {children}
  </Container>
)
