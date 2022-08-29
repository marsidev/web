import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useWindowSize } from '@marsidev/react-hooks'
import { useAtom } from 'jotai'
import { mobileMenuAtom } from '~/store'
import { NavItem } from '../NavItem'
import { MenuContainer } from './MenuContainer'

interface NavMenuProps {
	open: boolean
	onToggle: () => void
}

export const NavMenu: React.FC<NavMenuProps> = ({ open, onToggle }) => {
	const windowSize = useWindowSize()
	const [_, setMenuExpanded] = useAtom(mobileMenuAtom)

	const onCloseMenu = () => {
		if (open) {
			onToggle() // <- this toggle both react menu state and motion menu state
		} else {
			setMenuExpanded(false) // <- this toggle react menu state
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
