import { Button, Flex, type FlexProps } from '@chakra-ui/react'
import { Link } from '~/components/Link'
import { ExternalLinkIcon, GithubOutlineIcon } from '~/icons'
import { Project } from '~/types'

interface ProjectProps extends FlexProps {
	project: Project
}

export const ProjectUrls: React.FC<ProjectProps> = ({ project, ...props }) => {
	return (
		<Flex
			align='center'
			flexDirection={['column', 'row']}
			flexWrap='wrap'
			gap={2}
			justify='center'
			{...props}
		>
			{project.repository && (
				<Link
					isExternal
					borderRadius='md'
					href={project.repository}
					minW={['full', 0]}
				>
					<Button
						aria-label='GitHub icon'
						as='div'
						colorScheme='teal'
						iconSpacing={2}
						leftIcon={<GithubOutlineIcon />}
						px={2}
						size='sm'
						w='full'
					>
						Source
					</Button>
				</Link>
			)}

			{project.url && (
				<Link
					isExternal
					borderRadius='md'
					href={project.url}
					minW={['full', 0]}
				>
					<Button
						aria-label='External link icon'
						as='div'
						colorScheme='pink'
						iconSpacing={2}
						leftIcon={<ExternalLinkIcon />}
						px={2}
						size='sm'
						w='full'
					>
						Site
					</Button>
				</Link>
			)}
		</Flex>
	)
}

export default ProjectUrls
