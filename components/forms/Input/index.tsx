import { Container, InputComponent, InputContainer, Copy } from './index.styled'
import Text from '../../Text'
import React from 'react'
import CopyIcon from '../../../assets/CopyIcon'

export default ({ label, isDisabled, placeholder,defaultValue, ...restProps }: any) => {
  const [value, setValue] = React.useState(defaultValue)
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value)
  }

  return (
    <Container {...restProps}>
      <Text mb={1} secondary isMuted>
        {label}
      </Text>
      <InputContainer>
        {isDisabled && (
          <Copy onClick={copyToClipboard}>
            <CopyIcon/>
          </Copy>
        )}
        <InputComponent
          disabled={isDisabled}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </InputContainer>
    </Container>
  )
}
