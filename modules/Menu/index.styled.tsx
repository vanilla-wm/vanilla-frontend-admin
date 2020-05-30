import styled, { css } from 'styled-components'
import Flex from '../../components/Flex'
import Text from '../../components/Text'
import Button from '../../components/Button'
import Box from '../../components/Box'

export const Wrapper =styled(Box)`
  padding: 0 16px;
  ${({ theme: { media } }) => media.md`padding: 0 32px;`};
`

export const Container = styled(Flex)`
  position: relative;
  height: 80px;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
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
        ${Button} {
          margin: 0;
        }
      `}
  
    ${({ right }) =>
      right &&
      css`
        justify-content: flex-end;
         ${Button} {
          margin: 0;
        }
      `}    

    ${({ desktop, theme: { media } }) =>
      desktop &&
      css`
        display: none;
        ${media.md`display:flex`}
      `}
      ${({ mobile, theme: { media } }) =>
        mobile &&
        css`
          ${media.md`display:none`}
        `}
`
