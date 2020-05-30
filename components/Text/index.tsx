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
    selectedColor === 'black' &&
    `
        color: ${color.black.base};
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

export const getVariants = ({
  xs,
  md,
  sm,
  xl,
  lg,
  xxl,
  theme: { media },
}) => css`
  ${
    md &&
    `
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;
  `
  }
  ${
    sm &&
    `
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
  `
  }
  ${
    xxl &&
    css`
      margin: 0;
      font-weight: bold;

      font-size: 36px;
      line-height: 1;
      ${media.md`font-size: 48px;`}
    `
  } 
  ${
    xl &&
    css`
      margin: 0;
      font-weight: bold;
      font-size: 36px;
      line-height: 53px;
    `
  } 
  ${
    lg &&
    css`
      font-weight: normal;
      font-size: 24px;
      line-height: 140%;
    `
  } 

  ${
    xs &&
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
  line-height: 140%;
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

  ${({ semibold }) =>
    semibold &&
    css`
      font-weight: 600;
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
