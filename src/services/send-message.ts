import { contactSchema } from '~/schemas'
import type { MessageResponse } from '~/types/api'
import type { ContactFormData } from '~/types/zod'

export const sendMessage = async (formData: ContactFormData) => {
	const submissionData = contactSchema.parse(formData)

	const payload = JSON.stringify({
		...submissionData
	})

	const fetchOptions: RequestInit = { method: 'POST', body: payload }
	const res = await fetch('api/send', fetchOptions)

	const data: MessageResponse = await res.json()
	return data.success
}
