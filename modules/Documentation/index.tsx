import React from 'react'
import Text from '../../components/Text'
import Button from '../../components/Button'
import { Container } from './index.styled'
import UserContext from '../../config/UserContext'
import getConfig from 'next/config'
import InfoBox from './components/InfoBox'
import HowItWorks from './components/HowItWorks';
import ApiEndpoints from './components/ApiEndpoints';
import ComingSoon from './components/ComingSoon';

const Heading = (props) => <Text as="h3" md mt="24px" {...props} />

export default () => {
  const { clientId, clientSecret } = React.useContext(UserContext)
  const {
    publicRuntimeConfig: { ILP_SERVER_URL, GRAPHQL_SERVER_URI },
  } = getConfig()

  return (
    <Container>
      <Text mt={24}>
        Vanilla provides{' '}
        <Text as="span" color="primary">
          Web Monetization
        </Text>{' '}
        verification features for applications that require higher level of
        flexibility.
      </Text>
      <InfoBox mt="16px">
        <Text mr="14px">💡</Text>
        <Text>
          Vanilla is currently working on implementing{' '}
          <Button
            medium
            target="_blank"
            color="primary"
            secondary
            as="a"
            href="https://interledger.org/rfcs/0039-stream-receipts/"
          >
            STREAM Receipts
          </Button>
          . STREAM Receipt is a proof of payment provided by Web Monetization
          Wallet.
        </Text>
      </InfoBox>

      <Heading>How it works</Heading>
      <HowItWorks
        ILP_SERVER_URL={ILP_SERVER_URL}
        clientId={clientId}
      />

      <Heading>API Endpoints</Heading>
      <ApiEndpoints
        GRAPHQL_SERVER_URI={GRAPHQL_SERVER_URI}
        clientId={clientId}
        clientSecret={clientSecret}
      />

      <Heading>Coming Soon</Heading>
      <ComingSoon />
    </Container>
  );
}
