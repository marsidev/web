import type { NextApiRequest, NextApiResponse } from 'next'
import type { TurnstileValidationResponse } from '~/types/turnstile'
import { challengeSchema } from '~/schemas'
import { SECRET_KEY } from '~/constants/turnstile'

export interface VerifyTokenApiResponse extends TurnstileValidationResponse {
	error?: string
}

const endpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

export const verifyTurnstileToken = async (token: string): Promise<TurnstileValidationResponse> => {
	return await fetch(endpoint, {
		method: 'POST',
		body: `secret=${encodeURIComponent(SECRET_KEY)}&response=${encodeURIComponent(token)}`,
		headers: {
			'content-type': 'application/x-www-form-urlencoded'
		}
	}).then(response => response.json())
}

const handler = async (req: NextApiRequest, res: NextApiResponse<VerifyTokenApiResponse>) => {
	if (req.method !== 'POST') {
		return res.status(400).json({ error: 'Bad request', success: false })
	}

	const parsed = challengeSchema.safeParse(JSON.parse(req.body))

	if (!parsed.success) {
		return res.status(400).json({ error: 'An error occurred while parsing the data', success: false })
	}

	const body = parsed.data
	const { token } = body

	const verification = await verifyTurnstileToken(token)
	if (!verification.success) {
		return res.status(400).json(verification)
	}

	res.status(200).json(verification)
}

export default handler
