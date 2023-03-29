import { Flex } from '@chakra-ui/layout'
import { DefaultSeo } from 'next-seo'
import { useAtom } from 'jotai'
// import { Banners } from '~/components/Banners'
import { Navbar } from '~/components/Navbar'
import { Footer } from '~/components/Footer'
import { MAX_WIDTH } from '~/constants/ui'
import { mobileMenuAtom } from '~/store'
import seo from 'next-seo.config'

interface LayoutProps {
	children: React.ReactNode
	title?: string
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
	const [menuExpanded] = useAtom(mobileMenuAtom)

	return (
		<>
			<DefaultSeo title={title} {...seo} />

			<Navbar minH={['8vh', '10vh']} />

			{/* <Banners /> */}

			<Flex
				as='main'
				justify='center'
				minH={['84vh', '80vh']}
				px={8}
				py={8}
				textAlign='left'
				visibility={menuExpanded ? 'hidden' : 'visible'}
				w='100%'
			>
				<Flex align='center' flexDir='column' h='full' justify='center' maxW={MAX_WIDTH} w='100%'>
					{children}
				</Flex>
			</Flex>

			<Footer minH={['8vh', '10vh']} />
		</>
	)
}

export default Layout
