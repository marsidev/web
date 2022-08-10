import type { Styles } from '@chakra-ui/theme-tools'
import { mobileMenuStyles } from './mobile-menu'
import { scrollbarStyles } from './scrollbar'

export const styles: Styles = {
	global: props => ({
		'*': {
			boxSizing: 'border-box',
			margin: 0,
			padding: 0,
			border: 0,
			outline: 0
			// borderColor: mode('blackAlpha.200', 'whiteAlpha.200')(props)
		},
		html: {
			scrollBehavior: 'smooth'
		},
		body: {
			MozOsxFontSmoothing: 'grayscale',
			WebkitFontSmoothing: 'antialiased',
			textRendering: 'optimizeLegibility',
			transition:
				'background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out !important;'
		},
		...scrollbarStyles(props),
		...mobileMenuStyles(props)
	})
}

export default styles
