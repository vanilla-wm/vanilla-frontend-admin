import Text from '../../components/Text'
import React from 'react'
import { Container, Footer } from './index.styled'
import Box from '../../components/Box'
import Button from '../../components/Button'

export default () => (
  <>
    <Container>
      <Box mt="50px">
        <Text xl color="primary" isMono as="h1">
          Coming soon
        </Text>
      </Box>
      <Text color="white" lg mt="16px">
        Unfortunately, this feature is not ready.
      </Text>
    </Container>
    <Footer as="footer">
      <Text lg semibold color="black" mr="24px">
        Do you want to help?
      </Text>
      <Button inversed as="a" href="mailto:contact@vanilla.so" target="_blank">
        Contact us
      </Button>
    </Footer>
  </>
)
