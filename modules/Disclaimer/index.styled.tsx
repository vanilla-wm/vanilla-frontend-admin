import styled from 'styled-components'
import Flex from '../../components/Flex'
import Text from '../../components/Text'

export const Container = styled(Flex)`
  width: 100%;
  padding: 16px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  align-items: center;
  justify-content: center;

  color: ${({
    theme: {
      color: { primary },
    },
  }) => primary.base};

  background-color: ${({
    theme: {
      color: { white },
    },
  }) => white[100]};
`

export const Description = styled(Text).attrs({
  inline: true,
  medium: true,
  color: 'primary',
})`
  margin: 0 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
  text-align: center;
`
