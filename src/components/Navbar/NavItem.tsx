// https://github.com/vercel/next.js/issues/37362
// import { Link, type LinkProps } from '~/components/Link'

import type { FC, ReactNode } from 'react'
import { Link, type LinkProps } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { useAtom } from 'jotai'
import { MotionBox } from '~/components/motion'
import { activeSectionAtom } from '~/store'
import type { Section } from '~/types'
import { navItemVariants } from './variants'

export interface NavItemProps extends LinkProps {
	href: string
	sectionId: Section
	children: ReactNode
}

export const NavItem: FC<NavItemProps> = ({
	href,
	children,
	sectionId,
	...props
}) => {
	const baseClass = useBreakpointValue({ base: '', sm: 'navlink' })

	const [activeSection] = useAtom(activeSectionAtom)
	const isActiveSection = activeSection === sectionId

	return (
		<MotionBox variants={navItemVariants}>
			<Link
				className={isActiveSection ? `${baseClass} active` : baseClass}
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
