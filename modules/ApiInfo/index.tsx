import Text from '../../components/Text'
import Input from '../../components/forms/Input'
import React from 'react'
import UserContext from '../../config/UserContext'

export default () => {
  const { clientId, clientSecret } = React.useContext(UserContext)

  return (
    <>
      <Text md mt={24}>
        API Credentials
      </Text>
      <Input isDisabled mt={16} label="Client ID" value={clientId} />
      <Input mt={16} isDisabled label="Client Secret" value={clientSecret} />
    </>
  )
}
