import React from 'react'
import Text from '../../components/Text'
import Button from '../../components/Button'
import Snippet from './components/Snippet'
import { Container } from './index.styled'
import UserContext from '../../config/UserContext'

const Heading = (props) => <Text md mt="24px" {...props} />

export default () => {
  const { clientId, clientSecret } = React.useContext(UserContext)

  return (
    <Container>
      <Text mt={24}>
        Vanilla provides{' '}
        <Text as="span" color="primary">
          Web Monetization Content Protection
        </Text>{' '}
        features for applications that require higher level of flexibility.
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
        pointer and create your meta tag.
      </Text>
      <Text mt={24}>
        Add your payment pointer to{' '}
        <Text as="span" color="primary">
          Vanilla Admin
        </Text>
        .
      </Text>
      <Text mt={12}>
        Copy your Vanilla generated <code>{`<meta>`}</code> tag and add it to
        the <code>{`<head>`}</code> section of each page you want to monetize.
      </Text>
      <Snippet
        code={`<meta name="monetization" content="$wallet.example.com/alice" />`}
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
      .<Heading>API endpoints</Heading>
      <Text mt="8px">
        Endpoints provide interface for retrieving information about payments on
        your back-end server. Vanilla currently provides GraphQL API.
      </Text>
      <Text color="orange" mt="12px" medium>
        Authentication
      </Text>
      <Text mt="4px">
        For requests authentication use generated <code>clientId</code> and{' '}
        <code>clientSecret</code>. In each request include header{' '}
        <code>Authorization</code>
      </Text>
      <Snippet
        code={`
        Authorization: ${clientId}:${clientSecret}
      `}
        language="js"
      />
      <Text color="orange" mt="12px" medium>
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
