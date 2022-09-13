import { z } from 'zod'
import { contactSchema } from '~/schemas'

export type ContactFormData = z.infer<typeof contactSchema>
