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
import { FormattedMessage } from 'react-intl'
import messages from './index.messages'

const Heading = (props) => <Text as="h3" md mt="24px" {...props} />

export default () => {
  const { clientId, clientSecret } = React.useContext(UserContext)
  const {
    publicRuntimeConfig: { ILP_SERVER_URL, GRAPHQL_SERVER_URI },
  } = getConfig()

  return (
    <Container>
      <Text mt={24}>
        <FormattedMessage {...messages.whatProvides.first} />
        {' '}
        <Text as="span" color="primary">
          <FormattedMessage {...messages.whatProvides.second} />
        </Text>
        {' '}
        <FormattedMessage {...messages.whatProvides.third} />
      </Text>
      <InfoBox mt="16px">
        <Text mr="14px">💡</Text>
        <Text>
          <FormattedMessage {...messages.currentlyWorking.first} />
          {' '}
          <Button
            medium
            target="_blank"
            color="primary"
            secondary
            as="a"
            href="https://interledger.org/rfcs/0039-stream-receipts/"
          >
            <FormattedMessage {...messages.currentlyWorking.second} />
          </Button>
          <FormattedMessage {...messages.currentlyWorking.third} />
        </Text>
      </InfoBox>

      <Heading>
        <FormattedMessage {...messages.howItWorksTitle} />
      </Heading>
      <HowItWorks
        ILP_SERVER_URL={ILP_SERVER_URL}
        clientId={clientId}
      />

      <Heading>
        <FormattedMessage {...messages.apiEndpoints} />
      </Heading>
      <ApiEndpoints
        GRAPHQL_SERVER_URI={GRAPHQL_SERVER_URI}
        clientId={clientId}
        clientSecret={clientSecret}
      />

      <Heading>
        <FormattedMessage {...messages.comingSoon} />
      </Heading>
      <ComingSoon />
    </Container>
  );
}
