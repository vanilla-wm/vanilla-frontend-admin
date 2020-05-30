import Text from '../../components/Text'
import React from 'react'
import { Container } from './index.styled'
import Box from '../../components/Box'

export default () => (
  <Container>
    <Box mt="50px">
      <Text tertiary isMono as="h1">
        Coming soon
      </Text>
    </Box>
    <Text mt="32px">Bla bla bla bla text</Text>
  </Container>
)
