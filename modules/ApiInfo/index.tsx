import Text from '../../components/Text'
import Input from '../../components/forms/Input'
import React from 'react'

export default () => (
  <>
    <Text primary mt={24}>
      API Credentials
    </Text>
    <Input
      isDisabled
      mt={16}
      label="Client ID"
      value="xxxx"
      placeholder="A898as98asfgd98"
    />
    <Input
      mt={24}
      isDisabled
      label="Client Secret"
      value="xxxx"
      placeholder="98asd989fdh9f4g56fgj"
    />
  </>
)
