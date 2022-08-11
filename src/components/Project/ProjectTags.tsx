import { Button, type ButtonProps, Flex, type FlexProps, Image, Tag } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import autoAnimate from '@formkit/auto-animate'
import { TECHNOLOGIES } from '~/constants'
import { Link } from '~/components'

interface ProjectProps extends FlexProps {
	project: Project
}

interface ShowAllProps extends ButtonProps {
	showAll: boolean
}

const ShowAll: React.FC<ShowAllProps> = ({ showAll, ...rest }) => {
	return (
		<Button colorScheme='cyan' size='xs' {...rest}>
			{showAll ? 'Show less' : 'Show more'}
		</Button>
	)
}

export const ProjectTags: React.FC<ProjectProps> = ({ project, ...props }) => {
	const [showAll, setShowAll] = useState(false)
	const parent = useRef(null)

	useEffect(() => {
		parent.current && autoAnimate(parent.current)
	}, [parent])

	const defaultMaxTagsToShow = 7
	const maxTagsToShow = showAll ? project.stack.length : defaultMaxTagsToShow
	const showShowAllBtn = project.stack.length > defaultMaxTagsToShow

	const toggleShowAll = () => {
		setShowAll(!showAll)
	}

	return (
		<Flex
			ref={parent}
			direction='row'
			// exit='exit'
			flexWrap='wrap'
			gap={2}
			justify='flex-start'
			textAlign='left'
			{...props}
		>
			{project.stack.map((stackItem, stackIndex) => {
				const tech = TECHNOLOGIES[stackItem]

				if (stackIndex >= maxTagsToShow && !showAll) {
					return null
				}

				if (!tech) {
					return (
						<Tag
							key={stackItem}
							_hover={{ transform: 'scale(1.05)' }}
							transition='all 0.15s ease-out'
						>
							{stackItem}
						</Tag>
					)
				}

				return (
					<Link
						key={tech.id}
						isExternal
						href={tech.url}
					>
						<Tag
							_hover={{ transform: 'scale(1.05)' }}
							size={{ base: 'sm', md: 'md' }}
							transition='all 0.15s ease-out'
						>
							{tech.icon && (
								<Image
									alt={`${tech.name} logo`}
									h={{ base: '16px', md: '20px' }}
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

			{showShowAllBtn && <ShowAll showAll={showAll} onClick={toggleShowAll} />}
		</Flex>
	)
}

export default ProjectTags
