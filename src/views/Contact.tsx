import type { SystemStyleObject } from '@chakra-ui/react'
import type { FieldErrors } from 'react-hook-form'
import { useRef, useState } from 'react'
import {
	Button,
	Flex,
	Heading,
	Text,
	chakra,
	forwardRef,
	useColorModeValue
} from '@chakra-ui/react'
import { toast } from 'react-toastify'
import Reaptcha from 'reaptcha'
import { contactSchema } from '~/schemas'
import { useContactForm } from '~/hooks/use-contact-form'
import type { MessageResponse } from '~/types/api'
import { ContactCaptcha } from '~/components/ContactCaptcha'
import { ContactInput } from '~/components/ContactInput'
import type { ContactFormData } from '~/types/zod'

const formSx: SystemStyleObject = {
	display: 'flex',
	flexDirection: 'column',
	gap: 2,
	marginBottom: 4,
	alignItems: 'flex-start'
}

const sendMessage = async (formData: ContactFormData, captchaToken: string) => {
	const submissionData = contactSchema.parse(formData)

	const payload = JSON.stringify({
		...submissionData,
		'g-recaptcha-response': captchaToken
	})

	const fetchOptions: RequestInit = { method: 'POST', body: payload }
	const res = await fetch('api/send', fetchOptions)

	const data: MessageResponse = await res.json()
	return data.success
}

export const Contact = forwardRef((props, ref) => {
	const [isLoading, setIsLoading] = useState(false)
	const [captchaExpired, setCaptchaExpired] = useState(false)
	const [captchaShown, setCaptchaShown] = useState(false)
	const [captchaError, setCaptchaError] = useState<string | null>(null)
	const captchaRef = useRef<Reaptcha>(null)
	const formRef = useRef<HTMLFormElement>(null)
	const toastTheme = useColorModeValue('dark', 'light')

	const { errors, handleSubmit, isSubmitting, register } = useContactForm()

	const withErrors =
		!!errors.name || !!errors.email || !!errors.message || !!captchaError

	const validateCaptcha = async () => {
		const captchaToken = await captchaRef.current?.getResponse()
		if (!captchaToken) {
			setCaptchaError('You need to solve the captcha first')
			return null
		}

		return captchaToken
	}

	const onSuccessMessage = () => {
		toast.success('🚀 Message sent. I\'ll answer you as soon as possible. Thank you!', {
			autoClose: 5000,
			theme: toastTheme
		})

		formRef.current?.reset()
	}

	const onFailedMessage = () => {
		toast.error('Something went wrong. 😢', {
			theme: toastTheme
		})
	}

	const onError = async (_errors: FieldErrors) => {
		await validateCaptcha()
	}

	const onSubmit = async (data: ContactFormData) => {
		const captchaToken = await validateCaptcha()
		if (!captchaToken) return

		if (withErrors) {
			return toast.error('Fix the errors first. ✏️', { theme: toastTheme })
		}

		try {
			setIsLoading(true)
			const success = await sendMessage(data, captchaToken)
			success ? onSuccessMessage() : onFailedMessage()
		} catch (error) {
			onFailedMessage()
			console.error(error)
		} finally {
			setIsLoading(false)
			captchaRef.current?.reset()
		}
	}

	const onExpireCaptcha = () => {
		setCaptchaExpired(true)
	}

	const onLoadCaptcha = () => {
		setCaptchaShown(false)
		setCaptchaExpired(false)
	}

	const onRenderCaptcha = () => {
		setCaptchaShown(true)
		setCaptchaExpired(false)
	}

	const onVerifyCaptcha = () => {
		setCaptchaError(null)
	}

	const onErrorCaptcha = () => {
		setCaptchaError('Error verifying captcha')
	}

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
				<ContactInput
					error={errors.name}
					id='name'
					label='Name'
					mode='input'
					placeholder='John Doe'
					{...register('name')}
				/>

				<ContactInput
					error={errors.email}
					formSx={{ mt: 4 }}
					id='email'
					label='Email address'
					mode='input'
					placeholder='example@domain.com'
					{...register('email')}
				/>

				<ContactInput
					error={errors.message}
					formSx={{ mt: 4 }}
					id='message'
					label='Message'
					mode='text-area'
					placeholder='Hey, I want to hire you!'
					{...register('message')}
				/>

				<ContactCaptcha
					captchaRef={captchaRef}
					error={captchaError}
					formSx={{ mt: 4 }}
					onError={onErrorCaptcha}
					onExpire={onExpireCaptcha}
					onLoad={onLoadCaptcha}
					onRender={onRenderCaptcha}
					onVerify={onVerifyCaptcha}
				/>

				<Button
					colorScheme='teal'
					isDisabled={withErrors || !captchaShown || captchaExpired}
					isLoading={isSubmitting || isLoading}
					loadingText='Sending...'
					size='lg'
					textAlign='left'
					type='submit'
					w={{ base: '100%', sm: '300px' }}
				>
					Send message
				</Button>
			</chakra.form>
		</chakra.section>
	)
})

export default Contact
