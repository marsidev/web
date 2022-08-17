import { Flex, type FlexProps } from '@chakra-ui/react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Banner } from '~/components'

export const Banners: React.FC<FlexProps> = () => {
	const [bannersParent] = useAutoAnimate<HTMLDivElement>({
		duration: 300,
		easing: 'ease-in-out'
	})

	return (
		<Flex ref={bannersParent} flexDir='column'>
			<Banner
				bannerId='in-development'
				message='This site is a work in progress.'
			/>
		</Flex>
	)
}

export default Banners
