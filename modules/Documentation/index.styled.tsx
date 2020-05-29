import styled from 'styled-components'
import Box from '../../components/Box'

export const Snippet = styled(Box)`
  background-color: ${({
    theme: {
      color: { black },
    },
  }) => black[100]};
  border-radius: 8px;
  padding: 14px;
  margin-top: 16px;
  margin-bottom: 24px;
`
