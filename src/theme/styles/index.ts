import type { GlobalStyleProps } from '@chakra-ui/theme-tools'
import { mobileMenu } from './mobile-menu'
import { scrollbar } from './scrollbar'

export const styles = {
	global: (props: GlobalStyleProps) => ({
		'*': {
			boxSizing: 'border-box',
			margin: 0,
			padding: 0,
			border: 0,
			outline: 0
		},
		html: {
			scrollBehavior: 'smooth'
		},
		body: {
			MozOsxFontSmoothing: 'grayscale',
			WebkitFontSmoothing: 'antialiased',
			textRendering: 'optimizeLegibility',
			transitionProperty:
				'color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter !important;',
			transitionDuration: '500ms !important;',
			transitionTimingFunction: 'ease-out !important;'
		},
		...scrollbar(props),
		...mobileMenu(props)
	})
}

export default styles
