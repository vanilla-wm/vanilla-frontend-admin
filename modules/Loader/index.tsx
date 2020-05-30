import React from 'react'
import { Container } from './index.styled'
import Lottie from 'react-lottie'
import loading from './loading.json'

export default () => (
  <Container>
    <Lottie
      options={{
        animationData: loading,
      }}
      height={200}
      width={200}
    />
  </Container>
)
