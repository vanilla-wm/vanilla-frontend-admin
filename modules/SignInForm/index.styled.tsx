import styled, { css } from 'styled-components'
import Flex from '../../components/Flex'
import Box from '../../components/Box'

export const Container = styled(Flex)`
  height: 100vh;
  flex-direction: column;
  width: 100%;
  overflow: hidden;

  ${({ theme: { media } }) => media.lg`
    flex-direction: row;
  `}
`

export const Shape = styled(Box)`
  position: absolute;
  background: url("${({ shape }) => shape}") no-repeat center;
  height: 550px;
  width: 300px;
  left:${({ left }) => left};
  top:${({ top }) => top};
  right:${({ right }) => right};
  bottom:${({ bottom }) => bottom};
  
  animation: float ${({ float = 6 }) => float}s ease-in-out infinite;
  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translateY(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translateY(-20px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translateY(0px);
    }
  }
`

export const Section = styled(Flex)`
  position: relative;
  flex: 0 0 50%;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  background-color: black;

  ${({ secondary, theme: { media } }) =>
    secondary &&
    css`
      > * {
        display: none;
      }
      min-width: 1000px;
      ${media.lg`> * {display:flex;}`}
    `}

  svg {
    height: 57px;
  }
`
