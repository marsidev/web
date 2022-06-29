import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { ScaleFade } from '@chakra-ui/react'
import { ChakraProvider } from '@lib/Chakra'

export default function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<ChakraProvider cookies={pageProps.cookies}>
			<ScaleFade key={router.route} in={true} initialScale={0.85}>
				<Component {...pageProps} />
			</ScaleFade>
		</ChakraProvider>
	)
}
