import { Skeleton } from '@chakra-ui/skeleton'
import { Flex, type FlexProps, Heading } from '@chakra-ui/layout'
import { useCallback, useMemo, useState } from 'react'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { Link } from '~/components/Link'
import type { Project } from '~/types'
import { CloudinaryImage } from '~/components/CloudinaryImage'

interface PackagePreviewProps extends FlexProps {
	project: Project
	placeholderHeight: number | undefined
	imageWidth: number
}

export const PackagePreview: React.FC<PackagePreviewProps> = props => {
	const { project, placeholderHeight, imageWidth, ...rest } = props
	const [imageLoaded, setImageLoaded] = useState(false)
	const borderRadius = useBreakpointValue({ base: '8px', md: '16px' }, { fallback: 'base' })

	const onLoad = useCallback(() => setImageLoaded(true), [])
	const imageHeight = useMemo(() => Math.floor(imageWidth * 0.5), [imageWidth])

	return (
		<Flex align='center' height={placeholderHeight} width='full' {...rest}>
			<Skeleton
				borderRadius={borderRadius}
				fadeDuration={1}
				height={placeholderHeight}
				isLoaded={imageLoaded}
				width='full'
			>
				<Flex
					as={Link}
					borderRadius={borderRadius}
					flexDir='column'
					h='full'
					href={project.url!}
					rel='noopener'
					target='_blank'
				>
					<Flex h='80%'>
						<CloudinaryImage
							useNextImageInDevelopment
							alt='npm'
							deliveryQuality={75}
							deliveryWidth={1200}
							height={imageHeight}
							placeholderPlugin={true}
							src='/images/bg/npm.png'
							style={{
								borderStartStartRadius: borderRadius,
								borderStartEndRadius: borderRadius,
								objectFit: 'cover',
								width: '100%',
								height: placeholderHeight ? `${placeholderHeight * 0.8}px` : undefined
							}}
							subPath='marsidev'
							width={imageWidth}
							onLoad={onLoad}
						/>
					</Flex>

					<Flex align='center' h='20%' p={{ base: 2, md: 4 }}>
						<Heading as='h4' fontSize='md' textAlign='left'>
							{project.packageName!}
						</Heading>
					</Flex>
				</Flex>
			</Skeleton>
		</Flex>
	)
}
