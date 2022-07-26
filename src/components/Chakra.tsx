import type { GetServerSideProps } from 'next'
import {
	ChakraProvider as Provider,
	type ChakraProviderProps as ProviderProps,
	cookieStorageManagerSSR,
	localStorageManager
} from '@chakra-ui/react'
import { theme } from '~/theme'

interface ChakraProviderProps extends ProviderProps {
	cookies?: string
}

export const ChakraProvider: React.FC<ChakraProviderProps> = ({ cookies, children }) => {
	const colorModeManager =
		typeof cookies === 'string'
			? cookieStorageManagerSSR(cookies)
			: localStorageManager

	return (
		<Provider colorModeManager={colorModeManager} theme={theme}>
			{children}
		</Provider>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	return {
		props: {
			cookies: req.headers.cookie ?? ''
		}
	}
}
