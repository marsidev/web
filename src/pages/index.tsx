import type { NextPage } from 'next'
import { Flex, Stack } from '@chakra-ui/react'
import { Layout } from '~/layouts/main'
import { Avatar, NameAndTitle, SocialLinks } from '~/components'

const App: NextPage = () => {
	return (
		<Layout>
			<Flex
				as='section'
				flexDir='column'
				h='calc(90vh - 16*0.25em)'
				justify='center'
			>
				<Stack
					align='center'
					direction={{ base: 'column', md: 'row' }}
					spacing={[4, 4, 8]}
				>
					<Avatar />

					<Stack direction='column'>
						<NameAndTitle />
						<SocialLinks pt={2} />
					</Stack>
				</Stack>
			</Flex>
		</Layout>
	)
}

export default App
// export { getServerSideProps } from '~/components/Chakra'
