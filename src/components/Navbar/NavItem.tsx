import { Box, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link, type LinkProps } from '~/components'
import { navItemVariants } from './variants'

export interface NavItemProps extends LinkProps {
	href: string
	children: React.ReactNode
}

const MotionBox = motion(Box)

export const NavItem: React.FC<NavItemProps> = ({ href, children, ...props }) => {
	const color = useColorModeValue('gray.600', 'gray.400')
	const onHoverBg = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

	return (
		<MotionBox variants={navItemVariants}>
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
		</MotionBox>
	)
}

export default NavItem
