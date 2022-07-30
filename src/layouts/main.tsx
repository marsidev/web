import { Flex } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import { Navbar } from '~/components'
import { MAX_WIDTH } from '~/constants'
import seo from 'next-seo.config'

interface LayoutProps {
	children: React.ReactNode
	title?: string
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
	return (
		<>
			<DefaultSeo title={title} {...seo} />

			<Navbar h='10vh' />

			<Flex
				as='main'
				justify='center'
				minH='90vh'
				px={8}
				py={8}
				textAlign='left'
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

			{/* <Footer h='10vh' /> */}
		</>
	)
}

export default Layout
