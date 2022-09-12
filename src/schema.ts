import { z } from 'zod'

export const contactSchema = z.object({
	name: z.string().min(1, { message: 'Empty names are not allowed' }),
	email: z.string().email(),
	message: z.string().min(10, { message: 'Please write a message with at least 10 characters' })
})

export const recaptchaSchema = z.object({
	'g-recaptcha-response': z.string()
})
