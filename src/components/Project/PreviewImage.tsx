import { Flex, type FlexProps } from '@chakra-ui/layout'
import { Skeleton } from '@chakra-ui/skeleton'
import { type FC, useCallback, useState } from 'react'
import { CloudinaryImage } from '~/components/CloudinaryImage'
import type { ImageSize, Project } from '~/types'
import { deliverySize } from '~/utils/project-preview'

interface PreviewImageProps extends FlexProps {
	imageSize: ImageSize
	dataAtroposOffset?: number | string
	mode: 'mobile' | 'desktop'
	containerHeight?: number | string
	project: Project
}

export const PreviewImage: FC<PreviewImageProps> = ({
	imageSize,
	dataAtroposOffset,
	mode,
	containerHeight,
	project,
	...rest
}) => {
	const [imageLoaded, setImageLoaded] = useState(false)

	const containerWidth = mode === 'mobile' ? '25%' : 'full'

	const deliveryWidth = deliverySize[mode].width
	const deliveryHeight = deliverySize[mode].height

	const className = `project-preview-${mode}`
	const alt = `${project.name} ${mode} preview`

	const onLoad = useCallback(() => setImageLoaded(true), [])

	return (
		<Flex
			align='center'
			className={className}
			height={containerHeight}
			width={containerWidth}
			{...rest}
		>
			<Skeleton
				borderRadius={{ base: 8, md: 16 }}
				data-atropos-offset={dataAtroposOffset}
				fadeDuration={1}
				height={containerHeight}
				isLoaded={imageLoaded}
				width='full'
			>
				<CloudinaryImage
					useNextImageInDevelopment
					alt={alt}
					deliveryHeight={deliveryHeight}
					deliveryQuality={90}
					deliveryWidth={deliveryWidth}
					height={imageSize.height}
					lazyLoadPlugin={true}
					loading='lazy'
					placeholderPlugin={true}
					src={project.images[mode]}
					subPath='marsidev'
					width={imageSize.width}
					onLoad={onLoad}
				/>
			</Skeleton>
		</Flex>
	)
}

export default PreviewImage
