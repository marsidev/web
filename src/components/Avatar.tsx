import { Flex, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import { useMemo } from 'react'
import { Image } from '~/components'

const unitToPx = (units: number) => {
	return units * 4
}

export const Avatar = () => {
	const gradient = useColorModeValue(
		'linear(to bottom right, red.500, pink.600)',
		'linear(to bottom right, red.400, pink.500)'
	)

	const containerWidth = useBreakpointValue(
		{ base: 48, md: 56 },
		{ fallback: 'md' }
	)

	const containerPadding = 2
	const avatarSize = useMemo(() => {
		return unitToPx(containerWidth!) - 2 * unitToPx(containerPadding)
	}, [containerWidth])

	return (
		<Flex
			align='center'
			bgGradient={gradient}
			borderRadius='full'
			boxShadow='2xl'
			p={containerPadding}
			pos='relative'
			w={containerWidth}
		>
			<Image
				alt='Luis Marsiglia'
				borderRadius='full'
				className='avatar'
				dimensions={[avatarSize, avatarSize]}
				layout='fixed'
				loading='eager'
				objectFit='fill'
				priority={true}
				src='/images/avatar.webp'
			/>
		</Flex>
	)
}
