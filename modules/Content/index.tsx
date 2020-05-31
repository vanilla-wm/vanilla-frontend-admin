import React from 'react'
import { Container, Section, SectionContent } from './index.styled'
import SectionBox from '../../components/SectionBox'
import ApiInfo from '../ApiInfo'
import PaymentPointerForm from '../PaymentPointerForm'
import Documentation from '../Documentation'

export default () => (
  <Container>
      <Section>
        <SectionContent>
          <SectionBox as="h2">Setup</SectionBox>
          <ApiInfo />
          <PaymentPointerForm />
        </SectionContent>
      </Section>
      <Section secondary>
        <SectionContent>
          <SectionBox as="h2">Documentation</SectionBox>
          <Documentation />
        </SectionContent>
      </Section>
  </Container>
)
