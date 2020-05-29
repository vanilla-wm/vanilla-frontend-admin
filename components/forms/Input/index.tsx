import { Container, InputComponent, InputContainer } from './index.styled'
import Text from '../../Text'
import React from 'react'

export default ({ label, isDisabled, placeholder, ...restProps }: any) => (
  <Container {...restProps}>
    <Text mb={1} secondary>
      {label}
    </Text>
    <InputContainer>
      <InputComponent
        disabled={isDisabled}
        type="text"
        placeholder={placeholder}
      />
    </InputContainer>
  </Container>
)
