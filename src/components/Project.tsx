import { Stack, type StackProps, useBreakpointValue } from '@chakra-ui/react'
import { ProjectInfo, ProjectPreview, ProjectRenderMode } from '~/components'

interface ProjectProps extends StackProps {
	project: Project
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
			<ProjectInfo project={project} renderMode={renderMode} />
			{project.images && <ProjectPreview minW='57%' project={project} />}
		</Stack>
	)
}

export default Project
