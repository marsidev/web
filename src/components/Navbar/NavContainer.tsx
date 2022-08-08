import { Flex, type FlexProps, useColorModeValue } from '@chakra-ui/react'
import { MAX_WIDTH } from '~/constants'
import { useMount, useScroll } from '~/hooks'

export type NavContainerProps = FlexProps

export const NavContainer: React.FC<NavContainerProps> = ({ children, ...props }) => {
	const hasScrolled = useScroll(50)
	const themedBg = useColorModeValue('white', 'gray.800')
	const mounted = useMount()

	return (
		<Flex
			align='center'
			as='header'
			bg={mounted ? themedBg : 'auto'}
			boxShadow={hasScrolled ? 'md' : 'none'}
			h='auto'
			justify='center'
			left={0}
			m='auto'
			pos='sticky'
			px={8}
			py={[2, 4]}
			top={0}
			transition='background-color 150ms ease-out, box-shadow 150ms ease-out'
			width='full'
			zIndex='sticky'
			{...props}
		>
			<Flex align='center' h='full' maxW={MAX_WIDTH} w='full'>
				{children}
			</Flex>
		</Flex>
	)
}

export default NavContainer
