import type { SystemStyleObject } from '@chakra-ui/react'
import type { FieldErrors } from 'react-hook-form'
import { useRef, useState } from 'react'
import {
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Text,
	Textarea,
	chakra,
	forwardRef,
	useColorModeValue
} from '@chakra-ui/react'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Reaptcha from 'reaptcha'
import { contactSchema } from '~/schema'

type FormData = z.infer<typeof contactSchema>

const formSx: SystemStyleObject = {
	display: 'flex',
	flexDirection: 'column',
	gap: 2,
	marginBottom: 4,
	alignItems: 'flex-start'
}

export const Contact = forwardRef((props, ref) => {
	const [isLoading, setIsLoading] = useState(false)
	const [captchaError, setCaptchaError] = useState<string | null>(null)
	const captchaRef = useRef<Reaptcha>(null)
	const formRef = useRef<HTMLFormElement>(null)
	const toastTheme = useColorModeValue('dark', 'light')

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<FormData>({
		mode: 'onSubmit',
		resolver: zodResolver(contactSchema)
	})

	const onError = async (_errors: FieldErrors) => {
		const captchaToken = await captchaRef.current?.getResponse()

		if (!captchaToken) {
			setCaptchaError('You need to solve the captcha first')
		}
	}

	const onSubmit = async (data: FormData) => {
		if (!captchaRef.current) return

		const captchaToken = await captchaRef.current?.getResponse()
		if (!captchaToken) {
			return setCaptchaError('You need to solve the captcha first')
		}

		const submissionData = contactSchema.parse(data)

		if (errors.name || errors.email || errors.message || captchaError) {
			toast.error('Fix the errors first. ✏️', { theme: toastTheme })
		}

		try {
			setIsLoading(true)

			const payload = {
				...submissionData,
				'g-recaptcha-response': captchaToken
			}

			const res = await fetch('api/send', {
				method: 'POST',
				body: JSON.stringify(payload)
			})

			const data = await res.json()

			if (data.success) {
				toast.success('🚀 Message sent! I\'ll answer you as soon as possible.', {
					autoClose: 5000,
					theme: toastTheme
				})
				formRef.current?.reset()
			} else {
				toast.error('Something went wrong. 😢', { theme: toastTheme })
			}
		} catch (error) {
			toast.error('Something went wrong. 😢', { theme: toastTheme })
			console.error(error)
		} finally {
			setIsLoading(false)
			captchaRef.current?.reset()
		}
	}

	const withErrors =
		!!errors.name || !!errors.email || !!errors.message || !!captchaError

	return (
		<chakra.section ref={ref} pt={{ base: 24, sm: 32 }} w='full' {...props}>
			<Flex flexDir='column' gap={2} pb={8} textAlign='left'>
				<Heading as='h2' size='xl'>
					Contact me
				</Heading>

				<Text fontWeight={400} size='md'>
					{'Send me a message and I’ll get back to you soon.'}
				</Text>
			</Flex>

			<chakra.form
				ref={formRef}
				sx={formSx}
				onSubmit={handleSubmit(onSubmit, onError)}
			>
				<FormControl isInvalid={Boolean(errors.name)}>
					<FormLabel htmlFor='name'>Name</FormLabel>
					<Input
						focusBorderColor='teal.300'
						id='name'
						placeholder='John Doe'
						size='lg'
						type='text'
						variant='filled'
						{...register('name')}
					/>

					<FormErrorMessage>
						{errors.name && <Text>{errors.name.message}</Text>}
					</FormErrorMessage>
				</FormControl>

				<FormControl isInvalid={!!errors.email}>
					<FormLabel htmlFor='email'>Email address</FormLabel>
					<Input
						focusBorderColor='teal.300'
						id='email'
						placeholder='example@domain.com'
						size='lg'
						type='email'
						variant='filled'
						{...register('email')}
					/>

					<FormErrorMessage>
						{errors.email && <Text>{errors.email.message}</Text>}
					</FormErrorMessage>
				</FormControl>

				<FormControl isInvalid={!!errors.message} mb={4}>
					<FormLabel htmlFor='message'>Message</FormLabel>
					<Textarea
						focusBorderColor='teal.300'
						id='message'
						placeholder='Hey, I want to hire you!'
						size='lg'
						variant='filled'
						{...register('message')}
					/>

					<FormErrorMessage>
						{errors.message && <Text>{errors.message.message}</Text>}
					</FormErrorMessage>
				</FormControl>

				<FormControl isInvalid={!!captchaError}>
					<Reaptcha
						ref={captchaRef}
						sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
						onVerify={() => setCaptchaError(null)}
					/>

					<FormErrorMessage>
						{captchaError && <Text>{captchaError}</Text>}
					</FormErrorMessage>
				</FormControl>

				<Button
					colorScheme='teal'
					isDisabled={withErrors}
					isLoading={isSubmitting || isLoading}
					loadingText='Sending...'
					size='lg'
					textAlign='left'
					type='submit'
				>
					Send message
				</Button>
			</chakra.form>
		</chakra.section>
	)
})

export default Contact
