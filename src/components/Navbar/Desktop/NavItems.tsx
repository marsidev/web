import { HStack, Spacer, type StackProps } from '@chakra-ui/react'
import { NavItem } from '../NavItem'
import { ThemeToggler } from '../ThemeToggler'
import { navItems } from '../items'

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
				{navItems.map(item => (
					<NavItem key={item.href} href={item.href}>
						{item.name}
					</NavItem>
				))}
				<ThemeToggler />
			</HStack>
		</HStack>
	)
}

export default NavItems
