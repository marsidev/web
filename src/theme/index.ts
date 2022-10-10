import type { ThemeConfig } from '@chakra-ui/theme'
import { extendTheme } from '@chakra-ui/theme-utils'
import { components } from './components'
import { fonts } from './fonts'
import { styles } from './styles'

export const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false
}

/* this replace all outline focus color excluding input,
	see https://github.com/chakra-ui/chakra-ui/discussions/2459#discussioncomment-2412881
*/
const shadows = {
	outline: '0 0 0 3px var(--chakra-colors-pink-400)'
}

export const theme = extendTheme({
	config,
	fonts,
	components,
	styles,
	shadows
})
