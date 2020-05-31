import Box from '../../../../components/Box'
import styled from 'styled-components'

export const Container = styled(Box)`
  padding: 14px;
  background-color: ${({ theme: { color } }) => color.black[100]};
  border-radius: 7px;
  overflow-y: scroll;
  white-space: nowrap;
  color: ${({ theme: { color } }) => color.orange.base};
  .token {
    line-height: 160%;
  }

  .token.operator,
  .token.punctuation {
    color: white;
  }
  .token.string,
  .token.attr-value {
    color: ${({ theme: { color } }) => color.green.base};
  }
  .token.attr-name,.token.function {
    color: ${({ theme: { color } }) => color.primary.base};
  }
  .toolbar {
    display: none;
  }
`
