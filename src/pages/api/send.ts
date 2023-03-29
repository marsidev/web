import type { NextApiRequest, NextApiResponse } from 'next'
import { contactSchema } from '~/schemas'
import type { MessageResponse } from '~/types/api'

const FORM_ID = process.env.FORMSPARK_FORM_ID
const FORM_URL = `https://submit-form.com/${FORM_ID}`

const handler = async (req: NextApiRequest, res: NextApiResponse<MessageResponse>) => {
	if (req.method !== 'POST') {
		return res.status(400).json({ error: 'Bad request', success: false })
	}

	if (!FORM_ID) {
		return res.status(400).json({ error: 'FORM_ID is not defined', success: false })
	}

	if (!req.body) {
		return res.status(400).json({ error: 'Body is empty', success: false })
	}

	if (typeof req.body !== 'string') {
		return res.status(400).json({ error: 'Wrong data provided', success: false })
	}

	const parsed = contactSchema.safeParse(JSON.parse(req.body))

	if (!parsed.success) {
		return res
			.status(400)
			.json({ error: 'An error occurred while parsing the data', success: false })
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

	res.status(200).json({ success })
}

export default handler
