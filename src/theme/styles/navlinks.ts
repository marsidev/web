import { type GlobalStyleProps, mode } from '@chakra-ui/theme-tools'

export const navlinks = (props: GlobalStyleProps) => ({
	'.navlink': {
		position: 'relative',
		whiteSpace: 'nowrap'
	},
	'.navlink:after': {
		content: '""',
		position: 'absolute',
		width: '100%',
		transform: 'scaleX(0)',
		height: '2px',
		bottom: 0,
		left: 0,
		backgroundColor: mode('pink.500', 'pink.400')(props),
		transformOrigin: 'var(--navlink-transform-origin)',
		transition: 'transform 0.25s ease-out'
	},
	'.navlink.active:after': {
		transform: 'scaleX(1)',
		transformOrigin: 'var(--navlink-transform-origin-after)'
	}
})
