import { type GlobalStyleProps, mode } from '@chakra-ui/theme-tools'

export const underlined = (props: GlobalStyleProps) => ({
	'.underlined': {
		display: 'inline-block',
		position: 'relative',
		whiteSpace: 'nowrap'
	},
	'.underlined, .underlined:focus': {
		textDecoration: 'none !important'
	},
	'.underlined:after': {
		content: '""',
		position: 'absolute',
		width: '100%',
		transform: 'scaleX(0)',
		height: '2px',
		bottom: 0,
		left: 0,
		// backgroundColor: '#0087ca',
		backgroundColor: mode('teal.400', 'teal.300')(props),
		transformOrigin: 'bottom right',
		transition: 'transform 0.25s ease-out'
	},
	'.underlined:hover:after': {
		transform: 'scaleX(1)',
		transformOrigin: 'bottom left'
	}
})
