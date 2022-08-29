import { Flex } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import { useAtom } from 'jotai'
import { Banners } from '~/components/Banners'
import { Navbar } from '~/components/Navbar'
import { MAX_WIDTH } from '~/constants/ui'
import { menuOpen } from '~/store'
import seo from 'next-seo.config'

interface LayoutProps {
	children: React.ReactNode
	title?: string
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
	const [menuExpanded] = useAtom(menuOpen)

	return (
		<>
			<DefaultSeo title={title} {...seo} />

			<Navbar minH={['8vh', '10vh']} />

			<Banners />

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
