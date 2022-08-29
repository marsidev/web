import { Stack } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { useCallback } from 'react'
import { Avatar } from '~/components/Avatar'
import { NameAndTitle } from '~/components/NameAndTitle'
import { SocialLinks } from '~/components/SocialLinks'
import { navbarHeightAtom } from '~/store'

const layoutTopPadding = 8 // em - chakra units
const emToPx = (units: number) => units * 4

export const Cover = () => {
	const [navbarHeight] = useAtom(navbarHeightAtom)

	const getCoverHeight = useCallback(() => {
		// pageHeight - navbarHeight - topPadding
		return `calc(100vh - ${navbarHeight}px - ${emToPx(layoutTopPadding)}px)`
	}, [navbarHeight, layoutTopPadding])

	return (
		<Stack
			align='center'
			as='section'
			direction={{ base: 'column', md: 'row' }}
			height={getCoverHeight()}
			id='me'
			justify='center'
			spacing={[4, 4, 8]}
		>
			<Avatar />

			<Stack direction='column'>
				<NameAndTitle />
				<SocialLinks pt={2} />
			</Stack>
		</Stack>
	)
}

export default Cover
