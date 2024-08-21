import type { SystemStyleObject } from '@chakra-ui/system'
import type { FC, RefObject } from 'react'
import type { TurnstileInstance, TurnstileProps } from '@marsidev/react-turnstile'
import { FormControl, FormErrorMessage } from '@chakra-ui/form-control'
import { useColorMode } from '@chakra-ui/system'
import { Turnstile } from '@marsidev/react-turnstile'
import { SITE_KEY } from '~/constants/turnstile'

interface TurnstileChallengeProps extends Partial<TurnstileProps> {
	turnstileRef: RefObject<TurnstileInstance>
	error?: string | null
	formSx?: SystemStyleObject
}

export const TurnstileChallenge: FC<TurnstileChallengeProps> = ({
	turnstileRef,
	error,
	formSx,
	options,
	...rest
}) => {
	const { colorMode } = useColorMode()

	return (
		<FormControl isInvalid={Boolean(error)} sx={formSx}>
			<Turnstile
				ref={turnstileRef}
				options={{
					...options,
					action: 'submit-contact-form',
					theme: colorMode,
					appearance: 'interaction-only'
				}}
				siteKey={SITE_KEY}
				{...rest}
			/>

			<FormErrorMessage>{error && <p>{error}</p>}</FormErrorMessage>
		</FormControl>
	)
}
