import { type GlobalStyleProps, mode } from '@chakra-ui/theme-tools'

export const mobileMenu = (props: GlobalStyleProps) => ({
	'.menu-toggle_wrap': {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		pointerEvents: 'none'
	},
	'.menu-toggle_wrap.menu-toggle_expanded:before': {
		transform: 'translateY(1px) rotate(45deg)'
	},
	'.menu-toggle_wrap.menu-toggle_expanded:after': {
		transform: 'translateY(0) rotate(-45deg)'
	},
	'.menu-toggle_wrap:before': {
		transform: 'translateY(-4px) rotate(0deg)'
	},
	'.menu-toggle_wrap:after': {
		transform: 'translateY(4px) rotate(0deg)'
	},
	'.menu-toggle_wrap:before,.menu-toggle_wrap:after': {
		content: '""',
		display: 'block',
		position: 'absolute',
		height: '1px',
		width: '18px',
		backgroundColor: mode('gray.700', 'gray.200')(props),
		transition: 'transform 0.5s ease'
	}
})
