import updatePaymentPointer from '../../../api/graphql/queries/updatePaymentPointer'
import ApiClient from '../../../api/client'

export default ({ paymentPointer, setCurrentPaymentPointer }) => {
  ApiClient.query({
    query: updatePaymentPointer,
    variables: {
      paymentPointer,
    },
  })
    .then(() => setCurrentPaymentPointer(paymentPointer))
    .catch(() => ({}))
}
