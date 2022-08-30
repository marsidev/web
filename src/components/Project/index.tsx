import { Stack, type StackProps, useBreakpointValue } from '@chakra-ui/react'
import { Project as ProyectType } from '~/types'
import { ProjectInfo, ProjectRenderMode } from './ProjectInfo'
import { ProjectPreview } from './ProjectPreview'

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
			fallback: type
		}
	)

	const desktopDirection = type === 'even' ? 'row' : 'row-reverse'

	return (
		<Stack
			borderRadius={8}
			direction={{
				base: 'column',
				md: desktopDirection
			}}
			px={0}
			py={4}
			spacing={{ base: 8, md: 8 }}
			w='100%'
			{...props}
		>
			<ProjectInfo
				project={project}
				renderMode={renderMode}
				w={{ base: 'full', md: '45%' }}
			/>

			{project.images && (
				<ProjectPreview project={project} w={{ base: 'full', md: '55%' }} />
			)}
		</Stack>
	)
}

export default Project
