import styled from 'styled-components'
import Flex from '../../components/Flex'
import Button from '../../components/Button'

export const Container = styled(Flex)`
  height: 80px;
  justify-content: space-between;
  padding: 0 16px;
  align-items: center;
`
export const Item = styled(Flex)`
  justify-content: space-between;
  align-items: center;

  > ${Button} {
    margin-left: 20px;
  }
`
