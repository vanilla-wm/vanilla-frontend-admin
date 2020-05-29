import styled, { css } from 'styled-components'
import Box from '../../components/Box'
import Flex from '../../components/Flex'

export const Container = styled(Flex)`
  height: calc(100vh - 80px);
`

export const SectionContent = styled(Box)`
  padding: 40px;
  max-width: 530px;
  width: 100%;
`

export const Section = styled(Flex)`
  flex: 1 1 50%;
  justify-content: center;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #202020;
    `}
`