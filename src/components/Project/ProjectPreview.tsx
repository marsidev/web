import { useBreakpointValue } from '@chakra-ui/media-query'
import { useColorModeValue } from '@chakra-ui/system'
import { Flex, type FlexProps } from '@chakra-ui/layout'
import { Atropos } from 'atropos/react'
import { type FC, useEffect, useRef, useState } from 'react'
import type { Project } from '~/types'
import { remToPx } from '~/utils/units'
import {
	defaultDesktopSize,
	defaultMobileSize,
	getContainerHeight,
	getDimensions
} from '~/utils/project-preview'
import { PreviewImage } from './PreviewImage'

interface ProjectProps extends FlexProps {
	project: Project
}

export const ProjectPreview: FC<ProjectProps> = ({ project: p, ...props }) => {
	const bg = useColorModeValue('gray.100', 'gray.700')
	const borderColor = useColorModeValue('gray.200', 'gray.600')
	const containerRef = useRef<HTMLDivElement>(null)
	const [mobileSize, setMobileSize] = useState(defaultMobileSize)
	const [desktopSize, setDesktopSize] = useState(defaultDesktopSize)
	const [containerWidth, setContainerWidth] = useState<number | null>(null)
	const previewPadding = useBreakpointValue(
		{ base: '1rem', sm: '1.6rem', md: '2rem' },
		{ fallback: 'base' }
	)

	const containerMinHeight = containerWidth
		? getContainerHeight(containerWidth)
		: undefined

	const placeholderHeight = containerMinHeight
		? containerMinHeight * 0.8
		: undefined

	useEffect(
		function setSizes() {
			if (containerRef.current) {
				const containerWidth = containerRef.current.clientWidth
				const desktopPadding = 2 * remToPx(parseInt(previewPadding!))

				const { desktop: desktopSize, mobile: mobileSize } = getDimensions(
					containerWidth,
					desktopPadding
				)

				setContainerWidth(containerWidth)
				setDesktopSize(desktopSize)
				setMobileSize(mobileSize)
			}
		},
		[containerRef.current?.clientWidth, previewPadding]
	)

	return (
		<Flex
			ref={containerRef}
			align='center'
			bg={bg}
			border='1px solid'
			borderColor={borderColor}
			borderRadius={{ base: 8, md: 16 }}
			justify='center'
			minHeight={containerMinHeight}
			pos='relative'
			width='full'
			{...props}
		>
			<Atropos
				className='project-preview'
				rotateTouch='scroll-y'
				rotateXMax={24}
				rotateYMax={24}
				shadow={false}
			>
				<PreviewImage
					containerHeight={placeholderHeight}
					dataAtroposOffset={-4}
					imageSize={desktopSize}
					mode='desktop'
					padding={previewPadding}
					project={p}
				/>

				<PreviewImage
					containerHeight={placeholderHeight}
					dataAtroposOffset={8}
					imageSize={mobileSize}
					mode='mobile'
					project={p}
				/>
			</Atropos>
		</Flex>
	)
}

export default ProjectPreview
