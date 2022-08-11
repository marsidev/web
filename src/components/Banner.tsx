import { Flex, type FlexProps, useColorModeValue } from '@chakra-ui/react'

type BannerProps = FlexProps

export const Banner: React.FC<BannerProps> = () => {
	const gradient = useColorModeValue(
		'linear(to bottom right, red.500, pink.600)',
		'linear(to bottom right, red.400, pink.500)'
	)

	return (
		<Flex
			bgGradient={gradient}
			color={useColorModeValue('white', 'black')}
			justify='center'
		>
			This site is a work in progress.
		</Flex>
	)
}
