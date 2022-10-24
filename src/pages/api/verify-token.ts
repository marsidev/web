import type { NextRequest } from 'next/server'
import type { TurnstileValidationResponse } from '~/types/turnstile'
import { challengeSchema } from '~/schemas'
import { SECRET_KEY } from '~/constants/turnstile'

export interface VerifyTokenApiResponse extends TurnstileValidationResponse {
	error?: string
}

const endpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

export const config = {
	runtime: 'experimental-edge'
}

export const verifyTurnstileToken = async (token: string): Promise<TurnstileValidationResponse> => {
	return await fetch(endpoint, {
		method: 'POST',
		body: `secret=${encodeURIComponent(SECRET_KEY)}&response=${encodeURIComponent(token)}`,
		headers: {
			'content-type': 'application/x-www-form-urlencoded'
		}
	}).then(response => response.json())
}

const headers = {
	'content-type': 'application/json'
}

export default async function (req: NextRequest): Promise<Response> {
	if (req.method !== 'POST') {
		return new Response(JSON.stringify({ error: 'Bad request', success: false }), {
			status: 400,
			headers
		})
	}

	if (!req.body) {
		return new Response(JSON.stringify({ error: 'The body is empty', success: false }), {
			status: 400,
			headers
		})
	}

	const body = await req.json()
	const parsed = challengeSchema.safeParse(body)

	if (!parsed.success) {
		return new Response(JSON.stringify({ error: 'An error occurred while parsing the data', success: false }), {
			status: 400,
			headers
		})
	}

	const { token } = parsed.data

	const verification = await verifyTurnstileToken(token)
	if (!verification.success) {
		return new Response(JSON.stringify(verification), {
			status: 400,
			headers
		})
	}

	return new Response(JSON.stringify(verification), {
		status: 200,
		headers
	})
}
