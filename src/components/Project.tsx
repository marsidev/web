import { Stack, type StackProps } from '@chakra-ui/react'
import { ProjectInfo, ProjectPreview } from '~/components'

interface ProjectProps extends StackProps {
	project: ProjectType
}

export const Project: React.FC<ProjectProps> = ({ project, ...props }) => {
	return (
		<Stack borderRadius={8} direction='row' px={8} py={4} spacing={4} {...props}>
			<ProjectInfo project={project} />
			<ProjectPreview minW='57%' project={project} />
		</Stack>
	)
}

export default Project
