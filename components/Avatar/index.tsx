import styled from 'styled-components'
import Box from '../Box'
import noProfile from '../../assets/no-profile.png'

export default styled(Box)`
  background: url("${({ picture }) => picture ? picture : noProfile}") no-repeat center,#000000;
  background-size: 32px 32px;
  height: 32px;
  width: 32px;
  min-width: 32px;
  border-radius: 24px;
  border: 2px solid
    ${({
      theme: {
        color: { black },
      },
    }) => black[200]};
`
