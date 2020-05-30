import ApiClient from '../../../api/client'
import getUserInfo from '../../../api/graphql/queries/getUserInfo'

export default ({ onSuccess, onFailure }) => {
  ApiClient.query({
    query: getUserInfo,
  })
    .then(
      ({
        data: {
          me: { name, clientId, clientSecret, picture, paymentPointer },
        },
      }) => {
        onSuccess({
          name,
          clientId,
          clientSecret,
          paymentPointer: paymentPointer || '',
          picture,
        })
      }
    )
    .catch(onFailure)
}
