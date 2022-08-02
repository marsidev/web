import { HStack, Spacer, type StackProps } from '@chakra-ui/react'
import { NavItem, ThemeToggler } from '..'

export const NavItems: React.FC<StackProps> = ({ ...props }) => {
	return (
		<HStack
			align='center'
			as='nav'
			display={['none', 'flex']}
			h='auto'
			w='100%'
			{...props}
		>
			<Spacer />

			<HStack spacing={[2, 2, 4]}>
				<NavItem href='#'>Home</NavItem>
				<NavItem href='#about'>About</NavItem>
				<NavItem href='#projects'>Projects</NavItem>
				<ThemeToggler />
			</HStack>
		</HStack>
	)
}

export default NavItems
