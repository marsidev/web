import { useColorModeValue } from '@chakra-ui/system'
import { Box } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { Skeleton } from '@chakra-ui/skeleton'
import { useCallback, useMemo, useState } from 'react'
import { CloudinaryImage } from '~/components/CloudinaryImage'

const unitToPx = (units: number) => {
	return units * 4
}

export const Avatar = () => {
	const gradient = useColorModeValue(
		'linear(to bottom right, red.500, pink.600)',
		'linear(to bottom right, red.400, pink.500)'
	)

	const [loaded, setLoaded] = useState<boolean>(false)
	const containerWidth = useBreakpointValue(
		{ base: 48, md: 56 },
		{ fallback: 'md' }
	)

	const containerPadding = 2
	const avatarSize = useMemo(() => {
		return unitToPx(containerWidth!) - 2 * unitToPx(containerPadding)
	}, [containerWidth, containerPadding])

	const onLoad = useCallback(() => setLoaded(true), [])

	return (
		<Box
			bgGradient={loaded ? gradient : undefined}
			borderRadius='full'
			boxShadow='2xl'
			p={containerPadding}
			pos='relative'
			w={containerWidth}
		>
			<Skeleton
				borderRadius='full'
				fadeDuration={1}
				height={avatarSize}
				isLoaded={loaded}
				width={avatarSize}
			>
				<CloudinaryImage
					alt='Luis Marsiglia'
					brightness={5}
					deliveryQuality={100}
					height={500}
					loading='eager'
					placeholderPlugin={true}
					publicId='marsidev/images/avatar.png'
					radius='full'
					width={500}
					onLoad={onLoad}
				/>
			</Skeleton>
		</Box>
	)
}
