import { Spacer } from '@chakra-ui/react'
import { useCycle } from 'framer-motion'
import { useAtom } from 'jotai'
import { toggleMenu } from '~/store'
import { NavItems as MobileItems } from './Mobile/NavItems'
import { NavMenu as MobileNavMenu } from './Mobile/NavMenu'
import { NavItems as DesktopItems } from './Desktop/NavItems'
import { Brand } from './Brand'
import { NavContainer, type NavContainerProps } from './NavContainer'

export const Navbar: React.FC<NavContainerProps> = ({ ...props }) => {
	const [open, toggleMotionMenu] = useCycle(false, true)
	const [_, toggleMobileMenu] = useAtom(toggleMenu)

	const onToggle = () => {
		toggleMotionMenu() // toggle motion menu state
		toggleMobileMenu() // toggle react menu state
	}

	return (
		<>
			<NavContainer {...props}>
				<Brand />
				<Spacer />
				<MobileItems onToggle={onToggle} />
				<DesktopItems />
			</NavContainer>

			<MobileNavMenu key='mobile-content' open={open} onToggle={onToggle} />
		</>
	)
}

export default Navbar
