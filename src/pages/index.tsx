import type { FC } from 'react'
import type { NextPage } from 'next'
import { Box, Heading } from '@chakra-ui/react'
import Layout from '@layouts/main'

const App: FC<NextPage> = () => {
  return (
    <Layout title='JavaScript Developer'>
      <Box as='section'>
        <Heading as='h1' fontSize='6xl'>
          Luis Marsiglia
        </Heading>
      </Box>
    </Layout>
  )
}

export default App
