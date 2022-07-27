import { Flex, type FlexProps, useColorModeValue } from '@chakra-ui/react'
import { MAX_WIDTH } from '~/constants'

export type NavContainerProps = FlexProps

export const NavContainer: React.FC<NavContainerProps> = ({ children, ...props }) => {
	const bg = useColorModeValue('white', 'gray.800')

	return (
		<Flex
			align='center'
			as='header'
			bg={bg}
			h='auto'
			justify='center'
			px={8}
			width='100%'
			{...props}
		>
			<Flex align='center' h='full' maxW={MAX_WIDTH} w='100%'>
				{children}
			</Flex>
		</Flex>
	)
}

export default NavContainer