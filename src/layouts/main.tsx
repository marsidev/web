import type { FC, ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import { Footer, Navbar } from '@components'
import seo from 'next-seo.config'

interface LayoutProps {
	children: ReactNode
	title?: string
}

const Layout: FC<LayoutProps> = ({ children, title }) => {
	return (
		<>
			<DefaultSeo title={title} {...seo} />

			<Navbar h='10vh' />

			<Flex
				as='main'
				justify='center'
				minH='80vh'
				px={8}
				py={14}
				textAlign='left'
				w='100%'
			>
				<Flex
					align='center'
					flexDir='column'
					h='full'
					justify='center'
					maxW='2xl'
					w='100%'
				>
					{children}
				</Flex>
			</Flex>

			<Footer h='10vh' />
		</>
	)
}

export default Layout
