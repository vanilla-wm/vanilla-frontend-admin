import React from 'react'

type User = {
  name: string
  picture: string
  clientId: string
  clientSecret: string
  paymentPointer: string
  setPaymentPointer: (paymentPointer: string) => void
}

export default React.createContext<User>({
  name: '',
  picture: '',
  clientId: '',
  clientSecret: '',
  paymentPointer: '',
  setPaymentPointer: () => ({}),
})
