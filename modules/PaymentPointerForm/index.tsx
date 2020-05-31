import Text from '../../components/Text'
import Input from '../../components/forms/Input'
import React from 'react'
import Button from '../../components/Button'
import Controllers from './components/Controllers'
import UserContext from '../../config/UserContext'
import updatePaymentPointer from './actions/updatePaymentPointer'

export default () => {
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
        Payment Pointer
      </Text>
      <Text mt="8px" mb={1} >
        A payment pointer is a Web Monetization Wallet address, that we use to
        deliver payments to you. Learn more about{' '}
        <Button
          medium
          secondary
          as="a"
          href="https://webmonetization.org/#wallets"
          target="_blank"
        >
          Web Monetization Wallets
        </Button>
        .
      </Text>
      <Input
        ref={inputRef}
        mt={24}
        mb="8px"
        hasCopy={false}
        value={paymentPointer}
        onChange={setPaymentPointer}
        isDisabled={state === 'init'}
        label="Your Payment pointer"
        placeholder="Add payment pointer"
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
