import React from 'react'
import Text from '../../../../components/Text'
import Button from '../../../../components/Button'
import Snippet from '../Snippet'
import messages from './index.messages'
import { FormattedMessage } from 'react-intl'

export default ({ ILP_SERVER_URL, clientId }) => (
  <>
    <ol>
      <Text mt="16px" as="li">
        <FormattedMessage {...messages.stepOne} />
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
      <Text mt="16px" as="li">
        <FormattedMessage {...messages.stepTwo} />
      </Text>
      <Text mt="16px" as="li">
        <FormattedMessage {...messages.stepThree} />
        <Snippet
          code={`<meta name="monetization" content="${ILP_SERVER_URL}/${clientId}" />`}
          language="html"
        />
      </Text>
      <Text mt="16px" as="li">
        <FormattedMessage {...messages.stepFour} />
      </Text>
    </ol>

    <Button
      secondary
      medium
      as="a"
      href="https://github.com/vanilla-wm/vanilla-express-demo"
      target="_blank"
    >
      <FormattedMessage {...messages.demoLink} />
    </Button>
  </>
)
