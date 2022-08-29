import { type FC, useEffect } from 'react'
import { Button, type ChakraProps, useBreakpointValue } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { menuOpen } from '~/store'

interface MenuTogglerProps extends ChakraProps {
	onToggle?: () => void
}

export const MenuToggler: FC<MenuTogglerProps> = ({ onToggle, ...props }) => {
	const [menuExpanded] = useAtom(menuOpen)
	const buttonSize = useBreakpointValue(['sm', 'md'])

	const className = `menu-toggle_wrap${menuExpanded ? ' menu-toggle_expanded' : ''}`

	// disable scroll when menu is open
	useEffect(() => {
		const originalStyle = window.getComputedStyle(document.body).overflow

		if (menuExpanded) {
			document.body.style.overflow = 'hidden'
		}

		return () => {
			document.body.style.overflow = originalStyle
		}
	}, [menuExpanded])

	return (
		<Button
			aria-label={menuExpanded ? 'Close menu' : 'Open menu'}
			rounded='lg'
			size={buttonSize}
			variant='ghost'
			onClick={onToggle}
			{...props}
		>
			<div className={className} />
		</Button>
	)
}

export default MenuToggler
