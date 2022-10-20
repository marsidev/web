import type { FC } from 'react'
import type { MDXRemoteProps, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Heading, Stack, type StackProps } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { useState } from 'react'
import { chakra, forwardRef } from '@chakra-ui/system'
import { MDXRemote } from 'next-mdx-remote'
import { Link } from '~/components/Link'
import { Age } from '~/components/Age'
import { MotionStack, MotionStackProps } from '~/components/motion'

interface AboutProps extends StackProps {
	shortSource: MDXRemoteSerializeResult<Record<string, unknown>>
	longSource: MDXRemoteSerializeResult<Record<string, unknown>>
}

interface ContentProps extends MotionStackProps {
	source: MDXRemoteSerializeResult<Record<string, unknown>>
	components?: MDXRemoteProps['components']
}

const Content: FC<ContentProps> = ({ source, components }) => {
	return (
		<MotionStack
			animate='animate'
			direction='column'
			exit='exit'
			fontSize='lg'
			initial='initial'
			lineHeight={1.5}
			spacing={4}
			variants={{
				exit: {
					opacity: 0,
					transition: { duration: 1 }
				},
				initial: { opacity: 0 },
				animate: {
					opacity: 1,
					transition: { duration: 1 }
				}
			}}
		>
			<MDXRemote components={components} {...source} />
		</MotionStack>
	)
}

export const About = forwardRef<AboutProps, 'section'>(({ shortSource, longSource, ...rest }, ref) => {
	const [isCompact, setIsCompact] = useState(true)

	return (
		<chakra.section ref={ref} minH='100vh' pt={{ base: 24, sm: 32 }} {...rest}>
			<Stack align='flex-start' direction='column' spacing={4}>
				<Heading as='h2' pb={4} size='xl'>
					About me
				</Heading>

				{isCompact && <Content components={{ Age }} source={shortSource} />}

				{!isCompact && <Content components={{ Link, Age }} source={longSource} />}

				<Button colorScheme='pink' w='fit-content' onClick={() => setIsCompact(prev => !prev)}>
					Read {isCompact ? 'long' : 'short'} version
				</Button>
			</Stack>
		</chakra.section>
	)
})

export default About
