import type { NavContainerProps } from '.'
import type { FC } from 'react'
import {
	IconButton,
	Spacer,
	useBreakpointValue,
	useColorMode
} from '@chakra-ui/react'
import { BsMoonFill as MoonIcon, BsSunFill as SunIcon } from 'react-icons/bs'
import { useState } from 'react'
import { Brand, DesktopItems, MenuToggler, MobileItems, NavContainer } from '.'

export const Navbar: FC<NavContainerProps> = ({ ...props }) => {
	const { toggleColorMode, colorMode } = useColorMode()
	const [isOpen, setIsOpen] = useState(false)

	const buttonSize = useBreakpointValue(['sm', 'md'])

	return (
		<>
			<NavContainer {...props}>
				<Brand />

				<DesktopItems />

				<Spacer />

				<IconButton
					aria-label='Toggle theme'
					icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
					ml={[2, 2, 4]}
					rounded='lg'
					size={buttonSize}
					variant='ghost'
					onClick={toggleColorMode}
				/>

				<MenuToggler
					display={['flex', 'none']}
					isOpen={isOpen}
					ml={2}
					onClick={() => setIsOpen(!isOpen)}
				/>
			</NavContainer>

			<MobileItems display={isOpen ? ['flex', 'none'] : 'none'} />
		</>
	)
}

export default Navbar
