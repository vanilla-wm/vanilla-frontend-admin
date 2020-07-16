import React from 'react'
import { FormattedMessage } from 'react-intl'
import Text from '../../components/Text'
import { Container, Footer } from './index.styled'
import Box from '../../components/Box'
import Button from '../../components/Button'
import messages from './index.messages'

export default () => (
  <>
    <Container>
      <Box mt="50px">
        <Text xl color="primary" isMono as="h1">
          <FormattedMessage {...messages.comingSoon} />
        </Text>
      </Box>
      <Text color="white" lg mt="16px">
        <FormattedMessage {...messages.notReady} />
      </Text>
    </Container>
    <Footer as="footer">
      <Text lg semibold color="black" mr="24px">
        <FormattedMessage {...messages.askForHelp} />
      </Text>
      <Button inversed as="a" href="mailto:contact@vanilla.so" target="_blank">
        <FormattedMessage {...messages.contactButton} />
      </Button>
    </Footer>
  </>
)
