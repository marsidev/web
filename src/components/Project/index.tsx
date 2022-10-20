import { Stack, type StackProps } from '@chakra-ui/layout'
import { Show, useBreakpointValue } from '@chakra-ui/media-query'
import type { Project as ProjectType } from '~/types'
import { ProjectInfo, ProjectRenderMode } from './ProjectInfo'
import { ProjectPreview } from './ProjectPreview'
import { ProjectTechs } from './ProjectTechs'
import { ProjectUrls } from './ProjectUrls'

interface ProjectProps extends StackProps {
	project: ProjectType
	type: 'even' | 'odd'
}

export const Project: React.FC<ProjectProps> = ({ project, type, ...props }) => {
	const renderMode: ProjectRenderMode = useBreakpointValue(
		{
			base: 'small-screen',
			md: type
		},
		{
			fallback: 'base'
		}
	)

	const desktopDirection = type === 'even' ? 'row' : 'row-reverse'

	const textAlign = renderMode === 'small-screen' || renderMode === 'odd' ? 'left' : 'right'

	const justify = renderMode === 'small-screen' || renderMode === 'odd' ? 'flex-start' : 'flex-end'

	return (
		<>
			<Show breakpoint='(max-width: 767px)'>
				<Stack as='article' direction='column' spacing={4} textAlign={textAlign} w='100%' {...props}>
					<ProjectInfo justify={justify} project={project} w='full' />
					<ProjectPreview project={project} w={{ base: 'full', md: '55%' }} />
					<ProjectTechs justify={justify} project={project} />
					<ProjectUrls justify={justify} project={project} />
				</Stack>
			</Show>

			<Show breakpoint='(min-width: 768px)'>
				<Stack as='article' direction={desktopDirection} pb={8} spacing={8} textAlign={textAlign} w='100%' {...props}>
					<Stack direction='column' spacing={4} w='45%'>
						<ProjectInfo justify={justify} project={project} />
						<ProjectTechs justify={justify} project={project} />
						<ProjectUrls justify={justify} project={project} />
					</Stack>

					<ProjectPreview project={project} w='55%' />
				</Stack>
			</Show>
		</>
	)
}

export default Project
