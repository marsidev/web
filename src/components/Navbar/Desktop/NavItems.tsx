import { Flex, Stack, type StackProps } from '@chakra-ui/layout'
import { NavItem } from '../NavItem'
import { ThemeToggler } from '../ThemeToggler'
import { GetResume } from '../GetResume'
import { navItems } from '../items'

export const NavItems: React.FC<StackProps> = ({ ...props }) => {
	return (
		<Stack
			align='center'
			as='nav'
			direction='row'
			display={['none', 'flex']}
			h='auto'
			justify='flex-end'
			w='100%'
			{...props}
		>
			<Flex flexDir='row' gap={[2, 2, 4]}>
				{navItems.map(item => (
					<NavItem key={item.id} href={item.href} sectionId={item.id}>
						{item.name}
					</NavItem>
				))}

				<GetResume />
				<ThemeToggler />
			</Flex>
		</Stack>
	)
}

export default NavItems
