import { Stack, type StackProps } from '@chakra-ui/react'
import { ProjectInfo, ProjectPreview } from '~/components'

interface ProjectProps extends StackProps {
	project: ProjectType
	type: 'even' | 'odd'
}

export const Project: React.FC<ProjectProps> = ({ project, type, ...props }) => {
	return (
		<Stack
			borderRadius={8}
			direction={type === 'even' ? 'row' : 'row-reverse'}
			px={8}
			py={4}
			spacing={8}
			{...props}
		>
			<ProjectInfo project={project} type={type} />
			<ProjectPreview minW='57%' project={project} />
		</Stack>
	)
}

export default Project
