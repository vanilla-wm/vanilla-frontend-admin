import React from 'react';
import Text from '../../../../components/Text';
import { FormattedMessage } from 'react-intl'
import messages from './index.messages'

export default () => (
  <ul>
    <Text as="li" mt="4px">
      <FormattedMessage {...messages.paymentsSplit} />
    </Text>
    <Text as="li" mt="4px">
      <FormattedMessage {...messages.features} />
    </Text>
    <Text as="li" mt="4px">
      <FormattedMessage {...messages.transaction} />
    </Text>
    <Text as="li" mt="4px">
      <FormattedMessage {...messages.analytics} />
    </Text>
  </ul>
);