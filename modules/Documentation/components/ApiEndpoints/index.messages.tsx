import React from 'react'
import { defineMessages } from 'react-intl'
import { Code } from '../../index.styled'

export default defineMessages({
  intro: {
    id: 'ApiEndpoints.intro',
    defaultMessage:
      'Endpoints provide interface for retrieving information about payments on your back-end server. Vanilla currently provides ',
    description: 'Introduction in ApiEndpoints, about providing GraphQL API.',
  },
  authenticationTitle: {
    id: 'ApiEndpoints.authentication.title',
    defaultMessage: 'Authentication',
    description: 'The authentication title in ApiEndpoints section',
  },
  whatToUse: {
    id: 'Authentication.whatToUse',
    defaultMessage:
      'For requests authentication use generated <code>clientID</code> and <code>clientSecret</code>.',
    description: 'What to use for requests authentication',
    values: {
      code: (value) => <Code>{value}</Code>,
    },
  },
  whatInclude: {
    id: 'Authentication.whatInclude',
    defaultMessage:
      'In each request include <code>Authorization</code> header provided below.',
    description: 'What include for requests authentication',
    values: {
      code: (value) => <Code>{value}</Code>,
    },
  },
  endpointProof: {
    id: 'EndpointProof.title',
    defaultMessage: 'Endpoint Proof',
    description: 'The Endpoint Proof title in ApiEndpoints section',
  },
  returnsProof: {
    id: 'EndpointProof.return',
    defaultMessage:
      "Returns proof of payments for visitor's <code>requestId</code>.",
    description: 'Explain what Endpoint Proof does',
    values: {
      code: (value) => <Code>{value}</Code>,
    },
  },
  graphQLQuery: {
    id: 'GraphQLQuery',
    defaultMessage: 'GraphQL Query',
    description: 'GraphQL Query',
  },
  exampleResponse: {
    id: 'Response.example',
    defaultMessage: 'Example Response',
    description: 'Response example after GraphQL query',
  },
})
