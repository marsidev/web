import { Flex, type FlexProps, Heading, Text } from '@chakra-ui/react'
import { Project } from '~/types'
import { ProjectTags } from './ProjectTags'
import { ProjectTechs } from './ProjectTechs'
import { ProjectUrls } from './ProjectUrls'

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
		<Flex flexDir='column' gap={2} textAlign={textAlign} w='100%' {...props}>
			<Heading as='h4' fontSize='lg'>
				{p.name}
			</Heading>

			<ProjectTags justify={justify} project={p} />

			<Text fontSize='md' pb={2}>
				{p.description}
			</Text>

			<ProjectUrls justify={justify} pb={2} project={p} />

			<ProjectTechs justify={justify} project={p} />
		</Flex>
	)
}

export default ProjectInfo
