import type { LinkProps } from '@chakra-ui/layout'
import type { ComponentStyleConfig } from '@chakra-ui/theme'

const baseStyle: LinkProps = {
	_hover: {
		textDecoration: 'none'
	}
}

export const Link: ComponentStyleConfig = {
	baseStyle
}

export default Link
