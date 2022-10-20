import { Badge, BadgeProps, Stack, type StackProps } from '@chakra-ui/layout'
import type { Project, ProjectTag } from '~/types'
import type { PartialRecord } from '~/types/utils'

interface ProjectProps extends StackProps {
	project: Project
}

const colorSchemeByTag: PartialRecord<ProjectTag, BadgeProps['colorScheme']> = {
	private: 'orange',
	challenge: 'twitter',
	unfinished: 'pink',
	web: 'teal',
	package: 'purple'
}

export const ProjectTags: React.FC<ProjectProps> = ({ project: p, ...props }) => {
	return (
		<Stack direction='row' flexWrap='wrap' rowGap={2} {...props}>
			{p.tags.map(tag => {
				return (
					<Badge key={tag} colorScheme={colorSchemeByTag[tag] ?? 'gray'}>
						{tag}
					</Badge>
				)
			})}
		</Stack>
	)
}

export default ProjectTags
