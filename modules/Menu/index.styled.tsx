import styled, { css } from 'styled-components'
import Flex from '../../components/Flex'
import Text from '../../components/Text'

export const Container = styled(Flex)`
  position: relative;
  height: 80px;
  justify-content: space-between;
  padding: 0 16px;
  align-items: center;
`
export const Item = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  flex: 1 1 33%;

  > ${Text} {
    margin-right: 20px;
  }
  ${({ center }) =>
    center &&
    css`
      justify-content: center;
    `} 

    ${({ left }) =>
      left &&
      css`
        justify-content: flex-start;
      `}
  
    ${({ right }) =>
      right &&
      css`
        justify-content: flex-end;
      `}
`
