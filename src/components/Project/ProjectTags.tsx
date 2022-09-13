import { Badge, Stack, type StackProps } from '@chakra-ui/react'
import type { Project } from '~/types'

interface ProjectProps extends StackProps {
	project: Project
}

export const ProjectTags: React.FC<ProjectProps> = ({ project: p, ...props }) => {
	const thereIsTags = !!p.private || !!p.challenge || !!p.notFinished

	if (!thereIsTags) return null

	return (
		<Stack direction='row' flexWrap='wrap' rowGap={2} {...props}>
			{p.private && <Badge colorScheme='orange'>Private</Badge>}

			{p.challenge && <Badge colorScheme='twitter'>Challenge</Badge>}

			{p.notFinished && <Badge colorScheme='pink'>Not finished</Badge>}
		</Stack>
	)
}

export default ProjectTags
