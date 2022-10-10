import { Flex, type FlexProps, Heading, Text } from '@chakra-ui/layout'
import type { Project } from '~/types'
import { ProjectTags } from './ProjectTags'

export type ProjectRenderMode = 'even' | 'odd' | 'small-screen' | undefined

interface ProjectProps extends FlexProps {
	project: Project
	justify: string
}

export const ProjectInfo: React.FC<ProjectProps> = ({
	project: p,
	justify,
	...props
}) => {
	return (
		<Flex flexDir='column' gap={2} {...props}>
			<Heading as='h4' fontSize='lg'>
				{p.name}
			</Heading>

			<ProjectTags justify={justify} project={p} />

			<Text fontSize='md'>{p.description}</Text>
		</Flex>
	)
}

export default ProjectInfo
