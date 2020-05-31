import Flex from '../../../../components/Flex'
import styled from 'styled-components'

export default styled(Flex)`
  padding: 14px;
  background-color: ${({ theme: { color } }) => color.black[100]};
  border-radius: 7px;
  justify-content: center;
  align-items: flex-start;
`
