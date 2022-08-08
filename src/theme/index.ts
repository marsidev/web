import { type ThemeConfig, extendTheme } from '@chakra-ui/react'
import { components } from './components'
import { fonts } from './fonts'
import { styles } from './styles'

export const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false
}

export const theme = extendTheme({
	config,
	fonts,
	components,
	styles
})
