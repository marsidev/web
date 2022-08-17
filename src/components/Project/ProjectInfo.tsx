import { Flex, type FlexProps, Heading, Text } from '@chakra-ui/react'
import { ProjectTags, ProjectUrls } from '.'

export type ProjectRenderMode = 'even' | 'odd' | 'small-screen' | undefined

interface ProjectProps extends FlexProps {
	project: Project
	renderMode: ProjectRenderMode
}

export const ProjectInfo: React.FC<ProjectProps> = ({
	project: p,
	renderMode = 'even',
	...props
}) => {
	const textAlign =
		renderMode === 'small-screen' || renderMode === 'odd'
			? 'left'
			: 'right'

	const justify =
		renderMode === 'small-screen' || renderMode === 'odd'
			? 'flex-start'
			: 'flex-end'

	return (
		<Flex flexDir='column' gap={4} textAlign={textAlign} w='100%' {...props}>
			<Heading as='h4' fontSize='lg'>
				{p.name}
			</Heading>

			<Text fontSize='md' mt={-2}>
				{p.description}
			</Text>

			<ProjectUrls justify={justify} project={p} />

			<ProjectTags justify={justify} project={p} />
		</Flex>
	)
}

export default ProjectInfo
