import { Flex, type FlexProps, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import { useMemo } from 'react'
import { useSuperState } from '@superstate/react'
import { MAX_WIDTH } from '~/constants'
import { useMount, useScrollY } from '~/hooks'
import { mobileMenu } from '~/store'

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
	useSuperState(mobileMenu.state)
	const mobileMenuExpanded = mobileMenu.get()

	const bg = useMemo(() => {
		if (!mounted) return 'auto'
		if (mobileMenuExpanded) return themedBg
		if (offsetPassed) return themedBgAfterOffset
		return themedBg
	}, [mounted, offsetPassed, mobileMenuExpanded, themedBg, themedBgAfterOffset])

	const backdropFilter = useMemo(() => {
		if (mounted && offsetPassed) return 'saturate(180%) blur(8px)'
		return 'none'
	}, [mounted, offsetPassed])

	return (
		<Flex
			align='center'
			as='header'
			backdropFilter={backdropFilter}
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
			transition='background-color 250ms ease-out, box-shadow 250ms ease-out, transform 200ms ease-out !important;'
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
