import {
	Show,
	Stack,
	type StackProps,
	useBreakpointValue
} from '@chakra-ui/react'
import { Project as ProyectType } from '~/types'
import { ProjectInfo, ProjectRenderMode } from './ProjectInfo'
import { ProjectPreview } from './ProjectPreview'
import { ProjectTechs } from './ProjectTechs'
import { ProjectUrls } from './ProjectUrls'

interface ProjectProps extends StackProps {
	project: ProyectType
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

	const textAlign =
		renderMode === 'small-screen' || renderMode === 'odd'
			? 'left'
			: 'right'

	const justify =
		renderMode === 'small-screen' || renderMode === 'odd'
			? 'flex-start'
			: 'flex-end'

	return (
		<>
			<Show breakpoint='(max-width: 767px)'>
				<Stack
					direction='column'
					spacing={4}
					textAlign={textAlign}
					w='100%'
					{...props}
				>
					<ProjectInfo justify={justify} project={project} w='full' />
					<ProjectPreview project={project} w={{ base: 'full', md: '55%' }} />
					<ProjectTechs justify={justify} project={project} />
					<ProjectUrls justify={justify} project={project} />
				</Stack>
			</Show>

			<Show breakpoint='(min-width: 768px)'>
				<Stack
					direction={desktopDirection}
					pb={8}
					spacing={8}
					textAlign={textAlign}
					w='100%'
					{...props}
				>
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
