import { defineMessages } from 'react-intl';

export default defineMessages({
  intro: {
    id: 'ApiEndpoints.intro',
    defaultMessage: 'Endpoints provide interface for retrieving information about payments on your back-end server. Vanilla currently provides',
    description: 'Introduction in ApiEndpoints, about providing GraphQL API.'
  },
  authenticationTitle: {
    id: 'ApiEndpoints.authentication.title',
    defaultMessage: 'Authentication',
    description: 'The authentication title in ApiEndpoints section'
  },
  whatToUse: {
    first: {
      id: 'Authentication.whatToUse.first',
      defaultMessage: 'For requests authentication use generated ',
      description: 'First part of what to use for requests authentication'
    },
    second: {
      id: 'Authentication.whatToUse.second',
      defaultMessage: ' and',
      description: 'Connecting of what to use'
    }
  },
  whatInclude: {
    first: {
      id: 'Authentication.whatInclude.first',
      defaultMessage: 'In each request include ',
      description: 'First part of what include for requests authentication'
    },
    second: {
      id: 'Authentication.whatInclude.second',
      defaultMessage: ' header provided below.',
      description: 'Second part of what to include'
    }
  },
  endpointProof: {
    id: 'EndpointProof.title',
    defaultMessage: 'Endpoint Proof',
    description: 'The Endpoint Proof title in ApiEndpoints section'
  },
  returnsProof: {
    id: 'EndpointProof.return',
    defaultMessage: "Returns proof of payments for visitor's ",
    description: 'Explain what Endpoint Proof does'
  },
  exampleResponse: {
    id: 'Response.example',
    defaultMessage: 'Example Response',
    description: 'Response example after GraphQL query'
  }
});