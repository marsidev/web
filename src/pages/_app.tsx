import '~/styles/globals.css'
import 'atropos/css'
import type { AppType } from 'next/dist/shared/lib/utils'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ChakraProvider } from '~/components/Chakra'

const MyApp: AppType = ({ Component, pageProps, router }) => {
	const [mounted, setMounted] = useState(false)
	useEffect(() => setMounted(true), [])

	return (
		<ChakraProvider cookies={pageProps.cookies}>
			<AnimatePresence exitBeforeEnter>
				{mounted && <Component {...pageProps} key={router.pathname} />}
			</AnimatePresence>
		</ChakraProvider>
	)
}

export default MyApp
