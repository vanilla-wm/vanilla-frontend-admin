import React from 'react'
import Text from '../../components/Text'
import { Container, Section, Shape } from './index.styled'
import Box from '../../components/Box'
import SignInButton from '../../components/SignInButton'
import Logo from '../../assets/Logo'
import shape1 from '../../assets/shape-1.svg'
import shape2 from '../../assets/shape-2.svg'
import shape3 from '../../assets/shape-3.svg'
import shape4 from '../../assets/shape-4.svg'
import Button from '../../components/Button'

export default () => (
  <Container>
    <Section>
      <Box>
        <Button as="a" tertiary noMargin href="https://vanilla.so">
          <Logo />
        </Button>
        <Text xxl isMono padding="24px 0 16px 0">
          Vanilla Admin
        </Text>
        <Text color="white" maxWidth="400px">
          Manage your account, analyse Web Monetization transactions, or split
          the revenue with other content creators
        </Text>
        <SignInButton />
      </Box>
    </Section>
    <Section secondary>
      <Shape shape={shape1} left={0} top={0} />
      <Shape shape={shape2} float={7} right={0} top={0} />
      <Shape shape={shape3} float={9} left="270px" bottom="293px" />
      <Shape shape={shape4} float={4} right={0} bottom={0} />
    </Section>
  </Container>
)
