import { Flex, Stack, forwardRef } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { useCallback } from 'react'
import { Avatar } from '~/components/Avatar'
import { NameAndTitle } from '~/components/NameAndTitle'
import { SocialLinks } from '~/components/SocialLinks'
import { navbarHeightAtom } from '~/store'
import { chakraUnitToPx } from '~/utils/units'

const layoutTopPadding = 8 // em - chakra units

export const Cover = forwardRef((props, ref) => {
	const [navbarHeight] = useAtom(navbarHeightAtom)

	const getCoverHeight = useCallback(() => {
		// pageHeight - navbarHeight - topPadding
		return `calc(100vh - ${navbarHeight}px - ${chakraUnitToPx(layoutTopPadding)}px)`
	}, [navbarHeight, layoutTopPadding])

	return (
		<Flex
			ref={ref}
			align='center'
			as='section'
			direction='column'
			height={getCoverHeight()}
			id='cover'
			justify={{ base: 'flex-start', sm: 'center' }}
			pt={{ base: 32, sm: 0 }}
			w='full'
			{...props}
		>
			<Stack
				align='center'
				direction={{ base: 'column', md: 'row' }}
				justify='center'
				spacing={[4, 8]}
			>
				<Avatar />

				<Stack direction='column'>
					<NameAndTitle />
					<SocialLinks pt={2} />
				</Stack>
			</Stack>
		</Flex>
	)
})

export default Cover
