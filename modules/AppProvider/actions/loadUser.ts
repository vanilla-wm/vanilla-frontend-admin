import ApiClient from '../../../api/client'
import { getUserInfo } from '../../../api/graphql/queries/getUserInfo'

export default ({ onSuccess, onFailure }) => {
  // ApiClient.query({
  //   query: updatePaymentPointer,
  // })

  onSuccess({
    name: 'John',
    paymentPointer: 'jackie',
    clientId: '1234',
    clientSecret: '231312',
    photoPath: '2131312',
  })
}
