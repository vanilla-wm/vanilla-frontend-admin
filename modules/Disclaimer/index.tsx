import React from 'react'
import { Container, Description } from './index.styled'
import Button from '../../components/Button'

export default () => (
  <Container>
    <Description>
      This is an experimental project made by{' '}
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
