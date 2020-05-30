import styled from 'styled-components'
import Box from '../../../../components/Box'
import Flex from '../../../../components/Flex'

export const Menu = styled(Box)`
  position: fixed;
  left: 0;
  top: 80px;
  height: 100vh;
  background: black;
  width: 100%;
  z-index: 1;
  display: flex;
  padding: 0 16px;
  flex-direction: column;
  align-items: center;
`
export const Links = styled(Flex)`
  border-bottom: 1px solid ${({ theme: { color } }) => color.black[100]};
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const User = styled(Flex)`
  justify-content: center;
  align-items: center;
`
export const UserInfo = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
