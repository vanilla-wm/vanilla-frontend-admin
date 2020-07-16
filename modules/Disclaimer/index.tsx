import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Container, Description } from './index.styled'
import Button from '../../components/Button'
import messages from './index.messages'

export default () => (
  <Container>
    <Description>
      <FormattedMessage {...messages.experimentalProjectMessage} />
      <Button
        as="a"
        href="https://www.cinnamon.video"
        target="_blank"
        secondary
        color="primary"
        medium
      >
        Cinnamon
      </Button>
    </Description>
  </Container>
)
