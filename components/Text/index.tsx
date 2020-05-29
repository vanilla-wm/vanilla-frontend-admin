import styled, { css } from 'styled-components'
import Box from '../Box'

export default styled(Box)`
  color:white;
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

  ${({ secondary }: any) =>
    secondary &&
    css`
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
    `} 

    ${({
      isMuted,
      theme: {
        color: { white },
      },
    }) =>
      isMuted &&
      css`
        color: ${white[300]};
      `}
    
    
    ${({ green, theme: { color } }) =>
      green &&
      `
        color: ${color.green.base};
    `}
    
    ${({ orange, theme: { color } }) =>
      orange &&
      `
        color: ${color.orange.base};
    `}    

    ${({ inline }) =>
      inline &&
      css`
        display: inline-block;
      `}  

    ${({ truncated, theme: { media } }) =>
      truncated &&
      css`
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 150px;

        ${media.xxl`max-width: 300px;`}
      `}
    
    ${({
      isTitle,
      theme: {
        fontFamily: { secondary },
      },
    }) =>
  isTitle &&
      css`
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 48px;
        line-height: 71px;
        font-family: ${secondary};
      `}
  
`
