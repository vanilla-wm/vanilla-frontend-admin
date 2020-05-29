import styled from 'styled-components'
import Box from '../../../components/Box'

export const Container = styled(Box)``

export const InputComponent = styled.input`
  outline: none;
  appearance: none;
  border: none;
  padding: 14px 16px;
  width: 100%;
  border-radius: 7px;

  &,
  &::placeholder {
    font-size: 16px;
    line-height: 19px;

    background-color: ${({
      theme: {
        color: { black },
      },
    }) => black[100]};

    color: ${({
      theme: {
        color: { black },
      },
    }) => black[400]};
  }
`

export const InputContainer = styled(Box)`
  position: relative;
`
