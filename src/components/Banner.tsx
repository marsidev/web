import { Flex, type FlexProps, IconButton } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { useRendered } from '@marsidev/react-hooks'
import { CloseIcon } from '~/icons'

interface BannerProps extends FlexProps {
	message: string
	bannerId: string
}

export const Banner: React.FC<BannerProps> = ({ message, bannerId }) => {
	// we have two states to prevent hydration mismatch issue
	const [hidden_ls, setHidden_ls] = useLocalStorage(`hide__${bannerId}__banner`, false)
	const [hidden, setHidden] = useState(false)
	const rendered = useRendered()

	useEffect(() => {
		setHidden(hidden_ls)
	}, [hidden_ls])

	if (!rendered || hidden) return <div />

	return (
		<Flex
			align='center'
			bgGradient='linear(to bottom, pink.500, pink.600)'
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
					_active={{ bg: 'blackAlpha.400' }}
					_hover={{
						bg: 'blackAlpha.400'
					}}
					aria-label='Close banner'
					icon={<CloseIcon />}
					transition='all 0.2s ease-out'
					variant='ghost'
					onClick={() => setHidden_ls(true)}
				/>
			</Flex>
		</Flex>
	)
}
