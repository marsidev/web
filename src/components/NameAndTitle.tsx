import { Heading, Stack } from '@chakra-ui/layout'
import { chakra } from '@chakra-ui/system'

export const NameAndTitle = () => {
	return (
		<Stack alignItems={{ base: 'center', md: 'flex-start' }} direction='column'>
			<Heading as='h1' fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}>
				{"Hi, I'm Luis Marsiglia"}
				<chakra.span className='hand'>👋</chakra.span>
			</Heading>

			<Heading as='h2' fontSize={{ base: 'xl', sm: '2xl', md: '2xl', lg: '3xl' }} fontWeight={600}>
				Software Developer.
			</Heading>
		</Stack>
	)
}
