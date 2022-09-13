import type { ButtonProps, FlexProps } from '@chakra-ui/react'
import {
	Button,
	Flex,
	Heading,
	Skeleton,
	Tag,
	chakra,
	useBreakpointValue
} from '@chakra-ui/react'
import { type FC, useCallback, useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { TECHNOLOGIES } from '~/constants/technologies'
import { Link } from '~/components/Link'
import { capitalize } from '~/utils/capitalize'
import type { Project } from '~/types'
import { CloudinaryImage } from '~/components/CloudinaryImage'

interface ProjectProps extends FlexProps {
	project: Project
}

interface ShowAllProps extends ButtonProps {
	showAll: boolean
}

const ShowAll: FC<ShowAllProps> = ({ showAll, ...rest }) => {
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

export const ProjectTechs: FC<ProjectProps> = ({ project, ...props }) => {
	const [showAll, setShowAll] = useState(false)
	const [iconLoaded, setIconLoaded] = useState(false)
	const [parent] = useAutoAnimate<HTMLDivElement>({ duration: 250, easing: 'ease-out' })
	const defaultTagsToShow = useBreakpointValue({ base: 3, sm: 5, md: 5, lg: 7 })
	const logoSize = useBreakpointValue({ base: 16, md: 18 })

	const maxTagsToShow = showAll ? project.stack.length : defaultTagsToShow
	const showShowAllBtn = defaultTagsToShow && project.stack.length > defaultTagsToShow

	const onLoadIcon = useCallback(() => setIconLoaded(true), [])

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
									<Skeleton
										as='span'
										fadeDuration={1}
										height={`${logoSize as number}px`}
										isLoaded={iconLoaded}
										width={`${logoSize as number}px`}
									>
										<CloudinaryImage
											alt={`${tech.name} logo`}
											deliveryHeight={128}
											deliveryQuality={100}
											deliveryWidth={128}
											height={`${logoSize as number}px`}
											lazyLoadPlugin={true}
											loading='lazy'
											publicId={`marsidev${tech.icon}`}
											width={`${logoSize as number}px`}
											onLoad={onLoadIcon}
										/>
									</Skeleton>
								)}
								<chakra.span ml={2}>{tech.name}</chakra.span>
							</Tag>
						</Link>
					)
				})}

				{showShowAllBtn && (
					<ShowAll showAll={showAll} onClick={() => setShowAll(!showAll)} />
				)}
			</Flex>
		</Flex>
	)
}

export default ProjectTechs
