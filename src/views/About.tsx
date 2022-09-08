import type { StackProps } from '@chakra-ui/react'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Flex, Heading, Stack, chakra, forwardRef } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'
import { Link } from '~/components/Link'

interface AboutProps extends StackProps {
	source: MDXRemoteSerializeResult<Record<string, unknown>>
}

export const About = forwardRef(({ source, ...rest }: AboutProps, ref) => {
	return (
		<chakra.section
			ref={ref}
			id='about'
			minH='100vh'
			pt={32}
			{...rest}
		>
			<Stack align='flex-start' direction='column'>
				<Heading as='h2' pb={4} size='xl'>
					About me
				</Heading>

				<Flex flexDir='column' fontSize='lg' gap={4} lineHeight={1.5}>
					<MDXRemote components={{ Link }} {...source} />
				</Flex>
			</Stack>
		</chakra.section>
	)
})

export default About
