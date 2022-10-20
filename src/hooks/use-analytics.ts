import splitbee from '@splitbee/web'
import { useEffect } from 'react'

export const useAnalytics = () => {
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
