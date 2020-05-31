import styled, { css } from 'styled-components'
import Box from '../../components/Box'
import Flex from '../../components/Flex'

export const Container = styled(Flex)`
  min-height: calc(100vh - 134px);
  flex-direction: column;
  width: 100%;
  max-width: 1440px;

  ${({ theme: { media } }) => media.md`
    flex-direction: row;
  `}
`

export const SectionContent = styled(Box)`
  margin: 40px 16px;
  overflow: hidden;
  ${({ theme: { media } }) => media.md`  margin: 40px 32px;`};

  max-width: 530px;
  width: 100%;
`

export const Section = styled(Flex)`
  flex: 0 0 auto;
  justify-content: center;

  ${({ theme: { media } }) =>
    css`
      background-color: black;
      ${media.md`background-color: transparent;
        flex: 1 1 50%;
      
      `}
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #202020;
    `}
`
