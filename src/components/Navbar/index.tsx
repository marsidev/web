import { useCycle } from 'framer-motion'
import { useAtom } from 'jotai'
import { mobileMenuAtom } from '~/store'
import { NavItems as MobileItems } from './Mobile/NavItems'
import { NavMenu as MobileNavMenu } from './Mobile/NavMenu'
import { NavItems as DesktopItems } from './Desktop/NavItems'
import { Brand } from './Brand'
import { NavContainer, type NavContainerProps } from './NavContainer'

export const Navbar: React.FC<NavContainerProps> = ({ ...props }) => {
	const [open, toggleMotionMenu] = useCycle(false, true)
	const [_, setMenuExpanded] = useAtom(mobileMenuAtom)

	const onToggle = () => {
		toggleMotionMenu() // toggle motion menu state
		setMenuExpanded(o => !o) // toggle react menu state
	}

	return (
		<>
			<NavContainer {...props}>
				<Brand />
				<MobileItems onToggle={onToggle} />
				<DesktopItems />
			</NavContainer>

			<MobileNavMenu key='mobile-content' open={open} onToggle={onToggle} />
		</>
	)
}

export default Navbar
