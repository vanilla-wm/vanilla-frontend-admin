import React from 'react'
import Text from '../../../../components/Text'
import Button from '../../../../components/Button'
import Snippet from '../Snippet'
import { FormattedMessage } from 'react-intl'
import messages from './index.messages'

export default ({ GRAPHQL_SERVER_URI, clientId, clientSecret }) => (
  <>
    <Text mt="8px">
      <FormattedMessage {...messages.intro} />
      <Button
        secondary
        medium
        as="a"
        href={`https://${GRAPHQL_SERVER_URI}`}
        target="_blank"
      >
        GraphQL API
      </Button>
      .
    </Text>
    <Text mt="24px" semibold>
      <FormattedMessage {...messages.authenticationTitle} />
    </Text>
    <Text mt="4px">
      <FormattedMessage {...messages.whatToUse} />
    </Text>
    <Snippet
      code={`
          Authorization: Basic Base64(<clientID>:<clientSecret>) 
        `}
      language="js"
    />
    <Text mt="20px">
      <FormattedMessage {...messages.whatInclude} />
    </Text>
    <Snippet
      code={`
  Authorization: Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString(
    'base64'
  )}`}
      language="js"
    />
    <Text mt="24px" semibold>
      <FormattedMessage {...messages.endpointProof} />
    </Text>
    <Text mt="4px" medium>
      <FormattedMessage {...messages.returnsProof} />
    </Text>
    <Text mt="20px" sm>
      <FormattedMessage {...messages.graphQLQuery} />
    </Text>
    <Snippet
      code={`
  query($requestId: String!) {
    proof(requestId: $requestId) {
      rate
      total
    }
  }
  `}
      language="js"
    />
    <Text mt="20px" sm>
      <FormattedMessage {...messages.exampleResponse} />
    </Text>
    <Snippet
      code={`{
    proof: {
      total: 1340,
      rate: 1244.196843082637,
      metadata: {
        requestId: 'fbeb5308-87f9-4a33-9509-e1daf2e714b6',
        clientId: '031a4380-1905-46ba-84c6-f99e40a24506',
        contentId: null
      }
    }
  }
  `}
      language="js"
    />
  </>
)
