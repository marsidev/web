import type { VerifyTokenApiResponse } from '~/pages/api/verify-token'
import { challengeSchema } from '~/schemas'

export const verifyToken = async (token: string): Promise<VerifyTokenApiResponse> => {
	const payload = JSON.stringify(challengeSchema.parse({ token }))

	const fetchOptions: RequestInit = { method: 'POST', body: payload }
	const res = await fetch('api/verify-token', fetchOptions)

	const data: VerifyTokenApiResponse = await res.json()
	return data
}
