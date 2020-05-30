import { Container, InputComponent, InputContainer, Copy } from './index.styled'
import Text from '../../Text'
import React from 'react'
import CopyIcon from '../../../assets/CopyIcon'

export default React.forwardRef(
  (
    {
      label,
      hasCopy = true,
      isDisabled,
      placeholder,
      defaultValue,
      value,
      onChange,
      ...restProps
    }: any,
    ref
  ) => {
    const [isCopied, setCopied] = React.useState(false)
    const timeoutRef = React.useRef()

    const copyToClipboard = () => {
      navigator.clipboard.writeText(value)
      setCopied(true)

      clearTimeout(timeoutRef.current)

      // @ts-ignore
      timeoutRef.current = setTimeout(() => setCopied(false), 5000)
    }

    return (
      <Container {...restProps}>
        <Text mb={1} sm color="white">
          {label}
        </Text>
        <InputContainer>
          {hasCopy && (
            <Copy onClick={copyToClipboard}>
              <CopyIcon />
            </Copy>
          )}
          <InputComponent
            ref={ref}
            hasCopy={hasCopy}
            disabled={isDisabled}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </InputContainer>
        {hasCopy && (
          <Text isHidden={!isCopied} xs color="primary" mt="4px">
            Copied!
          </Text>
        )}
      </Container>
    )
  }
)
