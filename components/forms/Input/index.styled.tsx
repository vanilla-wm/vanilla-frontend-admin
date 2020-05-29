import styled from 'styled-components'
import Box from '../../../components/Box'
import { BaseButton } from '../../Button'

export const Container = styled(Box)``

export const InputComponent = styled.input`
  box-sizing: border-box;
  outline: none;
  appearance: none;
  border: none;
  font-weight: 500;
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
  }

  &::placeholder {
    color: ${({
      theme: {
        color: { white },
      },
    }) => white[400]};
  }
  & {
    color: ${({
      theme: {
        color: { white },
      },
    }) => white[300]};
  }

  &:disabled {
    padding-right: 24px;
  }
`

export const InputContainer = styled(Box)`
  position: relative;
`

export const Copy = styled(BaseButton)`
  position: absolute;
  right: 12px;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  transition: color 0.2s ease-in-out;
  color: ${({ theme: { color } }) => color.primary.base};
  &:hover {
    color: ${({ theme: { color } }) => color.primary.medium};
  }
`
