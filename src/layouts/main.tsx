import { Flex, useColorModeValue } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import { useSuperState } from '@superstate/react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Banner, Navbar } from '~/components'
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
	const [bannersParent] = useAutoAnimate<HTMLDivElement>({
		duration: 300,
		easing: 'ease-in-out'
	})

	const bannersBg = useColorModeValue(
		'linear(to bottom, teal.500, teal.600)',
		'linear(to bottom, teal.400, teal.500)'
	)

	return (
		<>
			<DefaultSeo title={title} {...seo} />

			<Navbar minH={['8vh', '10vh']} />

			<Flex ref={bannersParent} bgGradient={bannersBg} flexDir='column'>
				<Banner
					bannerId='in-development'
					bg={bannersBg}
					message='This site is a work in progress.'
				/>
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
