import { Flex, type FlexProps, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import { MAX_WIDTH } from '~/constants'
import { useMount, useScrollY } from '~/hooks'

export type NavContainerProps = FlexProps

export const NavContainer: React.FC<NavContainerProps> = ({
	children,
	...props
}) => {
	const offset = useBreakpointValue({ base: 68, md: 96 }) // <- navbar height - measured manually
	const { offsetPassed, scrollDirection } = useScrollY(offset)
	const themedBg = useColorModeValue('white', 'gray.800')
	const themedBgAfterOffset = useColorModeValue('whiteAlpha.500', 'rgba(26, 32, 44, 0.74)')
	const mounted = useMount()
	const isHidden = scrollDirection === 'down'

	let bg = 'auto'
	if (mounted) {
		if (offsetPassed) {
			bg = themedBgAfterOffset
		} else {
			bg = themedBg
		}
	}

	return (
		<Flex
			align='center'
			as='header'
			backdropFilter='saturate(180%) blur(5px)'
			bg={bg}
			boxShadow={offsetPassed ? 'md' : 'none'}
			h='auto'
			justify='center'
			left={0}
			m='auto'
			pos='sticky'
			px={8}
			py={[2, 4]}
			top={0}
			transform={isHidden ? 'translateY(-100%)' : 'translateY(0)'}
			transition='background-color 150ms ease-out, box-shadow 150ms ease-out, transform 200ms ease-out;'
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
