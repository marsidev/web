import { Flex, Heading, Stack } from '@chakra-ui/react'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Link } from '~/components/Link'

interface AboutProps {
	source: MDXRemoteSerializeResult<Record<string, unknown>>
}

export const About: React.FC<AboutProps> = ({ source }) => {
	return (
		<Stack
			align='flex-start'
			as='section'
			direction='column'
			id='about'
			textAlign='left'
			w='100%'
		>
			<Heading as='h2' pb={4} size='xl'>
				About me
			</Heading>

			<Flex flexDir='column' fontSize='lg' gap={4} lineHeight={1.5}>
				<MDXRemote components={{ Link }} {...source} />
			</Flex>
		</Stack>
	)
}

export default About
