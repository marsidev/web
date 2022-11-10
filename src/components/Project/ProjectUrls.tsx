import { Flex, type FlexProps } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { ExternalLinkIcon, GithubOutlineIcon } from '~/icons'
import type { Project } from '~/types'
import { Link } from '~/components/Link'

interface ProjectProps extends FlexProps {
	project: Project
}

export const ProjectUrls: React.FC<ProjectProps> = ({ project, ...props }) => {
	return (
		<Flex align='center' flexDirection={['column', 'row']} flexWrap='wrap' gap={2} justify='center' {...props}>
			{project.repository && (
				<Button
					aria-label='GitHub icon'
					as={Link}
					colorScheme='teal'
					href={project.repository}
					iconSpacing={2}
					leftIcon={<GithubOutlineIcon />}
					minW={['full', 0]}
					px={2}
					rel='noopener'
					size='sm'
					target='_blank'
				>
					Source
				</Button>
			)}

			{project.url && (
				<Button
					aria-label='Project link icon'
					as={Link}
					colorScheme='pink'
					href={project.url}
					iconSpacing={2}
					leftIcon={<ExternalLinkIcon />}
					minW={['full', 0]}
					px={2}
					rel='noopener'
					size='sm'
					target='_blank'
				>
					Site
				</Button>
			)}
		</Flex>
	)
}

export default ProjectUrls
