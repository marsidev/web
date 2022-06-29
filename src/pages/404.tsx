import type { NextPage } from 'next'
import { Heading, Text, useColorModeValue } from '@chakra-ui/react'
import Layout from '@layouts/main'
import { Link } from '@components'

const Custom404: NextPage = () => {
	const textColor = useColorModeValue('gray.600', 'gray.400')

	const buttonFg = useColorModeValue('white', 'white')
	const buttonBg = useColorModeValue('teal.500', 'teal.400')
	const onHoverButtonBg = useColorModeValue('teal.600', 'teal.500')

	return (
		<Layout title='404'>
			<Heading as='h1' fontSize={['3xl', '5xl']} mb={4}>
				451 – Unavailable For Legal Reasons
			</Heading>

			<Text color={textColor} mb={8}>
				{`Why show a generic 404 when I can make it sound mysterious? It seems
          you've found something that used to exist, or you spelled something
          wrong. I'm guessing you spelled something wrong. Can you double
          check that URL?`}
			</Text>

			<Link
				_hover={{ bg: onHoverButtonBg }}
				bg={buttonBg}
				color={buttonFg}
				fontSize={['sm', 'md']}
				href='/'
				px={4}
				py={2}
				rounded='lg'
				// w={48}
			>
				Return to home
			</Link>
		</Layout>
	)
}

export default Custom404
