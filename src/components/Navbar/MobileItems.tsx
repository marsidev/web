import {
	StackDivider,
	type StackProps,
	VStack,
	useColorModeValue
} from '@chakra-ui/react'
import { MAX_WIDTH } from '~/constants'
import { NavItem } from '.'

export const MobileItems: React.FC<StackProps> = ({ ...props }) => {
	const dividerColor = useColorModeValue('gray.200', 'gray.700')
	const bg = useColorModeValue('#fff', 'gray.800')

	return (
		<VStack
			align='left'
			as='nav'
			bg={bg}
			divider={<StackDivider borderColor={dividerColor} />}
			h='90vh'
			justify='left'
			maxW={MAX_WIDTH}
			pos='absolute'
			px={8}
			w='100vw'
			zIndex={2000}
			{...props}
		>
			<NavItem href='/'>Home</NavItem>
			<NavItem href='/about'>About</NavItem>
			<NavItem href='/projects'>Projects</NavItem>
			<NavItem href='/contact'>Contact</NavItem>
		</VStack>
	)
}

export default MobileItems
