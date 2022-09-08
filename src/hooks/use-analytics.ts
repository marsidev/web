import { usePanelbear } from '@panelbear/panelbear-nextjs'
import splitbee from '@splitbee/web'
import { useEffect } from 'react'

export const useAnalytics = () => {
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
}

export default useAnalytics
