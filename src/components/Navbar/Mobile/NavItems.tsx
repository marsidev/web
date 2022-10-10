import { HStack, Spacer } from '@chakra-ui/layout'
import { MenuToggler } from '../MenuToggler'
import { ThemeToggler } from '../ThemeToggler'

interface NavItemsProps {
	onToggle: () => void
}

export const NavItems: React.FC<NavItemsProps> = ({ onToggle, ...props }) => {
	return (
		<HStack
			align='center'
			display={['flex', 'none']}
			h='auto'
			w='100%'
			{...props}
		>
			<Spacer />
			<ThemeToggler />
			<MenuToggler ml={2} onToggle={onToggle} />
		</HStack>
	)
}

export default NavItems
