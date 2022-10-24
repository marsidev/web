import type { NextRequest } from 'next/server'
import { contactSchema } from '~/schemas'
// import type { MessageResponse } from '~/types/api'

const FORM_ID = process.env.FORMSPARK_FORM_ID
const FORM_URL = `https://submit-form.com/${FORM_ID}`

const headers = {
	'content-type': 'application/json'
}

export const config = {
	runtime: 'experimental-edge'
}

export default async function (req: NextRequest): Promise<Response> {
	if (req.method !== 'POST') {
		return new Response(JSON.stringify({ error: 'Bad request', success: false }), {
			status: 400,
			headers
		})
	}

	if (!FORM_ID) {
		return new Response(JSON.stringify({ error: 'FORM_ID is not defined', success: false }), {
			status: 400,
			headers
		})
	}

	if (!req.body) {
		return new Response(JSON.stringify({ error: 'Body is empty', success: false }), {
			status: 400,
			headers
		})
	}

	const body = await req.json()
	const parsed = contactSchema.safeParse(body)

	if (!parsed.success) {
		return new Response(JSON.stringify({ error: 'An error occurred while parsing the data', success: false }), {
			status: 400,
			headers
		})
	}

	const success = await fetch(FORM_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify(parsed.data)
	})
		.then(res => res.json())
		.then(data => {
			if (data.name && data.email && data.message) {
				return true
			}
			return false
		})
		.catch(err => {
			console.error(err)
			return false
		})

	return new Response(JSON.stringify({ success }), {
		status: 200,
		headers
	})
}
