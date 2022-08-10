import { useBreakpointValue } from '@chakra-ui/react'
import { Link, type LinkProps } from '~/components'
import { MotionBox } from '~/components/motion'
import { navItemVariants } from './variants'

export interface NavItemProps extends LinkProps {
	href: string
	children: React.ReactNode
}

export const NavItem: React.FC<NavItemProps> = ({ href, children, ...props }) => {
	const className = useBreakpointValue({ base: '', sm: 'underlined' })

	return (
		<MotionBox variants={navItemVariants}>
			<Link
				className={className}
				fontSize={{ base: 'md', md: 'lg' }}
				fontWeight={600}
				href={href}
				px={{ base: 0, sm: 2, md: 4 }}
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
