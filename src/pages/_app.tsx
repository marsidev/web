import '~/styles/globals.css'
import 'atropos/css'
import type { AppType } from 'next/dist/shared/lib/utils'
import { AnimatePresence } from 'framer-motion'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '~/theme'
import { ScrollToTop } from '~/components'
// import { usePanelbear } from '@panelbear/panelbear-nextjs'
// import splitbee from '@splitbee/web'
// process.env.NODE_ENV === 'production' && splitbee.init()

const MyApp: AppType = ({ Component, pageProps, router }) => {
	return (
		<ChakraProvider theme={theme}>
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} key={router.pathname} />
				<ScrollToTop />
			</AnimatePresence>
		</ChakraProvider>
	)
}

export default MyApp
