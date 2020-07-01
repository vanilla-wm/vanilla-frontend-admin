import React from 'react'
import { defineMessages } from 'react-intl'
import Text from '../../components/Text'
import Button from '../../components/Button'

export default defineMessages({
  whatProvides: {
    id: 'WhatProvides',
    defaultMessage:
      'Vanilla provides <text>Web Monetization</text> verification features for applications that require higher level of flexibility.',
    description: 'What Vanilla provides',
    values: {
      text: (value) => (
        <Text as="span" color="primary">
          {value}
        </Text>
      ),
    },
  },
  currentlyWorking: {
    id: 'CurrentlyWorking',
    defaultMessage:
      'Vanilla is currently working on implementing <button>STREAM Receipts</button>. STREAM Receipt is a proof of payment provided by Web Monetization Wallet.',
    description: 'What Vanilla is currently working on',
    values: {
      button: (value) => (
        <Button
          medium
          target="_blank"
          color="primary"
          secondary
          as="a"
          href="https://interledger.org/rfcs/0039-stream-receipts/"
        >
          {value}
        </Button>
      ),
    },
  },
  howItWorksTitle: {
    id: 'HowItWorks.title',
    defaultMessage: 'How It Works',
    description: 'The title for HowItWorks section',
  },
  apiEndpoints: {
    id: 'ApiEndpoints.title',
    defaultMessage: 'API Endpoints',
    description: 'The title for ApiEndpoints section',
  },
  comingSoon: {
    id: 'ComingSoon.title',
    defaultMessage: 'Coming Soon',
    description: 'The title for ComingSoon section',
  },
})
