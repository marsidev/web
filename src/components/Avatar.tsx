import { Flex, useColorModeValue } from '@chakra-ui/react'
import { Image } from '~/components'

export const Avatar = () => {
	const gradient = useColorModeValue(
		'linear(to bottom right, red.500, pink.600)',
		'linear(to bottom right, red.400, pink.500)'
	)

	return (
		<Flex
			align='center'
			bgGradient={gradient}
			borderRadius='full'
			boxShadow='2xl'
			p={2}
			pos='relative'
			w={{ base: 40, md: 56 }}
		>
			<Image
				alt='Luis Marsiglia'
				borderRadius='full'
				dimensions={[240, 240]}
				loading='lazy'
				objectFit='fill'
				src='/images/avatar.webp'
			/>
		</Flex>
	)
}
