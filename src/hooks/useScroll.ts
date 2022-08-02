import { useEffect, useState } from 'react'

export const useScroll = (offset = 50) => {
	const [hasScrolled, setHasScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			if (window.pageYOffset > offset) setHasScrolled(true)
			else setHasScrolled(false)
		}

		window.addEventListener('scroll', onScroll)
		onScroll()
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return hasScrolled
}

export default useScroll
