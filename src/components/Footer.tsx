import type { FlexProps } from '@chakra-ui/react'
import { FC } from 'react'
import {
  Flex,
  HStack,
  Icon,
  Switch,
  Text,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { BsMoonFill as MoonIcon, BsSunFill as SunIcon } from 'react-icons/bs'
import { Link } from '@components/Link'

const GITHUB_URL = 'https://github.com/marsidev'

export const Footer: FC<FlexProps> = ({ ...props }) => {
  const { toggleColorMode, colorMode } = useColorMode()
  const bg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.700', 'gray.200')
  const linkColor = useColorModeValue('teal.400', 'teal.300')
  const border = `1px solid ${useColorModeValue('#E2E8F0', '#2D3748')}`

  return (
    <Flex
      align='center'
      as='footer'
      bg={bg}
      borderTop={border}
      color={textColor}
      h='auto'
      justify='center'
      width='100%'
      {...props}
    >
      <Flex h='full' maxW='5xl' w='100%'>
        <Flex
          align='center'
          flexDir={{ base: 'column', md: 'row' }}
          gap={{ base: 2, md: 0 }}
          h='auto'
          justify='space-between'
          w='100%'
        >
          <Text
            color={textColor}
            fontSize={16}
            fontWeight={600}
          >
            {'Made with ♥ by '}
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

          <HStack justify='center'>
            <Icon as={SunIcon} h={4} w={4} />
            <Switch
              colorScheme='teal'
              isChecked={colorMode === 'dark'}
              size='md'
              onChange={toggleColorMode}
            />
            <Icon as={MoonIcon} h={4} w={4} />
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer
