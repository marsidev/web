import { Stack } from '@chakra-ui/react'
import { Avatar, NameAndTitle, SocialLinks } from '~/components'

export const Cover = () => {
	return (
		<Stack
			align='center'
			as='section'
			direction={{ base: 'column', md: 'row' }}
			h='calc(90vh - 16*0.25em)' // minH='90vh' - py={8} defined in Layout
			id='me'
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
