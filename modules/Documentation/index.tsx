import React from 'react'
import Text from '../../components/Text'
import { Snippet } from './index.styled'

const SubHeading = (props) => <Text mt="6px" {...props} />
const Heading = (props) => <Text primary mt="24px" {...props} />

export default () => (
  <>
    <Text mt={24}>
      Lottie supports CocoaPods and Carthage (Both dynamic and static). Lottie
      is written in Swift 4.2.
    </Text>
    <Heading>Github Repo</Heading>
    <Text>
      Lottie supports CocoaPods and Carthage (Both dynamic and static). Lottie
      is written in Swift 4.2.
    </Text>
    <Heading>CocoaPods</Heading>
    <SubHeading>Add the pod to your Podfile:</SubHeading>
    <Snippet>
      <Text color="green" inline>
        import
      </Text>{' '}
      <Text color="orange" inline>
        Lottie
      </Text>
    </Snippet>
    <Text>Add the pod to your Podfile:</Text>
    <Snippet>
      <Text color="green" inline>
        import
      </Text>{' '}
      <Text color="orange" inline>
        {' '}
        Lottie
      </Text>
    </Snippet>{' '}
    <Snippet>
      <Text>
        <Text color="green" inline>
          import
        </Text>{' '}
        <Text color="orange" inline>
          {' '}
          Lottie
        </Text>
      </Text>
      <Text>
        <Text color="green" inline>
          import
        </Text>{' '}
        <Text color="orange" inline>
          {' '}
          Lottie
        </Text>
      </Text>
    </Snippet>
  </>
)
