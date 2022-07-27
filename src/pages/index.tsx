import type { NextPage } from 'next'
import {
	Box,
	Flex,
	Heading,
	Image,
	Stack,
	type StackProps,
	chakra, useColorModeValue
} from '@chakra-ui/react'
import { Layout } from '~/layouts/main'
import avatar from '~/assets/avatar-nobg.png'
import { GithubIcon, Link, LinkedInIcon, TwitterIcon } from '~/components'

const Avatar = () => {
	const gradient = useColorModeValue(
		'linear(to bottom right, pink.600, pink.700)',
		'linear(to bottom right, pink.500, pink.600)'
	)

	return (
		<Box
			bgGradient={gradient}
			borderRadius='full'
			p={2}
			w={{ base: 40, md: 56 }}
		>
			<Image
				alt='Luis Marsiglia'
				borderRadius='full'
				filter='brightness(0.85)'
				src={avatar.src}
			/>
		</Box>
	)
}

const NameAndTitle = () => {
	return (
		<Box>
			<Heading as='h1' fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
				{'Hi, I\'m '}
				<chakra.span>{'Luis Marsiglia'}</chakra.span>
				<chakra.span className='hand'>🤚</chakra.span>
			</Heading>

			<Heading as='h2' fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
				{'Front-end developer.'}
			</Heading>
		</Box>
	)
}

const SocialLinks: React.FC<StackProps> = props => {
	const onHoverColor = useColorModeValue('pink.600', 'pink.500')

	return (
		<Stack
			direction='row'
			justify={{ base: 'center', md: 'flex-start' }}
			spacing={4}
			{...props}
		>
			<Link
				isExternal
				_hover={{ color: onHoverColor }}
				href='https://github.com/marsidev'
			>
				<GithubIcon className='social-link' />
			</Link>

			<Link
				isExternal
				_hover={{ color: onHoverColor }}
				href='https://www.linkedin.com/in/marsidev'
			>
				<LinkedInIcon className='social-link' />
			</Link>

			<Link
				isExternal
				_hover={{ color: onHoverColor }}
				href='https://twitter.com/marsigliacr'
			>
				<TwitterIcon className='social-link' />
			</Link>
		</Stack>
	)
}

const App: NextPage = () => {
	return (
		<Layout>
			<Flex
				as='section'
				flexDir='column'
				h='calc(90vh - 16*0.25em)'
				justify='center'
			>
				<Stack
					align='center'
					direction={{ base: 'column', md: 'row' }}
					spacing={4}
				>
					<Avatar />

					<Stack direction='column'>
						<NameAndTitle />
						<SocialLinks pt={2} />
					</Stack>
				</Stack>
			</Flex>
		</Layout>
	)
}

export default App
export { getServerSideProps } from '~/components/Chakra'
