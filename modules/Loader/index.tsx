import React from 'react'
import { Container } from './index.styled'
import Lottie from 'react-lottie'
import loading from './loading.json'
import Box from '../../components/Box'
import Text from '../../components/Text'

export default () => (
  <Container>
    <Lottie
      options={{
        animationData: loading,
      }}
      height={200}
      width={200}
    />
    <Box>
      <Text isMono color="primary" mt="12px">
        Loading...
      </Text>
    </Box>
  </Container>
)
