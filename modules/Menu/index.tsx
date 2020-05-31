import React, { useContext } from 'react'
import { Container, Item, Wrapper } from './index.styled'
import Text from '../../components/Text'
import Button from '../../components/Button'
import Avatar from '../../components/Avatar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Burger from './components/Burger'
import PageLinks from './components/PageLinks'
import Logo from '../../assets/Logo'
import UserContext from '../../config/UserContext'
import LogoutButton from '../../components/LogoutButton'

export default () => {
  const { asPath } = useRouter()
  const { name, picture } = useContext(UserContext)

  return (
    <Wrapper>
      <Container>
        <Item left>
          <Link href="/">
            <Button as="a" tertiary>
              <Logo />
            </Button>
          </Link>
        </Item>
        <Item center desktop>
          <PageLinks asPath={asPath} />
        </Item>
        <Item right desktop>
          <Avatar picture={picture} mr="8px" />
          <Text color="white" truncated>
            {name}
          </Text>
          <LogoutButton />
        </Item>
        <Burger asPath={asPath} username={name} picture={picture} />
      </Container>
    </Wrapper>
  )
}
