import type { NextPage } from 'next'
import { Button, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import Layout from '@layouts/main'
import { Link } from '@components'

const Custom404: NextPage = () => {
  const textColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Layout title='404'>
      <Heading as='h1' fontSize={['3xl', '5xl']} mb={4}>
        451 – Unavailable For Legal Reasons
      </Heading>

      <Text color={textColor} mb={8}>
        {
          `Why show a generic 404 when I can make it sound mysterious? It seems
          you've found something that used to exist, or you spelled something
          wrong. I'm guessing you spelled something wrong. Can you double
          check that URL?`
        }
      </Text>

      <Button as={Link} colorScheme='teal' href='/' w={48}>
        Return to home
      </Button>
    </Layout>
  )
}

export default Custom404
