import {
	Flex,
	type FlexProps,
	IconButton,
	useColorModeValue
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useLocalStorage } from 'usehooks-ts'
import { useMount } from '~/hooks'

interface BannerProps extends FlexProps {
	message: string
	bannerId: string
	bg?: string
}

export const Banner: React.FC<BannerProps> = ({ message, bannerId, bg }) => {
	// we have two states to prevent hydration mismatch issue
	const [hidden_ls, setHidden_ls] = useLocalStorage(bannerId, false)
	const [hidden, setHidden] = useState(false)
	const mounted = useMount()

	const gradient = useColorModeValue(
		'linear(to bottom, teal.500, teal.600)',
		'linear(to bottom, teal.400, teal.500)'
	)

	useEffect(() => {
		setHidden(hidden_ls)
	}, [hidden_ls])

	if (!mounted || hidden) return null

	return (
		<Flex
			align='center'
			bgGradient={bg || gradient}
			color='white'
			fontWeight={[600, 800]}
			h={12}
			justify='center'
			w='full'
		>
			<Flex justify='center' maxW='6xl' px={16} w='full'>
				{message}
			</Flex>

			<Flex pos='absolute' pr={2} right={0}>
				<IconButton
					aria-label='Close banner'
					icon={<AiOutlineClose />}
					variant='ghost'
					onClick={() => setHidden_ls(true)}
				/>
			</Flex>
		</Flex>
	)
}
