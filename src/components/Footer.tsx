import { Flex, type FlexProps, Text, useColorModeValue } from '@chakra-ui/react'
import { Link } from '~/components/Link'
import { MAX_WIDTH } from '~/constants/ui'

const GITHUB_URL = 'https://github.com/marsidev'

export const Footer: React.FC<FlexProps> = ({ ...props }) => {
	const textColor = useColorModeValue('gray.700', 'gray.200')
	const linkColor = useColorModeValue('pink.600', 'pink.400')

	return (
		<Flex
			align='center'
			as='footer'
			h='auto'
			justify='center'
			px={8}
			width='100%'
			{...props}
		>
			<Flex h='full' maxW={MAX_WIDTH} w='100%'>
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
						<Link isExternal color={linkColor} href={GITHUB_URL}>
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
