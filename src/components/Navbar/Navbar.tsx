import { Spacer } from '@chakra-ui/react'
import { useCycle } from 'framer-motion'
import { mobileMenu } from '~/store'
import { NavItems as MobileItems, NavMenu as MobileNavMenu } from './Mobile'
import { NavItems as DesktopItems } from './Desktop'
import { Brand, NavContainer, type NavContainerProps } from '.'

export const Navbar: React.FC<NavContainerProps> = ({ ...props }) => {
	const [open, toggleMotionMenu] = useCycle(false, true)

	const onToggle = () => {
		toggleMotionMenu() // toggle motion menu state
		mobileMenu.toggle() // toggle react menu state
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
