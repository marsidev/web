import type { FC } from 'react'
import { Flex, type FlexProps } from '@chakra-ui/react'
import { MAX_WIDTH } from '~/constants/ui'
import { useNavbarControl } from '~/hooks/use-navbar-control'

export type NavContainerProps = FlexProps

export const NavContainer: FC<NavContainerProps> = ({ children, ...props }) => {
	const {
		ref,
		backdropFilter,
		backgroundColor,
		offsetPassed
		// scrollDirection
	} = useNavbarControl()
	// const isHidden = scrollDirection === 'down'

	return (
		<Flex
			ref={ref}
			align='center'
			as='header'
			backdropFilter={backdropFilter}
			bg={backgroundColor}
			boxShadow={offsetPassed ? 'md' : 'none'}
			h='auto'
			justify='center'
			left={0}
			m='auto'
			pos='sticky'
			px={8}
			py={[2, 4]}
			top={0}
			// transform={isHidden ? 'translateY(-100%)' : 'translateY(0)'}
			transition='background-color 500ms ease-out, box-shadow 500ms ease-out, transform 200ms ease-out, min-height 350ms ease-out;'
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
