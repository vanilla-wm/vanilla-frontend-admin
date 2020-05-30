import styled, { css } from 'styled-components'
import Flex from '../../components/Flex'

export const Container = styled(Flex)`
  height: 100vh;
  flex-direction: column;
  width: 100%;

  ${({ theme: { media } }) => media.md`
    flex-direction: row;
  `}
`

export const Section = styled(Flex)`
  flex: 0 0 50%;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;
  background-color: black;

  ${({ theme: { media }, secondary }) =>
    css`
      ${secondary &&
      `
        background-color: #202020;
      `}

      ${media.md`background-color:transparent;`}
    `}
`
