import { Flex, Heading } from '@chakra-ui/layout'
import { chakra, forwardRef } from '@chakra-ui/system'
import { ContactForm } from '~/components/ContactForm'
import { SocialLinks } from '~/components/SocialLinks'

export type WidgetStatus = 'solved' | 'error' | 'expired' | null

export const Contact = forwardRef((props, ref) => {
	return (
		<chakra.section ref={ref} pt={{ base: 24, sm: 32 }} w='full' {...props}>
			<Flex flexDir='column' gap={2} textAlign='left'>
				<Heading as='h2' size='xl'>
					Contact me
				</Heading>

				<p>{'Send me a message and I’ll get back to you soon.'}</p>

				<ContactForm py={8} />

				<p>You can also reach me out on:</p>
				<SocialLinks exclude={['github']} size='sm' />
			</Flex>

		</chakra.section>
	)
})

export default Contact
