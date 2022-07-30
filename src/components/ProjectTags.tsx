import { Flex, type FlexProps, Tag } from '@chakra-ui/react'

interface ProjectProps extends FlexProps {
	project: ProjectType
}

export const ProjectTags: React.FC<ProjectProps> = ({ project, ...props }) => {
	return (
		<Flex
			flexDirection='row'
			flexWrap='wrap'
			gap={2}
			justify='flex-start'
			textAlign='left'
			{...props}
		>
			{project.stack.map(stackItem => (
				<Tag key={stackItem}>{stackItem}</Tag>
			))}
		</Flex>
	)
}

export default ProjectTags
