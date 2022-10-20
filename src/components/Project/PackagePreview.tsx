import { Skeleton } from '@chakra-ui/skeleton'
import { Flex, Heading } from '@chakra-ui/layout'
import { useCallback, useState } from 'react'
import { useBreakpointValue } from '@chakra-ui/media-query'
import type { Project } from '~/types'
import { CloudinaryImage } from '~/components/CloudinaryImage'
import { Link } from '~/components/Link'
import { remToPx } from '~/utils/units'

interface PackagePreviewProps {
	project: Project
}

export const PackagePreview: React.FC<PackagePreviewProps> = props => {
	const { project } = props
	const [imageLoaded, setImageLoaded] = useState(false)
	const onLoad = useCallback(() => setImageLoaded(true), [])
	const borderRadius = useBreakpointValue({ base: '8px', md: '16px' }, { fallback: 'base' })
	const cardHeight = useBreakpointValue({ base: 140, md: 240 }, { fallback: 'base' })
	const nameHeight = useBreakpointValue({ base: 40, md: 60 }, { fallback: 'base' })
	const namePadding = useBreakpointValue({ base: 2, md: 4 }, { fallback: 'base' })

	return (
		<Skeleton
			borderRadius={borderRadius}
			fadeDuration={1}
			height={cardHeight! + nameHeight!}
			isLoaded={imageLoaded}
			width='full'
		>
			<Link isExternal href={project.url!}>
				<CloudinaryImage
					useNextImageInDevelopment
					alt='npm'
					deliveryHeight={600}
					deliveryQuality={80}
					deliveryWidth={1200}
					height={cardHeight!}
					lazyLoadPlugin={true}
					loading='lazy'
					placeholderPlugin={true}
					src='/images/bg/npm.png'
					style={{
						borderStartStartRadius: borderRadius,
						borderStartEndRadius: borderRadius,
						objectFit: 'cover',
						width: '600px',
						height: `${cardHeight}px`
					}}
					subPath='marsidev'
					width={600}
					onLoad={onLoad}
				/>

				<Flex align='center' minH={`${nameHeight}px`} p={{ base: 2, md: 4 }}>
					<Heading as='h4' fontSize='md' textAlign='left'>
						{project.packageName!}
					</Heading>
				</Flex>
			</Link>
		</Skeleton>
	)
}
