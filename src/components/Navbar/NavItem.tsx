import { useColorModeValue } from '@chakra-ui/react'
import { Link, type LinkProps } from '~/components'
import { MotionBox } from '~/components/motion'
import { navItemVariants } from './variants'

export interface NavItemProps extends LinkProps {
	href: string
	children: React.ReactNode
}

export const NavItem: React.FC<NavItemProps> = ({ href, children, ...props }) => {
	const onHoverBg = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

	return (
		<MotionBox variants={navItemVariants}>
			<Link
				_hover={{ bg: ['transparent', onHoverBg] }}
				fontSize={{ base: 'md', sm: 'md', md: 'lg', lg: 'lg' }}
				href={href}
				px={{ base: 0, sm: 2, md: 4, lg: 4 }}
				py={2}
				rounded='lg'
				{...props}
			>
				{children}
			</Link>
		</MotionBox>
	)
}

export default NavItem
