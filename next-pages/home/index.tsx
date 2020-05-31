import React from 'react'
import BaseLayout from '../../components/layouts/BaseLayout'
import SplitLayout from '../../components/layouts/SplitLayout'
import Box from '../../components/Box'
import Content from '../../modules/Content'

const Home = () => {
  const isAuthenticated = true

  return (
    <Box>
      {isAuthenticated ? (
        <SplitLayout>
          <Content />
        </SplitLayout>
      ) : (
        <div>loading</div>
      )}
    </Box>
  )
}

Home.Layout = BaseLayout

export default Home
