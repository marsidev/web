import { Flex, type FlexProps, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import { useMemo } from 'react'
import { useSuperState } from '@superstate/react'
import { useRendered, useScrollY } from '@marsidev/react-hooks'
import { MAX_WIDTH } from '~/constants/ui'
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
	const rendered = useRendered()
	const isHidden = scrollDirection === 'down'
	useSuperState(mobileMenu.state)
	const mobileMenuExpanded = mobileMenu.get()

	const bg = useMemo(() => {
		if (!rendered) return 'auto'
		if (mobileMenuExpanded) return themedBg
		if (offsetPassed) return themedBgAfterOffset
		return themedBg
	}, [
		rendered,
		offsetPassed,
		mobileMenuExpanded,
		themedBg,
		themedBgAfterOffset
	])

	const backdropFilter = useMemo(() => {
		if (rendered && offsetPassed) return 'saturate(180%) blur(8px)'
		return 'none'
	}, [rendered, offsetPassed])

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
			transition='background-color 500ms ease-out, box-shadow 500ms ease-out, transform 200ms ease-out !important;'
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
