import type { SystemStyleObject } from '@chakra-ui/system'
import type { FC, RefObject } from 'react'
import { FormControl, FormErrorMessage } from '@chakra-ui/form-control'
import { Text } from '@chakra-ui/layout'
import { useColorMode } from '@chakra-ui/system'
import type { TurnstileProps, TurnstileRef } from '~/lib/react-turnstile/types'
import { Turnstile } from '~/lib/react-turnstile/react-turnstile'
import { SITE_KEY } from '~/constants/turnstile'

interface TurnstileChallengeProps extends Partial<TurnstileProps> {
	turnstileRef: RefObject<TurnstileRef>
	error?: string | null
	formSx?: SystemStyleObject
}

export const TurnstileChallenge: FC<TurnstileChallengeProps> = ({ turnstileRef, error, formSx, options, ...rest }) => {
	const { colorMode } = useColorMode()

	return (
		<FormControl isInvalid={Boolean(error)} sx={formSx}>
			<Turnstile
				ref={turnstileRef}
				options={{
					...options,
					action: 'submit-contact-form',
					theme: colorMode
				}}
				siteKey={SITE_KEY}
				{...rest}
			/>

			<FormErrorMessage>{error && <Text>{error}</Text>}</FormErrorMessage>
		</FormControl>
	)
}
