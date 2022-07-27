import { Box, Heading, chakra } from '@chakra-ui/react'

export const NameAndTitle = () => {
	return (
		<Box>
			<Heading as='h1' fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
				{'Hi, I\'m '}
				<chakra.span>{'Luis Marsiglia'}</chakra.span>
				<chakra.span className='hand'>👋</chakra.span>
			</Heading>

			<Heading as='h2' fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
				{'Front-end developer.'}
			</Heading>
		</Box>
	)
}
