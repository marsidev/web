import { Flex, Heading, Stack } from '@chakra-ui/react'
import { Project } from '~/components'
import { PROJECTS } from '~/constants'
import { sortProjects } from '~/utils'

export const Projects = () => {
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

			{sortProjects(PROJECTS).map((project, i) => (
				<Project
					key={project.id}
					project={project}
					type={i % 2 === 0 ? 'even' : 'odd'}
				/>
			))}
		</Stack>
	)
}

export default Projects
