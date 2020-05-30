import React from 'react'
import SplitLayout from '../../layouts/SplitLayout'
import Text from '../../components/Text'
import { Container, Section } from './index.styled'
import Box from '../../components/Box'
import SignInButton from '../../components/SignInButton'

export default () => (
  <SplitLayout>
    <Container>
      <Section>
        <Box>
          <Text tertiary isMono as="h1">
            Vanilla Admin
          </Text>
          <Text color="white" mt="24px" maxWidth="400px">
            Blabalbalba Blabalbalba Blabalbalba Blabalbalba Blabalbalba
            Blabalbalba Blabalbalba
          </Text>
          <SignInButton />
        </Box>
      </Section>
      <Section/>
    </Container>
  </SplitLayout>
)
