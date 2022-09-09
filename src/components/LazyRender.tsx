import type { FC, ReactNode } from 'react'

interface LazyRenderProps {
	children: ReactNode
	shouldRender: boolean
}

export const LazyRender: FC<LazyRenderProps> = ({ children, shouldRender }) => {
	if (!shouldRender) return null
	return <>{children}</>
}

export default LazyRender
