import { Flex, Heading, Stack } from '@chakra-ui/react'
import { Project } from '~/components'
import { PROJECTS } from '~/constants'

export const Projects = () => {
	const sampleProject = PROJECTS.find(project => project.id === 'climatic') as ProjectType

	return (
		<Stack
			align='flex-start'
			as='section'
			// direction={{ base: 'column', md: 'row' }}
			direction='column'
			id='projects'
			spacing={[4, 4, 8]}
		>
			<Flex flexDir='column' textAlign='left'>
				<Heading as='h2' size='xl'>
					Projects
				</Heading>

				<Heading as='h3' fontWeight={400} size='md'>
					A selection of my favorite works.
				</Heading>
			</Flex>

			{sampleProject && <Project project={sampleProject} type='even' />}
			{sampleProject && <Project project={sampleProject} type='odd' />}
		</Stack>
	)
}

export default Projects
