import { type ThemeConfig, extendTheme } from '@chakra-ui/react'
import components from './components'
import fonts from './fonts'

const config: ThemeConfig = {
	initialColorMode: 'system',
	useSystemColorMode: false
}

export const theme = extendTheme({ config, fonts, components })
