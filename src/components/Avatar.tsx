import { Box, Image, useColorModeValue } from '@chakra-ui/react'

export const Avatar = () => {
	const gradient = useColorModeValue(
		'linear(to bottom right, red.500, pink.600)',
		'linear(to bottom right, red.400, pink.500)'
	)

	return (
		<Box
			bgGradient={gradient}
			borderRadius='full'
			boxShadow='2xl'
			p={2}
			w={{ base: 40, md: 56 }}
		>
			<Image
				alt='Luis Marsiglia'
				borderRadius='full'
				filter='brightness(0.90)'
				src='/images/avatar.png'
			/>
		</Box>
	)
}
