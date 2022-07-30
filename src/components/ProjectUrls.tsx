import { Flex, type FlexProps, IconButton } from '@chakra-ui/react'
import { ExternalLinkIcon, GithubOutlineIcon, Link } from '.'

interface ProjectProps extends FlexProps {
	project: ProjectType
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
			<Link isExternal href={project.repository}>
				<IconButton
					aria-label='GitHub icon'
					colorScheme='teal'
					icon={<GithubOutlineIcon />}
					size='sm'
				/>
			</Link>

			<Link isExternal href={project.url}>
				<IconButton
					aria-label='External link icon'
					colorScheme='pink'
					icon={<ExternalLinkIcon />}
					size='sm'
				/>
			</Link>
		</Flex>
	)
}

export default ProjectUrls
