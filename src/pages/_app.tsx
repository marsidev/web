import '~/styles/globals.css'
import 'atropos/css'
import type { AppType } from 'next/dist/shared/lib/utils'
import { AnimatePresence } from 'framer-motion'
import { ChakraProvider } from '@chakra-ui/react'
import splitbee from '@splitbee/web'
import { usePanelbear } from '@panelbear/panelbear-nextjs'
import { useEffect } from 'react'
import { theme } from '~/theme'
import { ScrollToTop } from '~/components/ScrollToTop'

const MyApp: AppType = ({ Component, pageProps, router }) => {
	usePanelbear(process.env.PANELBEAR_ID || '', {
		scriptSrc: '/bear.js',
		analyticsHost: '_bear',
		enabled: process.env.NODE_ENV === 'production'
	})

	useEffect(() => {
		if (process.env.NODE_ENV === 'production') {
			splitbee.init({
				scriptUrl: '/bee.js',
				apiUrl: '/_hive'
			})
		}
	}, [])

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
