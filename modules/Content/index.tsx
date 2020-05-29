import React from 'react'
import { Container, Section, SectionContent } from './index.styled'
import SectionBox from '../../components/SectionBox'
import Text from '../../components/Text'
import Input from '../../components/forms/Input'

export default () => (
  <Container>
    <Section>
      <SectionContent>
        <SectionBox>Setup</SectionBox>
        <Text primary mt={24}>
          API Credentials
        </Text>
        <Input disabled mt={16} label="Client ID" placeholder="A898as98asfgd98" />
        <Input
          mt={24}
          disabled
          label="Client Secret"
          placeholder="98asd989fdh9f4g56fgj"
        />
        <Text primary mt={24}>
          Payment pointer
        </Text>
      </SectionContent>
    </Section>
    <Section secondary>
      <SectionContent>
        <SectionBox>Documentation</SectionBox>
        <Text mt={24}>
          Lottie supports CocoaPods and Carthage (Both dynamic and static).
          Lottie is written in Swift 4.2.
        </Text>
        <Text mt={24}>
          Lottie supports CocoaPods and Carthage (Both dynamic and static).
          Lottie is written in Swift 4.2.
        </Text>
      </SectionContent>
    </Section>
  </Container>
)
