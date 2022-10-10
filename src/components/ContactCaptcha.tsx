import type { SystemStyleObject } from '@chakra-ui/system'
import type { FC, RefObject } from 'react'
import type { Props as ReaptchaProps } from 'reaptcha'
import { useRendered } from '@marsidev/react-hooks'
import { FormControl, FormErrorMessage } from '@chakra-ui/form-control'
import { Text } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import { useColorMode } from '@chakra-ui/system'
import Reaptcha from 'reaptcha'

interface ContactCaptchaProps extends Partial<ReaptchaProps> {
	captchaRef: RefObject<Reaptcha>
	error?: string | null
	formSx?: SystemStyleObject
}

type CaptchaSize = 'compact' | 'normal' | 'invisible'

export const ContactCaptcha: FC<ContactCaptchaProps> = ({
	captchaRef,
	error,
	formSx,
	...rest
}) => {
	const [smallScreen] = useMediaQuery('(max-width: 360px)')
	const { colorMode } = useColorMode()
	const mounted = useRendered()
	const captchaSize: CaptchaSize = smallScreen ? 'compact' : 'normal'

	if (!mounted) return null

	return (
		<FormControl isInvalid={Boolean(error)} sx={formSx}>
			<Reaptcha
				ref={captchaRef}
				className={captchaSize === 'normal' ? 'captcha' : 'captcha-compact'}
				sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
				size={captchaSize}
				theme={colorMode}
				{...rest}
			/>

			<FormErrorMessage>{error && <Text>{error}</Text>}</FormErrorMessage>
		</FormControl>
	)
}

export default ContactCaptcha
