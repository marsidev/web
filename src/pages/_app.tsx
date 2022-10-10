import '~/styles/globals.css'
import 'atropos/css'
import 'react-toastify/dist/ReactToastify.css'
import type { AppType } from 'next/dist/shared/lib/utils'
import { AnimatePresence } from 'framer-motion'
import { ChakraProvider } from '@chakra-ui/provider'
import { ToastContainer } from 'react-toastify'
import { theme } from '~/theme'
import { ScrollToTop } from '~/components/ScrollToTop'
import { useAnalytics } from '~/hooks/use-analytics'
import { toastProps } from '~/constants/toast-props'

const MyApp: AppType = ({ Component, pageProps, router }) => {
	useAnalytics()

	return (
		<AnimatePresence mode='wait'>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} key={router.pathname} />
				<ScrollToTop />
				<ToastContainer {...toastProps} />
			</ChakraProvider>
		</AnimatePresence>
	)
}

export default MyApp
