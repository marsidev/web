import { Flex, type FlexProps } from '@chakra-ui/layout'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { atomWithStorage } from 'jotai/utils'
import { Banner } from '~/components/Banner'

const banners = [
	{
		key: 'in-development',
		message: 'This site is a work in progress.',
		atom: atomWithStorage('show_in-development_banner', true)
	}
]

export const Banners: React.FC<FlexProps> = () => {
	const [bannersParent] = useAutoAnimate<HTMLDivElement>({
		duration: 300,
		easing: 'ease-in-out'
	})

	return (
		<Flex ref={bannersParent} flexDir='column'>
			{banners.map(banner => (
				<Banner key={banner.key} atom={banner.atom} message={banner.message} />
			))}
		</Flex>
	)
}

export default Banners
