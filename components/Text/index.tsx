import styled, { css } from 'styled-components'
import Box from '../Box'

export default styled(Box)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 120%;

  ${({ primary }: any) =>
    primary &&
    css`
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;
    `}

  ${({
    secondary,
    theme: {
      color: { white },
    },
  }: any) =>
    secondary &&
    css`
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: ${white[300]};
    `}
`
