import { useColorModeValue } from '@chakra-ui/react'
import { Link, type LinkProps } from '~/components'

export interface NavItemProps extends LinkProps {
	href: string
	children: React.ReactNode
}

export const NavItem: React.FC<NavItemProps> = ({ href, children, ...props }) => {
	const color = useColorModeValue('gray.600', 'gray.400')
	const onHoverBg = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

	return (
		<Link
			_hover={{ bg: ['transparent', onHoverBg] }}
			color={color}
			fontSize={['sm', 'md']}
			href={href}
			px={[0, 2]}
			py={1}
			rounded='lg'
			{...props}
		>
			{children}
		</Link>
	)
}

export default NavItem
