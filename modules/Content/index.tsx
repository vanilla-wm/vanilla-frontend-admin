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
          <SectionBox>Setup</SectionBox>
          <ApiInfo />
          <PaymentPointerForm />
        </SectionContent>
      </Section>
      <Section secondary>
        <SectionContent>
          <SectionBox>Documentation</SectionBox>
          <Documentation />
        </SectionContent>
      </Section>
  </Container>
)
