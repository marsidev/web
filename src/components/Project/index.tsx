import { Stack, type StackProps } from '@chakra-ui/layout'
import { Show } from '@chakra-ui/media-query'
import type { Project as ProjectType } from '~/types'
import { ProjectInfo } from './ProjectInfo'
import { ProjectPreview } from './ProjectPreview'
import { ProjectTechs } from './ProjectTechs'
import { ProjectUrls } from './ProjectUrls'

interface ProjectProps extends StackProps {
	project: ProjectType
}

export const Project: React.FC<ProjectProps> = ({ project, ...props }) => {
	return (
		<>
			<Show breakpoint='(max-width: 767px)'>
				<Stack as='article' direction='column' spacing={4} textAlign='left' w='100%' {...props}>
					<ProjectInfo justify='flex-start' project={project} w='full' />
					<ProjectPreview project={project} w={{ base: 'full', md: '55%' }} />
					<ProjectTechs justify='flex-start' project={project} />
					<ProjectUrls justify='flex-start' project={project} />
				</Stack>
			</Show>

			<Show breakpoint='(min-width: 768px)'>
				<Stack as='article' direction='row' pb={8} spacing={8} textAlign='left' w='100%' {...props}>
					<ProjectPreview project={project} w='55%' />

					<Stack direction='column' spacing={4} w='45%'>
						<ProjectInfo justify='flex-start' project={project} />
						<ProjectTechs justify='flex-start' project={project} />
						<ProjectUrls justify='flex-start' project={project} />
					</Stack>
				</Stack>
			</Show>
		</>
	)
}

export default Project
