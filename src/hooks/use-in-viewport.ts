import type { RefObject } from 'react'
import { useEffect, useState } from 'react'

export const useInViewport = <T extends HTMLElement>(ref: RefObject<T>) => {
	const [isInViewport, setIsInViewport] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setIsLoaded(true)
			}

			setIsInViewport(entry?.isIntersecting ?? false)
		})

		if (ref.current) {
			observer.observe(ref.current)
		}
	}, [ref])

	return isInViewport || isLoaded
}

export default useInViewport
