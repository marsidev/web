import { useEffect, useState } from 'react'

type ScrollDirection = 'up' | 'down' | null

export const useScrollY = (offset = 0) => {
	const [offsetPassed, setOffsetPassed] = useState(false)
	const [prevScrollPosition, setPrevScrollPosition] = useState(0)
	const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null)

	const listener = () => {
		if (window.scrollY > prevScrollPosition) {
			setScrollDirection('down')
		} else {
			setScrollDirection('up')
		}

		if (window.pageYOffset > offset) {
			setOffsetPassed(true)
		} else {
			setOffsetPassed(false)
		}

		setPrevScrollPosition(window.scrollY)
	}

	useEffect(() => {
		window.addEventListener('scroll', listener)

		return () => {
			window.removeEventListener('scroll', listener)
		}
	}, [listener])

	return {
		scrollPosition: prevScrollPosition,
		offsetPassed,
		scrollDirection
	}
}

export default useScrollY
