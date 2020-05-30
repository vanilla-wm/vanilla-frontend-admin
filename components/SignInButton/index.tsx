import styled from 'styled-components'
import getConfig from 'next/config'
import GoogleIcon from '../../assets/GoogleIcon'
import React from 'react'
import { BaseButton } from '../Button'
import Box from '../Box'

import Flex from '../Flex'

const Button = styled(BaseButton)`
  display: flex;
  background-color: ${({ theme: { color } }) => color.primary.base};
  justify-content: center;
  align-items: center;
  color: #000000;
  padding: 8px 16px 8px 8px;
  border-radius: 24px;
  margin-top: 32px;

  &:hover {
    background-color: ${({ theme: { color } }) => color.primary.medium};
  }

  > div {
    font-family: ${({ theme: { fontFamily } }) => fontFamily.secondary};
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 140%;
  }
`

const IconWrapper = styled(Flex)`
  background-size: 32px 32px;
  height: 32px;
  width: 32px;
  align-items: center;
  min-width: 32px;
  background-color: black;
  border-radius: 24px;
  justify-content: center;
`
export default () => {
  const { publicRuntimeConfig } = getConfig()

  return (
    <Flex>
      <Button as="a" href={publicRuntimeConfig.AUTH_SERVER_URL}>
        <IconWrapper>
          <GoogleIcon />
        </IconWrapper>
        <Box ml="14px">Sign in with Google</Box>
      </Button>
    </Flex>
  )
}
