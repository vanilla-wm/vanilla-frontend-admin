import React from 'react'
import { Container, Section, SectionContent } from './index.styled'
import SectionBox from '../../components/SectionBox'
import ApiInfo from '../ApiInfo'
import PaymentPointerForm from '../PaymentPointerForm'
import Documentation from '../Documentation'
import { FormattedMessage } from 'react-intl'
import messages from './index.messages'

export default () => (
  <Container>
    <Section>
      <SectionContent>
        <SectionBox as="h2">
          <FormattedMessage {...messages.setup} />
        </SectionBox>
        <ApiInfo />
        <PaymentPointerForm />
      </SectionContent>
    </Section>
    <Section secondary>
      <SectionContent>
        <SectionBox as="h2">
          <FormattedMessage {...messages.documentation} />
        </SectionBox>
        <Documentation />
      </SectionContent>
    </Section>
  </Container>
)
