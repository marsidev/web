import { Flex, type FlexProps, Image, Tag } from '@chakra-ui/react'
import { TECHNOLOGIES } from '~/constants'
import { Link } from '~/components'

interface ProjectProps extends FlexProps {
	project: Project
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
			{project.stack.map(stackItem => {
				const tech = TECHNOLOGIES[stackItem]
				if (!tech) {
					return (
						<Tag
							key={stackItem}
							_hover={{ transform: 'scale(1.05)' }}
							transition='all 0.15s ease-in'
						>
							{stackItem}
						</Tag>
					)
				}

				return (
					<Link key={tech.id} isExternal href={tech.url}>
						<Tag _hover={{ transform: 'scale(1.05)' }} transition='all 0.15s ease-in'>
							{tech.icon && (
								<Image
									alt={`${tech.name} logo`}
									h='20px'
									pr={1}
									src={tech.icon}
									w='auto'
								/>
							)}

							{tech.name}
						</Tag>
					</Link>
				)
			})}
		</Flex>
	)
}

export default ProjectTags
