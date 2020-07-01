import Text from '../../components/Text'
import Input from '../../components/forms/Input'
import React from 'react'
import UserContext from '../../config/UserContext'
import messages from './index.messages'
import { FormattedMessage } from 'react-intl'

export default () => {
  const { clientId, clientSecret } = React.useContext(UserContext)

  return (
    <>
      <Text md mt={24} as="h3">
        <FormattedMessage {...messages.apiCredentials} />
      </Text>
      <Input
        isDisabled
        mt={16}
        label={<FormattedMessage {...messages.clientIdLabel} />}
        value={clientId}
      />
      <Input
        mt={16}
        isDisabled
        label={<FormattedMessage {...messages.clientSecretLabel} />}
        value={clientSecret}
      />
    </>
  )
}
