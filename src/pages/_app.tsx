import '~/styles/globals.css'
import 'atropos/css'
import type { AppType } from 'next/dist/shared/lib/utils'
import { AnimatePresence } from 'framer-motion'
import { ChakraProvider } from '@chakra-ui/react'
import splitbee from '@splitbee/web'
import { usePanelbear } from '@panelbear/panelbear-nextjs'
import { theme } from '~/theme'
import { ScrollToTop } from '~/components'

process.env.NODE_ENV === 'production' && splitbee.init()

const MyApp: AppType = ({ Component, pageProps, router }) => {
	usePanelbear('IO32G8weAys')
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
