import { Flex, Heading, Stack, chakra, forwardRef } from '@chakra-ui/react'
import { Project } from '~/components/Project'
import { PROJECTS } from '~/constants/projects'
import { sortProjects } from '~/utils/sort-projects'

export const Projects = forwardRef((props, ref) => {
	return (
		<chakra.section ref={ref} id='projects' minH='100vh' pt={32} {...props}>
			<Stack align='flex-start' direction='column'>
				<Flex flexDir='column' pb={8} textAlign='left'>
					<Heading as='h2' size='xl'>
						Projects
					</Heading>

					<Heading as='h3' fontWeight={400} size='md'>
						A selection of my favorite works.
					</Heading>
				</Flex>

				<Stack direction='column' spacing={{ base: 16, md: 8 }}>
					{sortProjects(PROJECTS).map((project, i) => (
						<Project
							key={project.id}
							project={project}
							type={i % 2 === 0 ? 'even' : 'odd'}
						/>
					))}
				</Stack>
			</Stack>
		</chakra.section>
	)
})

export default Projects
