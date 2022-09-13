import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type { ContactFormData } from '~/types/zod'
import { contactSchema } from '~/schemas'

export const useContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<ContactFormData>({
		mode: 'onSubmit',
		resolver: zodResolver(contactSchema)
	})

	return { register, handleSubmit, errors, isSubmitting }
}

export default useContactForm
