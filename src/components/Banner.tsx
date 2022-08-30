import { Flex, type FlexProps, IconButton } from '@chakra-ui/react'
import { useRendered } from '@marsidev/react-hooks'
import { type SetStateAction, type WritableAtom, useAtom } from 'jotai'
import { CloseIcon } from '~/icons'

interface BannerProps extends FlexProps {
	message: string
	atom: WritableAtom<boolean, SetStateAction<boolean>, void>
}

export const Banner: React.FC<BannerProps> = ({ message, atom }) => {
	const [showBanner, setShowBaner] = useAtom(atom)
	const rendered = useRendered()

	if (!rendered || !showBanner) return <div />

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
			<Flex justify='center' maxW='6xl' px={8} w='full'>
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
					onClick={() => setShowBaner(false)}
				/>
			</Flex>
		</Flex>
	)
}
