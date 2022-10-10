import type { FC } from 'react'
import type { FieldError, RegisterOptions } from 'react-hook-form'
import { type InputProps as ChakraInputProps, Input } from '@chakra-ui/input'
import {
	type TextareaProps as ChakraTextAreaProps,
	Textarea
} from '@chakra-ui/textarea'
import { type SystemStyleObject, forwardRef } from '@chakra-ui/system'
import { Text } from '@chakra-ui/layout'
import {
	FormControl,
	FormErrorMessage,
	FormLabel
} from '@chakra-ui/form-control'
import type { WithRequired } from '~/types/utils'

type Required = 'id' | 'name'
type InputMode = 'input' | 'text-area'

interface BaseProps {
	mode: InputMode
	label?: string
	options?: RegisterOptions
	error?: FieldError
	formSx?: SystemStyleObject
}

type InputBaseProps = BaseProps & WithRequired<ChakraInputProps, Required>
type TextareaBaseProps = BaseProps & WithRequired<ChakraTextAreaProps, Required>

type InputProps = InputBaseProps & { mode: 'input' }
type TextareaProps = TextareaBaseProps & { mode: 'text-area' }

type ContactInputProps = InputProps | TextareaProps
type ComponentType = typeof Input | typeof Textarea

const DynamicInput = forwardRef<ContactInputProps, ComponentType>(
	(props, ref) => {
		const isTextArea = props.mode === 'text-area'

		if (isTextArea) {
			return <Textarea ref={ref} {...props} />
		}

		return <Input ref={ref} {...props} />
	}
)

export const ContactInput: FC<ContactInputProps> = forwardRef((props, ref) => {
	const { id, label, error, name, options, formSx, ...rest } = props

	return (
		<FormControl isInvalid={Boolean(error)} sx={formSx}>
			{label && (
				<FormLabel fontWeight='semibold' htmlFor={id}>
					{label}
				</FormLabel>
			)}

			<DynamicInput
				ref={ref}
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
