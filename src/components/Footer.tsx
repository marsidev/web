import type { FlexProps } from '@chakra-ui/react'
import type { FC } from 'react'
import { Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { Link } from '@components'

const GITHUB_URL = 'https://github.com/marsidev'

export const Footer: FC<FlexProps> = ({ ...props }) => {
  const bg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const linkColor = useColorModeValue('teal.400', 'teal.300')

  return (
    <Flex
      align='center'
      as='footer'
      bg={bg}
      h='auto'
      justify='center'
      px={8}
      width='100%'
      {...props}
    >
      <Flex h='full' maxW='2xl' w='100%'>
        <Flex
          align='center'
          flexDir={{ base: 'column', md: 'row' }}
          gap={{ base: 2, md: 0 }}
          h='auto'
          justify='space-between'
          w='100%'
        >
          <Text color={textColor} fontSize={16} fontWeight={600}>
            {'© 2022 '}
            <Link
              isExternal
              color={linkColor}
              href={GITHUB_URL}
              textDecoration='underline'
            >
              Luis Marsiglia
            </Link>
            {'.'}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer
