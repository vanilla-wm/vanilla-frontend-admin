import React from 'react'
import Text from '../../components/Text'
import Button from '../../components/Button'
import Snippet from './components/Snippet'
import { Container } from './index.styled'
import UserContext from '../../config/UserContext'
import getConfig from 'next/config'

const Heading = (props) => <Text as="h3" md mt="24px" {...props} />

export default () => {
  const { clientId, clientSecret } = React.useContext(UserContext)
  const {
    publicRuntimeConfig: { ILP_SERVER_URL },
  } = getConfig()

  return (
    <Container>
      <Text mt={24}>
        Vanilla provides Web Monetization Verification features for applications that require higher level of flexibility.


        Vanilla provides{' '}
        <Text as="span" color="primary">
          Web Monetization
        </Text>{' '}
        Verification features for applications that require higher level of flexibility.
      </Text>
      <Heading>How it works</Heading>
      <Text mt={24}>
        Follow the steps on{' '}
        <Button
          href="https://webmonetization.org/docs/getting-started"
          as="a"
          target="_blank"
          noMargin
          secondary
          medium
        >
          webmonetization.org
        </Button>
        .
      </Text>
      <Text>
        After successful set up of the web monetized wallet. Get your payment
        pointer.
      </Text>
      <Text  color="orange" medium mt="12px">
        Add your payment pointer to{' '}
        <Text as="span" color="primary">
          Vanilla Admin.
        </Text>&nbsp;⚠️
      </Text>
      <Text mt={12}>
        Copy your Vanilla generated <code>{`<meta>`}</code> tag and add it to
        the <code>{`<head>`}</code> section of each page you want to monetize.
      </Text>
      <Snippet
        code={`<meta name="monetization" content="${ILP_SERVER_URL}/${clientId}" />`}
        language="html"
      />
      <Text mt={24} mb="4px">
        After that you are able to verify every visitor's request against the
        payment on your back-end Server. All payments go straight to your wallet
        identified by the payment pointer in{' '}
        <Text as="span" color="primary">
          Vanilla Admin
        </Text>
        .
      </Text>
      <Button
        secondary
        medium
        as="a"
        href="https://github.com/vanilla-wm/vanilla-express-demo"
        target="_blank"
      >
        Demo Application with Express server
      </Button>
      <Heading>API endpoints</Heading>
      <Text mt="8px">
        Endpoints provide interface for retrieving information about payments on
        your back-end server. Vanilla currently provides GraphQL API.
      </Text>
      <Text mt="12px" medium>
        Authentication
      </Text>
      <Text mt="4px">
        For requests authentication use generated <code>clientID</code> and{' '}
        <code>clientSecret</code>. In each request include{' '}
        <code>Authorization</code> header.
      </Text>
      <Snippet
        code={`
        Authorization: Basic <realm>
      `}
        language="js"
      />
      <Text>
        Create <code>realm</code>
      </Text>
      <Snippet
        code={`
        const realm = Base64(<clientID>:<clientSecret>) 
      `}
        language="js"
      />
      <Text>
        Your <code>Authorization</code> header
      </Text>
      <Snippet
        code={`
Authorization: Basic ${btoa(`${clientId}:${clientSecret}`)}`}
        language="js"
      />
      <Text mt="12px" medium>
        Endpoint Proof
      </Text>
      <Text mt="4px" medium>
        Returns{' '}
        <Text as="span" color="primary">
          payments proof
        </Text>{' '}
        for visitor's <code>requestId</code>
      </Text>
      <Text mt="16px" sm>
        Example
      </Text>
      <Heading>Coming Soon</Heading>
      <ul>
        <Text as="li" mt="4px">
          Payments splitting
        </Text>
        <Text as="li" mt="4px">
          Music/Video Web Monetization features
        </Text>
        <Text as="li" mt="4px">
          Transaction history
        </Text>
        <Text as="li" mt="4px">
          Analytics
        </Text>
      </ul>
    </Container>
  )
}
