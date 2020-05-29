import styled from 'styled-components'
import Flex from '../../components/Flex'

export const Container = styled(Flex)`
  width: 100%;
  padding: 16px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  align-items: center;
  justify-content: center;

  color: rgba(0, 0, 0, 0.62);

  background-color: ${({
    theme: {
      color: { primary },
    },
  }) => primary.base};
`
