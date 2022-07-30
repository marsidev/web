import { Stack, type StackProps } from '@chakra-ui/react'
import { ProjectInfo, ProjectPreview } from '~/components'

interface ProjectProps extends StackProps {
	project: ProjectType
}

export const Project: React.FC<ProjectProps> = ({ project, ...props }) => {
	return (
		<Stack direction='row' px={8} py={4} spacing={4} {...props}>
			<ProjectInfo project={project} w='33.33%' />
			<ProjectPreview project={project} w='66.67%' />
		</Stack>
	)
}

export default Project
