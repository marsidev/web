import { Section } from '~/types'

interface NavItem {
	id: Section
	name: string
	href: string
}

export const navItems: NavItem[] = [
	{
		id: 'home',
		name: 'Home',
		href: '#'
	},
	{
		id: 'about',
		name: 'About',
		href: '#about'
	},
	{
		id: 'projects',
		name: 'Projects',
		href: '#projects'
	}
]
