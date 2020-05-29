import React from 'react'
import { Container, Item } from './index.styled'
import Text from '../../components/Text'
import Button from '../../components/Button'

export default () => {
  const username = 'Pele'

  return (
    <Container>
      <Item>Logo</Item>
      <Item>
        <Text>{username}</Text>
        <Button>Log out</Button>
      </Item>
    </Container>
  )
}
