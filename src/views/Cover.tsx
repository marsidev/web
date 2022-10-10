import { Flex, Stack } from '@chakra-ui/layout'
import { forwardRef } from '@chakra-ui/system'
import { useAtom } from 'jotai'
import { useCallback } from 'react'
import { use100vh } from 'react-div-100vh'
import { Avatar } from '~/components/Avatar'
import { NameAndTitle } from '~/components/NameAndTitle'
import { SocialLinks } from '~/components/SocialLinks'
import { navbarHeightAtom } from '~/store'
import { chakraUnitToPx } from '~/utils/units'

const layoutTopPadding = 8 // em - chakra units
const layoutPxPadding = chakraUnitToPx(layoutTopPadding)

export const Cover = forwardRef((props, ref) => {
	const [navbarHeight] = useAtom(navbarHeightAtom)
	const _100vh = use100vh()
	const windowHeight = _100vh ? `${_100vh}px` : '100vh'

	const getCoverHeight = useCallback(() => {
		// windowHeight - navbarHeight - topPadding
		return `calc(${windowHeight} - ${navbarHeight}px - ${layoutPxPadding}px)`
	}, [navbarHeight, layoutTopPadding])

	return (
		<Flex
			ref={ref}
			align='center'
			as='section'
			direction='column'
			height={getCoverHeight()}
			justify='center'
			pt={0}
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
