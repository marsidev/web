import { HStack, Spacer } from '@chakra-ui/react'
import { MenuToggler, ThemeToggler } from '..'

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
