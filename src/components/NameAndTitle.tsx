import { Heading, Stack, chakra } from '@chakra-ui/react'

export const NameAndTitle = () => {
	return (
		<Stack alignItems={{ base: 'center', md: 'flex-start' }} direction='column'>
			<Heading
				as='h1'
				fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
			>
				{"Hi, I'm "}
				<chakra.span>{'Luis Marsiglia'}</chakra.span>
				<chakra.span className='hand'>👋</chakra.span>
			</Heading>

			<Heading
				as='h2'
				fontSize={{ base: 'xl', sm: '2xl', md: '2xl', lg: '3xl' }}
			>
				{'A Full Stack Developer.'}
			</Heading>
		</Stack>
	)
}
