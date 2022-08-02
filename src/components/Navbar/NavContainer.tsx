import { Flex, type FlexProps, useColorModeValue } from '@chakra-ui/react'
import { MAX_WIDTH } from '~/constants'
import { useScroll } from '~/hooks'

export type NavContainerProps = FlexProps

export const NavContainer: React.FC<NavContainerProps> = ({ children, ...props }) => {
	const hasScrolled = useScroll(50)
	const bg = useColorModeValue('white', 'gray.800')

	return (
		<Flex
			align='center'
			as='header'
			bg={bg}
			boxShadow={hasScrolled ? 'md' : 'none'}
			h='auto'
			justify='center'
			left={0}
			m='auto'
			pos='sticky'
			px={8}
			py={[2, 4]}
			top={0}
			transition='all 250ms ease-out'
			width='full'
			zIndex={999}
			{...props}
		>
			<Flex align='center' h='full' maxW={MAX_WIDTH} w='full'>
				{children}
			</Flex>
		</Flex>
	)
}

export default NavContainer
