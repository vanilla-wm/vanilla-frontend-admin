import styled from 'styled-components'
import Flex from '../../components/Flex'
export const Container = styled(Flex)`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 150px 16px 0 16px;
  text-align: center;
`

export const Footer = styled(Flex)`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme: { color } }) => color.primary.base};
  color: white;
  padding: 40px;
  justify-content: center;
  align-items: center;
`
