import { Button, type ButtonProps } from '@chakra-ui/button'
import { Flex, type FlexProps, Heading } from '@chakra-ui/layout'
import { Skeleton } from '@chakra-ui/skeleton'
import { type ChakraProps, chakra, useColorModeValue } from '@chakra-ui/system'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { type FC, useCallback, useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { TECHNOLOGIES } from '~/constants/technologies'
import { capitalize } from '~/utils/capitalize'
import type { Project } from '~/types'
import { CloudinaryImage } from '~/components/CloudinaryImage'
import { Link } from '~/components/Link'

interface ProjectProps extends FlexProps {
	project: Project
}

interface ShowAllProps extends ButtonProps {
	showAll: boolean
}

const defaultTagStyles: ChakraProps = {
	background: 'gray.100',
	color: 'gray.800',
	display: 'flex',
	verticalAlign: 'middle',
	alignItems: 'center',
	maxW: 'full',
	fontWeight: 'medium',
	lineHeight: 1.2,
	outline: 'transparent solid 2px',
	outlineOffset: '2px',
	borderRadius: 'md',
	minH: 6,
	minW: 6,
	fontSize: 'sm',
	px: 2,
	py: 1,
	transition: 'all 0.15s ease-out'
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
	const [parent] = useAutoAnimate<HTMLDivElement>({
		duration: 250,
		easing: 'ease-out'
	})
	const defaultTagsToShow = useBreakpointValue({ base: 3, sm: 5, md: 5, lg: 7 })
	const logoSize = useBreakpointValue({ base: 16, md: 18 })
	const tagBg = useColorModeValue('gray.100', 'rgba(226, 232, 240, 0.16)')
	const tagColor = useColorModeValue('gray.800', 'gray.200')

	const tagStyles: ChakraProps = {
		...defaultTagStyles,
		background: tagBg,
		color: tagColor
	}

	const maxTagsToShow = showAll ? project.stack.length : defaultTagsToShow
	const showShowAllBtn = defaultTagsToShow && project.stack.length > defaultTagsToShow

	const onLoadIcon = useCallback(() => setIconLoaded(true), [])

	return (
		<Flex flexDir='column' gap={2}>
			<Heading as='h5' fontSize='md' fontWeight='medium'>
				Technologies
			</Heading>

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
							<chakra.span key={stackItem} _hover={{ transform: 'scale(1.05)' }} {...tagStyles}>
								{capitalize(stackItem)}
							</chakra.span>
						)
					}

					return (
						<Link
							key={tech.id}
							isExternal
							_hover={{ transform: 'scale(1.05)' }}
							href={tech.url}
							{...tagStyles}
						>
							{tech.icon && (
								<Skeleton
									alignItems='center'
									as='span'
									display='flex'
									fadeDuration={1}
									height={`${logoSize as number}px`}
									isLoaded={iconLoaded}
									width={`${logoSize as number}px`}
								>
									<CloudinaryImage
										useNextImageInDevelopment
										alt={`${tech.name} logo`}
										deliveryHeight={128}
										deliveryQuality={100}
										deliveryWidth={128}
										height={`${logoSize as number}`}
										src={tech.icon}
										subPath='marsidev'
										width={`${logoSize as number}`}
										onLoad={onLoadIcon}
									/>
								</Skeleton>
							)}
							<chakra.span lineHeight={1} ml={2}>
								{tech.name}
							</chakra.span>
						</Link>
					)
				})}

				{showShowAllBtn && <ShowAll showAll={showAll} onClick={() => setShowAll(!showAll)} />}
			</Flex>
		</Flex>
	)
}

export default ProjectTechs
