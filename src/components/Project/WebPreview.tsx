import { useBreakpointValue } from '@chakra-ui/media-query'
import { Atropos } from 'atropos/react'
import type { ImageSize, Project } from '~/types'
import { WebPreviewImage } from './WebPreviewImage'

interface WebPreviewProps {
	project: Project
	placeholderHeight?: number
	mobileSize: ImageSize
	desktopSize: ImageSize
}

export const WebPreview: React.FC<WebPreviewProps> = props => {
	const { project, placeholderHeight, desktopSize, mobileSize } = props
	const previewPadding = useBreakpointValue(
		{ base: '1rem', sm: '1.6rem', md: '2rem' },
		{ fallback: 'base' }
	)

	return (
		<Atropos
			className='project-preview'
			rotateTouch='scroll-y'
			rotateXMax={24}
			rotateYMax={24}
			shadow={false}
		>
			<WebPreviewImage
				containerHeight={placeholderHeight}
				dataAtroposOffset={-4}
				imageSize={desktopSize}
				mode='desktop'
				padding={previewPadding}
				project={project}
			/>

			<WebPreviewImage
				containerHeight={placeholderHeight}
				dataAtroposOffset={8}
				imageSize={mobileSize}
				mode='mobile'
				project={project}
			/>
		</Atropos>
	)
}
