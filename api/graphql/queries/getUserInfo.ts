import gql from 'graphql-tag'

export default gql`
  query {
    me {
      clientId: sub
      name
      picture
      clientSecret: secret
      paymentPointer
    }
  }
`
