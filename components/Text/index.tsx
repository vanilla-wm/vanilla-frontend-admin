import styled, { css } from 'styled-components'
import Box from '../Box'

export const getColors = ({ color: selectedColor, theme: { color } }) => css`
  ${
    selectedColor === 'green' &&
    `
        color: ${color.green.base};
  `
  }
  
  ${
    selectedColor === 'orange' &&
    `
        color: ${color.orange.base};
  `
  }
  
  ${
    selectedColor === 'primary' &&
    `
        color: ${color.primary.base};
  `
  }
  
  ${
    selectedColor === 'white' &&
    `
        color: ${color.white[300]};
  `
  }  
  ${
    selectedColor === 'inherit' &&
    `
        color: inherit;
  `
  }
`

export const getVariants = ({ primary, secondary, tertiary, note }) => css`
  ${
    primary &&
    `
           font-weight: 600;
      font-size: 18px;
      line-height: 21px;
  `
  }
  ${
    secondary &&
    `
  font-weight: 500;
      font-size: 14px;
      line-height: 16px;
  `
  }
  ${
    tertiary &&
    `    padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 48px;
        line-height: 71px;`
  } 

  ${
    note &&
    `        
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
    font-size: 12px;
    line-height: 120%;
    font-weight: 500;
  `
  }`

export default styled(Box)`
  color:white;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 120%;
  ${getVariants}
  ${getColors}
 
  ${({ inline }) =>
    inline &&
    css`
      display: inline-block;
    `} 
  
  ${({ medium }) =>
    medium &&
    css`
      font-weight: 500;
    `}
  
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}  

  ${({ truncated, theme: { media } }) =>
    truncated &&
    css`
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 100px;

      ${media.xl`max-width: 200px;`}
      ${media.xxl`max-width: 300px;`}
    `}
    
    ${({
      isMono,
      theme: {
        fontFamily: { secondary },
      },
    }) =>
      isMono &&
      css`
        font-family: ${secondary};
      `} 
      
    ${({ isHidden }) =>
      isHidden &&
      css`
        opacity: 0;
      `}
     

`
