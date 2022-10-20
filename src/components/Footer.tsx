import { Flex, type FlexProps } from '@chakra-ui/layout'
import { chakra, useColorModeValue } from '@chakra-ui/system'
import { Link } from '~/components/Link'
import { MAX_WIDTH } from '~/constants/ui'

export const Footer: React.FC<FlexProps> = ({ ...props }) => {
	const textColor = useColorModeValue('gray.700', 'gray.200')
	const linkColor = useColorModeValue('pink.600', 'pink.400')

	return (
		<Flex align='center' as='footer' h='auto' justify='center' px={8} width='100%' {...props}>
			<Flex h='full' maxW={MAX_WIDTH} w='100%'>
				<Flex
					align='center'
					flexDir={{ base: 'column', md: 'row' }}
					gap={{ base: 2, md: 0 }}
					h='auto'
					justify='center'
					w='100%'
				>
					<chakra.p color={textColor} fontSize={16} fontWeight={600}>
						{'This website is '}
						<Link isExternal color={linkColor} href='https://github.com/marsidev/web'>
							open source
						</Link>
						{'. ✨'}
					</chakra.p>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default Footer
