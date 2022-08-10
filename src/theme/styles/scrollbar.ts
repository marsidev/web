import { type GlobalStyleProps, mode } from '@chakra-ui/theme-tools'

export const scrollbar = (props: GlobalStyleProps) => ({
	'::-webkit-scrollbar': {
		width: '.40rem'
	},
	'::-webkit-scrollbar-track': {
		background: mode('gray.200', 'gray.400')(props),
		borderRadius: 'none'
	},
	'::-webkit-scrollbar-thumb': {
		background: mode('blackAlpha.400', 'blackAlpha.600')(props),
		borderRadius: 'none'
	},
	'::-webkit-scrollbar-thumb:hover': {
		background: mode('blackAlpha.500', 'blackAlpha.500')(props)
	}
})
