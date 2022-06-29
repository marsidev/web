import type { FC } from 'react'
import type { ChakraProps } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Button, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'

interface MenuTogglerProps extends ChakraProps {
  onClick?: () => void
  isOpen?: boolean
}

export const MenuToggler: FC<MenuTogglerProps> = ({ onClick, isOpen, ...props }) => {
	const menuTogglerColor = useColorModeValue(
		'var(--chakra-colors-gray-700)',
		'var(--chakra-colors-gray-200)'
	)

	const buttonSize = useBreakpointValue(['sm', 'md'])

	useEffect(() => {
		document.documentElement.style.setProperty(
			'--menu-toggle-fg',
			menuTogglerColor
		)
	}, [menuTogglerColor])

	return (
		<Button
			aria-label={isOpen ? 'Close menu' : 'Open menu'}
			rounded='lg'
			size={buttonSize}
			variant='ghost'
			onClick={onClick}
			{...props}
		>
			<div
				className={`menu-toggle_wrap${isOpen ? ' menu-toggle_expanded' : ''}`}
			/>
		</Button>
	)
}

export default MenuToggler
