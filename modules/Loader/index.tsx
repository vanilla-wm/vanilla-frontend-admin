import React from 'react'
import { Container } from './index.styled'
import Box from '../../components/Box'
import Logo from '../../assets/Logo'

export default () => (
  <Container>
    <Box>
      <Logo />
    </Box>
      <Box mt="12px">Loading...</Box>
  </Container>
)
