import React from 'react'
import { defineMessages } from 'react-intl'
import Button from '../../components/Button'

export default defineMessages({
  paymentPointerTitle: {
    id: 'PaymentPointer.title',
    defaultMessage: 'Payment Pointer',
    description: 'Payment Pointer title in Setup part',
  },
  paymentPointerText: {
    id: 'PaymentPointer.text',
    defaultMessage:
      'A payment pointer is a Web Monetization Wallet address, that we use to deliver payments to you. Learn more about <button>Web Monetization Wallets</button>.',
    description: 'Payment Pointer text in Setup part under title',
    values: {
      button: (value) => (
        <Button
          medium
          secondary
          as="a"
          href="https://webmonetization.org/#wallets"
          target="_blank"
        >
          {value}
        </Button>
      ),
    },
  },
  label: {
    id: 'PaymentPointer.label',
    defaultMessage: 'Your Payment pointer',
    description: 'Payment Pointer label in Setup input part',
  },
  placeholder: {
    id: 'PaymentPointer.placeholder',
    defaultMessage: 'Add payment pointer',
    description: 'Payment Pointer placeholder in Setup input part',
  },
})
