import { createGlobalStyle, css } from 'styled-components'
import theme from '../theme'

type Props = {
  theme: typeof theme
}

export default createGlobalStyle`
  body {
    position: relative;
    font-size: 16px;
    margin:0 auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white;
    background-color: black;
  
    ${({ theme }: Props) =>
      css`
        * {
          font-family: ${theme.fontFamily.base};
        }
      `}

  }
`
