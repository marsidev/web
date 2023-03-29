import { useEffect } from 'react'

type ScrollYDirection = 'up' | 'down' | null

export const useCssVars = (scrollDirection: ScrollYDirection) => {
	useEffect(
		function updateScrollDirection() {
			if (scrollDirection) {
				document.documentElement.style.setProperty(
					'--navlink-transform-origin',
					scrollDirection === 'down' ? 'bottom right' : 'bottom left'
				)

				document.documentElement.style.setProperty(
					'--active-navlink-transform-origin',
					scrollDirection === 'down' ? 'bottom left' : 'bottom right'
				)
			}
		},
		[scrollDirection]
	)
}

export default useCssVars
