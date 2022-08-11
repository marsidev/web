import { Flex, useColorModeValue } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import { useSuperState } from '@superstate/react'
import { Navbar } from '~/components'
import { MAX_WIDTH } from '~/constants'
import { mobileMenu } from '~/store'
import seo from 'next-seo.config'

interface LayoutProps {
	children: React.ReactNode
	title?: string
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
	useSuperState(mobileMenu.state)
	const menuExpanded = mobileMenu.get()
	const gradient = useColorModeValue(
		'linear(to bottom right, red.500, pink.600)',
		'linear(to bottom right, red.400, pink.500)'
	)

	return (
		<>
			<DefaultSeo title={title} {...seo} />

			<Navbar minH={['8vh', '10vh']} />

			<Flex
				bgGradient={gradient}
				color={useColorModeValue('white', 'black')}
				justify='center'
			>
				This site is a work in progress.
			</Flex>

			<Flex
				as='main'
				justify='center'
				minH={['92vh', '90vh']}
				px={8}
				py={8}
				textAlign='left'
				visibility={menuExpanded ? 'hidden' : 'visible'}
				w='100%'
			>
				<Flex
					align='center'
					flexDir='column'
					gap={8}
					h='full'
					justify='center'
					maxW={MAX_WIDTH}
					w='100%'
				>
					{children}
				</Flex>
			</Flex>
		</>
	)
}

export default Layout
