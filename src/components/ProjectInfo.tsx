import { Flex, type FlexProps, Heading, Text } from '@chakra-ui/react'
import { ProjectTags, ProjectUrls } from '.'

interface ProjectProps extends FlexProps {
	project: Project
	type: 'even' | 'odd'
}

export const ProjectInfo: React.FC<ProjectProps> = ({ project: p, type, ...props }) => {
	return (
		<Flex
			flexDir='column'
			gap={4}
			textAlign={type === 'even' ? 'right' : 'left'}
			w='100%'
			{...props}
		>
			<Heading as='h4' fontSize='lg'>
				{p.name}
			</Heading>

			<Text fontSize='md'>{p.description}</Text>

			<ProjectTags
				justify={type === 'even' ? 'flex-end' : 'flex-start'}
				project={p}
			/>

			<ProjectUrls
				justify={type === 'even' ? 'flex-end' : 'flex-start'}
				project={p}
			/>
		</Flex>
	)
}

export default ProjectInfo
