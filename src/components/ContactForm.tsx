import type { ChakraProps, SystemStyleObject } from '@chakra-ui/system'
import type { TurnstileInstance } from '@marsidev/react-turnstile'
import { useCallback, useRef, useState } from 'react'
import { Button } from '@chakra-ui/button'
import { chakra, useColorModeValue } from '@chakra-ui/system'
import { toast } from 'react-toastify'
import type { VerifyTokenApiResponse } from '~/pages/api/verify-token'
import { useContactForm } from '~/hooks/use-contact-form'
import { TurnstileChallenge } from '~/components/TurnstileChallenge'
import { ContactInput } from '~/components/ContactInput'
import type { ContactFormData } from '~/types/zod'
import { sendMessage } from '~/services/send-message'
import { verifyToken } from '~/services/verify-token'

export type WidgetStatus = 'solved' | 'error' | 'expired' | null

const formSx: SystemStyleObject = {
	display: 'flex',
	flexDirection: 'column',
	gap: 2,
	alignItems: 'flex-start'
}

type ContactFormProps = ChakraProps

export const ContactForm: React.FC<ContactFormProps> = props => {
	const [isLoading, setIsLoading] = useState(false)
	const turnstileRef = useRef<TurnstileInstance>(null)
	const formRef = useRef<HTMLFormElement>(null)
	const toastTheme = useColorModeValue('dark', 'light')
	const { errors, handleSubmit, isSubmitting, register } = useContactForm()
	const [status, setStatus] = useState<WidgetStatus>(null)
	const [token, setToken] = useState<string>()
	const [messagesSent, setMessagesSent] = useState(0)

	const withErrors = !!errors.name || !!errors.email || !!errors.message

	const challengeSolved = status === 'solved'
	const showChallenge = messagesSent > 0

	const onSuccessMessage = () => {
		toast.success("🚀 Message sent. I'll answer you as soon as possible. Thank you!", {
			autoClose: 5000,
			theme: toastTheme
		})
		setMessagesSent(prev => prev + 1)

		formRef.current?.reset()
	}

	const onFailedMessage = () => {
		toast.error('Something went wrong. 😢', { theme: toastTheme })
	}

	const onInvalidToken = (data: VerifyTokenApiResponse) => {
		let message = 'Unable to verify the challenge. Please try again.'
		const errors = data['error-codes']?.join(',')
		if (errors) {
			message += ` Errors: ${errors}`
		}
		toast.error(message, { theme: toastTheme })
	}

	const onSubmit = useCallback(async (data: ContactFormData, e?: React.BaseSyntheticEvent) => {
		e?.preventDefault()

		if (showChallenge && (!challengeSolved || !token)) {
			return toast.error('You need to solve the challenge first', { theme: toastTheme })
		}

		if (withErrors) {
			return toast.error('Fix the errors first. ✏️', { theme: toastTheme })
		}

		try {
			setIsLoading(true)
			if (showChallenge) {
				// verify challenge token
				const verifyData = await verifyToken(token!)

				if (!verifyData.success) {
					onInvalidToken(verifyData)
					setIsLoading(false)
					return
				}
			}

			// send message
			const success = await sendMessage(data)
			success ? onSuccessMessage() : onFailedMessage()
		} catch (error) {
			console.error(error)
		} finally {
			setIsLoading(false)
			turnstileRef.current?.reset()
		}
	}, [])

	const onChallengeExpire = () => {
		setStatus('expired')
	}

	const onChallengeSuccess = (_token: string) => {
		setToken(_token)
		setStatus('solved')
	}

	const onChallengeError = () => {
		setStatus('error')
	}

	return (
		<chakra.form ref={formRef} sx={formSx} onSubmit={handleSubmit(onSubmit)} {...props}>
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

			{showChallenge && (
				<TurnstileChallenge
					// error={challengeError}
					formSx={{ mt: 4, mb: 2 }}
					turnstileRef={turnstileRef}
					onError={onChallengeError}
					onExpire={onChallengeExpire}
					onSuccess={onChallengeSuccess}
				/>
			)}

			<Button
				colorScheme='teal'
				isDisabled={withErrors}
				isLoading={isSubmitting || isLoading}
				loadingText='Sending...'
				mt={showChallenge ? 0 : 4}
				size='lg'
				textAlign='left'
				type='submit'
				w={{ base: '100%', sm: '300px' }}
			>
				Send message
			</Button>
		</chakra.form>
	)
}
