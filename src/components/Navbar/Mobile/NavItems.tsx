import { Stack } from '@chakra-ui/layout'
import { MenuToggler } from '../MenuToggler'
import { ThemeToggler } from '../ThemeToggler'

interface NavItemsProps {
	onToggle: () => void
}

export const NavItems: React.FC<NavItemsProps> = ({ onToggle, ...props }) => {
	return (
		<Stack
			align='center'
			direction='row'
			display={['flex', 'none']}
			h='auto'
			justify='flex-end'
			w='100%'
			{...props}
		>
			<ThemeToggler />
			<MenuToggler ml={2} onToggle={onToggle} />
		</Stack>
	)
}

export default NavItems
