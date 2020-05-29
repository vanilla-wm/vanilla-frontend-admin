import React from 'react'
import BaseLayout from '../../layouts/BaseLayout'
import Box from '../../components/Box'
import Content from '../../modules/Content'

const Home = () => {
  const isAuthenticated = true

  return (
    <Box>
      {isAuthenticated ? (
        <>
          <Content />
        </>
      ) : (
        <div>loading</div>
      )}
    </Box>
  )
}

Home.Layout = BaseLayout

export default Home
