import type { FC } from 'react'
import type {
	InputProps as ChakraInputProps,
	TextareaProps as ChakraTextAreaProps
} from '@chakra-ui/react'
import type { FieldError, RegisterOptions } from 'react-hook-form'
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Text,
	Textarea,
	forwardRef
} from '@chakra-ui/react'
import { WithRequired } from '~/types/utils'

type Required = 'id' | 'name'
type InputMode = 'input' | 'text-area'

interface BaseProps {
	mode: InputMode
	label?: string
	options?: RegisterOptions
	error?: FieldError
}

type InputBaseProps = BaseProps & WithRequired<ChakraInputProps, Required>
type TextareaBaseProps = BaseProps & WithRequired<ChakraTextAreaProps, Required>

type InputProps = InputBaseProps & { mode: 'input' }
type TextareaProps = TextareaBaseProps & { mode: 'text-area' }

type ContactInputProps = InputProps | TextareaProps

const DynamicInput = (props: ContactInputProps) => {
	const { mode } = props
	const isTextArea = mode === 'text-area'

	if (isTextArea) {
		return <Textarea {...props} />
	}

	return <Input {...props} />
}

export const ContactInput: FC<ContactInputProps> = forwardRef((props, ref) => {
	const { id, label, error, name, options, ...rest } = props

	return (
		<FormControl isInvalid={Boolean(error)} {...ref}>
			{label && <FormLabel fontWeight='semibold' htmlFor={id}>{label}</FormLabel>}

			<DynamicInput
				errorBorderColor='pink.300'
				focusBorderColor='teal.300'
				id={id}
				name={name}
				options={options}
				size='lg'
				variant='filled'
				{...rest}
			/>

			<FormErrorMessage>
				{error && <Text>{error.message}</Text>}
			</FormErrorMessage>
		</FormControl>
	)
})

export default ContactInput
