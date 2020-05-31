import { Item } from '../../index.styled'
import Button from '../../../../components/Button'
import BurgerIcon from '../../../../assets/BurgerIcon'
import CloseIcon from '../../../../assets/CloseIcon'
import React from 'react'
import { Links, Menu, User, UserInfo } from './index.styled'
import Avatar from '../../../../components/Avatar'
import Text from '../../../../components/Text'
import Box from '../../../../components/Box'
import { useMenu } from '../../hooks/useMenu'
import PageLinks from '../PageLinks'
import LogoutButton from '../../../../components/LogoutButton'

export default ({ asPath, name, picture }) => {
  const { isOpened, toggle } = useMenu(true)

  return (
    <Item right mobile>
      <Button tertiary onClick={toggle} noMargin>
        {!isOpened ? <BurgerIcon /> : <CloseIcon />}
      </Button>
      {isOpened && (
        <Menu onClick={toggle}>
          <Links>
            <PageLinks asPath={asPath} />
          </Links>
          <UserInfo>
            <User mt="20px">
              <Avatar picture={picture} mr="8px" />
              <Text as="span" color="white">
                {name}
              </Text>
            </User>
            <Box mt="20px">
              <LogoutButton />
            </Box>
          </UserInfo>
        </Menu>
      )}
    </Item>
  )
}
