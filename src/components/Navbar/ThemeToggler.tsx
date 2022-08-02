import { IconButton, useBreakpointValue, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '~/components'

export const ThemeToggler = ({ ...props }) => {
	const { colorMode, toggleColorMode } = useColorMode()
	const buttonSize = useBreakpointValue(['sm', 'md'])

	return (
		<IconButton
			aria-label='Toggle theme'
			icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
			ml={[2, 2, 4]}
			rounded='lg'
			size={buttonSize}
			variant='ghost'
			onClick={toggleColorMode}
			{...props}
		/>
	)
}

export default ThemeToggler
