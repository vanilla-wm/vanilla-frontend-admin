import gql from 'graphql-tag'

export default gql`
  query updatePaymentPointer($paymentPointer: String!) {
    updatePaymentPointer(value: $paymentPointer)
  }
`
