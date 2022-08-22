import {
	Button,
	type ButtonProps,
	Flex,
	type FlexProps,
	Heading,
	Image,
	Tag,
	chakra,
	useBreakpointValue
} from '@chakra-ui/react'
import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { TECHNOLOGIES } from '~/constants'
import { Link } from '~/components'
import { capitalize } from '~/utils'

interface ProjectProps extends FlexProps {
	project: Project
}

interface ShowAllProps extends ButtonProps {
	showAll: boolean
}

const ShowAll: React.FC<ShowAllProps> = ({ showAll, ...rest }) => {
	return (
		<Button
			colorScheme={showAll ? 'orange' : 'green'}
			fontSize='sm'
			fontWeight='black'
			lineHeight={1.2}
			size='xs'
			{...rest}
		>
			{showAll ? 'Show less' : 'Show more'}
		</Button>
	)
}

export const ProjectTechs: React.FC<ProjectProps> = ({ project, ...props }) => {
	const [showAll, setShowAll] = useState(false)
	const [parent] = useAutoAnimate<HTMLDivElement>({ duration: 250, easing: 'ease-out' })
	const defaultTagsToShow = useBreakpointValue({ base: 3, sm: 5, md: 5, lg: 7 })

	const maxTagsToShow = showAll ? project.stack.length : defaultTagsToShow
	const showShowAllBtn =
		defaultTagsToShow && project.stack.length > defaultTagsToShow

	const toggleShowAll = () => {
		setShowAll(!showAll)
	}

	return (
		<Flex flexDir='column' gap={2}>
			<Heading as='h5' fontSize='md' fontWeight='medium'>Technologies</Heading>

			<Flex
				ref={parent}
				direction='row'
				flexWrap='wrap'
				gap={2}
				justify='flex-start'
				textAlign='left'
				{...props}
			>
				{project.stack.map((stackItem, stackIndex) => {
					const tech = TECHNOLOGIES[stackItem]

					if (maxTagsToShow && stackIndex >= maxTagsToShow && !showAll) {
						return null
					}

					if (!tech) {
						return (
							<Tag
								key={stackItem}
								_hover={{ transform: 'scale(1.05)' }}
								borderRadius='md'
								transition='all 0.15s ease-out'
								verticalAlign='middle'
							>
								{capitalize(stackItem)}
							</Tag>
						)
					}

					return (
						<Link key={tech.id} isExternal borderRadius='md' href={tech.url}>
							<Tag
								_hover={{ transform: 'scale(1.05)' }}
								py={1}
								size='md'
								transition='all 0.15s ease-out'
								verticalAlign='middle'
							>
								{tech.icon && (
									<chakra.span>
										<Image
											alt={`${tech.name} logo`}
											h={{ base: '16px', md: '18px' }}
											loading='lazy'
											pr={1}
											src={tech.icon}
											w='auto'
										/>
									</chakra.span>
								)}
								<chakra.span>{tech.name}</chakra.span>
							</Tag>
						</Link>
					)
				})}

				{showShowAllBtn && (
					<ShowAll showAll={showAll} onClick={toggleShowAll} />
				)}
			</Flex>
		</Flex>
	)
}

export default ProjectTechs
