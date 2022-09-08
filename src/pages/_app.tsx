import '~/styles/globals.css'
import 'atropos/css'
import type { AppType } from 'next/dist/shared/lib/utils'
import { AnimatePresence } from 'framer-motion'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '~/theme'
import { ScrollToTop } from '~/components/ScrollToTop'
import { useAnalytics } from '~/hooks/use-analytics'

const MyApp: AppType = ({ Component, pageProps, router }) => {
	useAnalytics()

	return (
		<AnimatePresence mode='wait'>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} key={router.pathname} />
				<ScrollToTop />
			</ChakraProvider>
		</AnimatePresence>
	)
}

export default MyApp
