import { IconButton } from '@chakra-ui/button'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { useColorMode } from '@chakra-ui/system'
import { MoonIcon, SunIcon } from '~/icons'

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
