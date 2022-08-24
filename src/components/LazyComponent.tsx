import { FC, PropsWithChildren, useRef } from 'react'
import { useInViewport } from '~/hooks/useInViewport'

export const LazyComponent: FC<PropsWithChildren> = ({ children }) => {
	const childRefContainer = useRef<HTMLDivElement>(null)
	const isRendered = useInViewport(childRefContainer)

	return <div ref={childRefContainer}>{isRendered && children}</div>
}

export default LazyComponent