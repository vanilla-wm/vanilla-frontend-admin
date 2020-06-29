import React from 'react';
import Text from '../../../../components/Text';
import Button from '../../../../components/Button';
import { Code } from '../../index.styled';
import Snippet from '../Snippet';

type Props = {
  GRAPHQL_SERVER_URI: string
  clientId: string
  clientSecret: string
}

export default ({ GRAPHQL_SERVER_URI, clientId, clientSecret }: Props) => (
  <>
    <Text mt="8px">
      Endpoints provide interface for retrieving information about payments on
          your back-end server. Vanilla currently provides{' '}
      <Button
        secondary
        medium
        as="a"
        href={`https://${GRAPHQL_SERVER_URI}`}
        target="_blank"
      >
        GraphQL API.
      </Button>
    </Text>
    <Text mt="24px" semibold>
      Authentication
        </Text>
    <Text mt="4px">
      For requests authentication use generated <Code>clientID</Code> and{' '}
      <Code>clientSecret</Code>.
    </Text>
    <Snippet
      code={`
          Authorization: Basic Base64(<clientID>:<clientSecret>) 
        `}
      language="js"
    />
    <Text mt="20px">
      In each request include <Code>Authorization</Code> header provided
          below.
    </Text>
    <Snippet
      code={`
  Authorization: Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`}
      language="js"
    />
    <Text mt="24px" semibold>
      Endpoint Proof
        </Text>
    <Text mt="4px" medium>
      Returns proof of payments for visitor's <Code>requestId</Code>
    </Text>
    <Text mt="20px" sm>
      GraphQL Query
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
      Example Response
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
);