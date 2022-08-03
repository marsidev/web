import { Badge, Flex, type FlexProps, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { Link } from '~/components'
import { ExternalLinkIcon, GithubOutlineIcon } from '~/icons'

interface ProjectProps extends FlexProps {
	project: Project
}

export const ProjectUrls: React.FC<ProjectProps> = ({ project, ...props }) => {
	const buttonSize = useBreakpointValue({ base: 'xs', md: 'sm' })

	return (
		<Flex
			flexDirection='row'
			flexWrap='wrap'
			gap={2}
			justify='flex-start'
			textAlign='left'
			{...props}
		>
			{project.repository && (
				<Link isExternal href={project.repository}>
					<IconButton
						aria-label='GitHub icon'
						colorScheme='teal'
						icon={<GithubOutlineIcon />}
						size={buttonSize}
					/>
				</Link>
			)}

			{project.url && (
				<Link isExternal href={project.url}>
					<IconButton
						aria-label='External link icon'
						colorScheme='pink'
						icon={<ExternalLinkIcon />}
						size={buttonSize}
					/>
				</Link>
			)}

			{project.private && <Badge colorScheme='orange'>Private project</Badge>}
		</Flex>
	)
}

export default ProjectUrls
