import { Flex, type FlexProps, Heading, Text } from '@chakra-ui/react'
import { ProjectTags, ProjectUrls } from '.'

interface ProjectProps extends FlexProps {
	project: ProjectType
}

export const ProjectInfo: React.FC<ProjectProps> = ({ project: p, ...props }) => {
	return (
		<Flex flexDir='column' gap={4} {...props}>
			<Heading as='h4' fontSize='lg'>
				{p.name}
			</Heading>

			<Text fontSize='md'>{p.description}</Text>

			<ProjectTags project={p} />
			<ProjectUrls project={p} />
		</Flex>
	)
}

export default ProjectInfo
