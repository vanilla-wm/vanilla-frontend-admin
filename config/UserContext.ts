import React from 'react'

type User = {
  name: string
  photoPath: string
  clientId: string
  clientSecret: string
  paymentPointer: string
  setPaymentPointer: (paymentPointer: string) => void
}

export default React.createContext<User>({
  name: '',
  photoPath: '',
  clientId: '',
  clientSecret: '',
  paymentPointer: '',
  setPaymentPointer: () => ({}),
})
