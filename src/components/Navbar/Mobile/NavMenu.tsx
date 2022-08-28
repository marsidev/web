import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useWindowSize } from '@marsidev/react-hooks'
import { mobileMenu } from '~/store'
import { NavItem } from '../NavItem'
import { MenuContainer } from './MenuContainer'

interface NavMenuProps {
	open: boolean
	onToggle: () => void
}

export const NavMenu: React.FC<NavMenuProps> = ({ open, onToggle }) => {
	const windowSize = useWindowSize()

	const onCloseMenu = () => {
		if (open) {
			onToggle() // <- this toggle both react menu state and motion menu state
		} else {
			mobileMenu.close() // <- this toggle react menu state
		}
	}

	useEffect(() => {
		if (windowSize.width && windowSize.width > 600) {
			onCloseMenu()
		}
	}, [windowSize.width])

	return (
		<AnimatePresence>
			{open && (
				<MenuContainer>
					<NavItem href='#'>Home</NavItem>
					<NavItem href='#about'>About</NavItem>
					<NavItem href='#projects'>Projects</NavItem>
				</MenuContainer>
			)}
		</AnimatePresence>
	)
}

export default NavMenu
