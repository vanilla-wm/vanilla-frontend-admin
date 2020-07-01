import Text from '../../components/Text'
import Input from '../../components/forms/Input'
import React from 'react'
import Controllers from './components/Controllers'
import UserContext from '../../config/UserContext'
import updatePaymentPointer from './actions/updatePaymentPointer'
import messages from './index.messages'
import { FormattedMessage, injectIntl, IntlShape } from 'react-intl'

type Props = {
  intl: IntlShape
}

const Setup = ({ intl }: Props) => {
  const {
    paymentPointer: currentPaymentPointer,
    setPaymentPointer: setCurrentPaymentPointer,
  } = React.useContext(UserContext)
  const [paymentPointer, setPaymentPointer] = React.useState(
    currentPaymentPointer
  )

  const init = () => setState('init')

  const save = () => {
    updatePaymentPointer({ paymentPointer, setCurrentPaymentPointer })
    init()
  }

  const cancel = () => {
    setPaymentPointer(currentPaymentPointer)
    init()
  }

  const [state, setState] = React.useState('init')

  const inputRef = React.useRef()

  return (
    <>
      <Text md mt={32} as="h3">
        <FormattedMessage {...messages.paymentPointerTitle} />
      </Text>
      <Text mt="8px" mb={1}>
        <FormattedMessage {...messages.paymentPointerText} />
      </Text>
      <Input
        ref={inputRef}
        mt={24}
        mb="8px"
        hasCopy={false}
        value={paymentPointer}
        onChange={setPaymentPointer}
        isDisabled={state === 'init'}
        label={<FormattedMessage {...messages.label} />}
        placeholder={intl.formatMessage({ ...messages.placeholder })}
      />
      <Controllers
        state={state}
        save={save}
        cancel={cancel}
        setState={setState}
        inputRef={inputRef}
      />
    </>
  )
}

export default injectIntl(Setup)
