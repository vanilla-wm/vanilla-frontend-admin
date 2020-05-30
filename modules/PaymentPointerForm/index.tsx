import Text from '../../components/Text'
import Input from '../../components/forms/Input'
import React from 'react'
import Button from '../../components/Button'
import Controllers from './components/Controllers'
import UserContext from '../../config/UserContext'

export default () => {
  const { paymentPointer: defaultPaymentPointer } = React.useContext(
    UserContext
  )
  const [paymentPointer, setPaymentPointer] = React.useState(
    defaultPaymentPointer
  )
  const [state, setState] = React.useState('init')

  const inputRef = React.useRef()

  return (
    <>
      <Text md mt={32}>
        Payment pointer
      </Text>
      <Text mt="8px" mb={1} color="white">
        Payment Pointers are a standardized identifier for payment accounts. In
        the same way that an email address provides.
      </Text>
      <Button
        href="https://webmonetization.org/"
        target="_blank"
        as="a"
        secondary
        medium
      >
        More Info
      </Button>

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
        setState={setState}
        inputRef={inputRef}
        paymentPointer={paymentPointer}
        setPaymentPointer={setPaymentPointer}
      />
    </>
  )
}
