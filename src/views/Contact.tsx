import type { SystemStyleObject } from '@chakra-ui/system'
import type { FieldErrors } from 'react-hook-form'
import type { TurnstileInstance } from '@marsidev/react-turnstile'
import { useRendered } from '@marsidev/react-hooks'
import { useRef, useState } from 'react'
import { Button } from '@chakra-ui/button'
import { Flex, Heading, Text } from '@chakra-ui/layout'
import { chakra, forwardRef, useColorModeValue } from '@chakra-ui/system'
import { toast } from 'react-toastify'
import type { VerifyTokenApiResponse } from '~/pages/api/verify-token'
import { useContactForm } from '~/hooks/use-contact-form'
import { TurnstileChallenge } from '~/components/TurnstileChallenge'
import { ContactInput } from '~/components/ContactInput'
import type { ContactFormData } from '~/types/zod'
import { sendMessage } from '~/services/send-message'
import { verifyToken } from '~/services/verify-token'

const formSx: SystemStyleObject = {
	display: 'flex',
	flexDirection: 'column',
	gap: 2,
	marginBottom: 4,
	alignItems: 'flex-start'
}

export const Contact = forwardRef((props, ref) => {
	const [isLoading, setIsLoading] = useState(false)
	const [challengeExpired, setChallengeExpired] = useState(false)
	const [challengeSolved, setChallengeSolved] = useState(false)
	const mounted = useRendered()
	const [challengeError, setChallengeError] = useState<string | null>(null)
	const turnstileRef = useRef<TurnstileInstance>(null)
	const formRef = useRef<HTMLFormElement>(null)
	const toastTheme = useColorModeValue('dark', 'light')
	const { errors, handleSubmit, isSubmitting, register } = useContactForm()

	const withErrors = !!errors.name || !!errors.email || !!errors.message || !!challengeError

	const checkIfChallengeIsSolved = () => {
		const token = turnstileRef.current?.getResponse()
		if (!token) {
			setChallengeError('You need to solve the challenge first')
			return
		}

		setChallengeError(null)
		return token
	}

	const onSuccessMessage = () => {
		toast.success("🚀 Message sent. I'll answer you as soon as possible. Thank you!", {
			autoClose: 5000,
			theme: toastTheme
		})

		formRef.current?.reset()
	}

	const onFailedMessage = () => {
		toast.error('Something went wrong. 😢', { theme: toastTheme })
	}

	const onError = async (_errors: FieldErrors) => {
		checkIfChallengeIsSolved()
	}

	const onInvalidToken = (data: VerifyTokenApiResponse) => {
		let message = 'Unable to verify the challenge. Please try again.'
		const errors = data['error-codes']?.join(',')
		if (errors) {
			message += ` Errors: ${errors}`
		}
		toast.error(message, { theme: toastTheme })
	}

	const onSubmit = async (data: ContactFormData) => {
		const token = checkIfChallengeIsSolved()
		if (!token) return

		if (withErrors) {
			return toast.error('Fix the errors first. ✏️', { theme: toastTheme })
		}

		try {
			// verify challenge token
			setIsLoading(true)
			const verifyData = await verifyToken(token)

			if (!verifyData.success) {
				onInvalidToken(verifyData)
				setIsLoading(false)
				return
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
	}

	const onChallengeExpire = () => {
		setChallengeExpired(true)
	}

	const onChallengeSuccess = (_token: string) => {
		setChallengeSolved(true)
		setChallengeExpired(false)
	}

	const onChallengeError = () => {
		setChallengeError('Error verifying challenge')
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

			<chakra.form ref={formRef} sx={formSx} onSubmit={handleSubmit(onSubmit, onError)}>
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

				{mounted && (
					<TurnstileChallenge
						error={challengeError}
						formSx={{ mt: 4, mb: 2 }}
						turnstileRef={turnstileRef}
						onError={onChallengeError}
						onExpire={onChallengeExpire}
						onSuccess={onChallengeSuccess}
					/>
				)}

				<Button
					colorScheme='teal'
					isDisabled={withErrors || !challengeSolved || challengeExpired}
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
