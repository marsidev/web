import type { ComponentStyleConfig, LinkProps } from '@chakra-ui/react'

const baseStyle: LinkProps = {
	_hover: {
		textDecoration: 'none'
	}
}

export const Link: ComponentStyleConfig = {
	baseStyle
}

export default Link
