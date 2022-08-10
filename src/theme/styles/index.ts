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
			transitionProperty: 'color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter !important;',
			transitionDuration: '500ms !important;',
			transitionTimingFunction: 'ease-out !important;'
		},
		...scrollbarStyles(props),
		...mobileMenuStyles(props)
	})
}

export default styles
