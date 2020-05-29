import styled from 'styled-components'
import Box from '../Box'

export default styled(Box)`
  display: inline-block;
  padding: 8px 40px;
  color: black;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  
  font-family: ${({
    theme: {
      fontFamily: { secondary },
    },
  }) => secondary};

  background: ${({
    theme: {
      color: { primary },
    },
  }) => primary.base};
`
