import type { Styles } from '@chakra-ui/theme-tools'
import { mobileMenuStyles } from './mobile-menu'
import { scrollbarStyles } from './scrollbar'

export const styles: Styles = {
	global: props => ({
		'html, body': {
			padding: 0,
			margin: 0
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
				'background-color 150ms ease-out, color 150ms ease-out, border-color 150ms ease-out !important;'
		},
		...scrollbarStyles(props),
		...mobileMenuStyles(props)
	})
}

export default styles
