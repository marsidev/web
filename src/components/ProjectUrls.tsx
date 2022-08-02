import { Flex, type FlexProps, IconButton } from '@chakra-ui/react'
import { Link } from '~/components'
import { ExternalLinkIcon, GithubOutlineIcon } from '~/icons'

interface ProjectProps extends FlexProps {
	project: Project
}

export const ProjectUrls: React.FC<ProjectProps> = ({ project, ...props }) => {
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
						size='sm'
					/>
				</Link>
			)}

			{project.url && (
				<Link isExternal href={project.url}>
					<IconButton
						aria-label='External link icon'
						colorScheme='pink'
						icon={<ExternalLinkIcon />}
						size='sm'
					/>
				</Link>
			)}
		</Flex>
	)
}

export default ProjectUrls
