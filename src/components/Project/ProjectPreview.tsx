import { useBreakpointValue } from '@chakra-ui/media-query'
import { useColorModeValue } from '@chakra-ui/system'
import { Flex, type FlexProps } from '@chakra-ui/layout'
import { type FC, useEffect, useRef, useState } from 'react'
import type { Project } from '~/types'
import { remToPx } from '~/utils/units'
import { defaultDesktopSize, defaultMobileSize, getContainerHeight, getDimensions } from '~/utils/project-preview'
import { WebPreview } from './WebPreview'
import { PackagePreview } from './PackagePreview'

interface ProjectProps extends FlexProps {
	project: Project
}

export const ProjectPreview: FC<ProjectProps> = ({ project: p, ...props }) => {
	const bg = useColorModeValue('gray.100', 'gray.700')
	const borderColor = useColorModeValue('gray.200', 'gray.600')
	const onHoverBorderColor = useColorModeValue('gray.300', 'gray.700')
	const containerRef = useRef<HTMLDivElement>(null)
	const [mobileSize, setMobileSize] = useState(defaultMobileSize)
	const [desktopSize, setDesktopSize] = useState(defaultDesktopSize)
	const [containerWidth, setContainerWidth] = useState<number | null>(null)
	const previewPadding = useBreakpointValue({ base: '1rem', sm: '1.6rem', md: '2rem' }, { fallback: 'base' })

	const containerMinHeight = containerWidth ? getContainerHeight(containerWidth) : undefined
	const placeholderHeight = containerMinHeight ? containerMinHeight * 0.8 : undefined

	const hasScreenshots = p.images?.desktop && p.images?.mobile
	const isNpmLib = !hasScreenshots && p.tags.includes('package') && p.stack.includes('npm') && p.url && p.packageName

	useEffect(
		function setSizes() {
			if (containerRef.current) {
				const containerWidth = containerRef.current.clientWidth
				const desktopPadding = 2 * remToPx(parseInt(previewPadding!))

				const { desktop: desktopSize, mobile: mobileSize } = getDimensions(containerWidth, desktopPadding)

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
			_hover={{
				borderColor: onHoverBorderColor,
				shadow: 'sm'
			}}
			align='start'
			bg={bg}
			border='1px solid'
			borderColor={borderColor}
			borderRadius={{ base: 8, md: 16 }}
			justify='center'
			minHeight={isNpmLib ? 180 : containerMinHeight}
			pos='relative'
			width='full'
			{...props}
		>
			{hasScreenshots && (
				<WebPreview
					desktopSize={desktopSize}
					mobileSize={mobileSize}
					placeholderHeight={placeholderHeight}
					project={p}
				/>
			)}

			{isNpmLib && <PackagePreview project={p} />}
		</Flex>
	)
}

export default ProjectPreview
