type Merge<P, T> = Omit<P, keyof T> & T

export interface Project {
	id: string
	name: string
	description: string
	url?: string
	repository?: string
	stack: string[]
	images: {
		mobile: string
		desktop: string
	}
	devTime: {
		start: string
		end?: string
	}
	private?: boolean
	challenge?: boolean
	notFinished?: boolean
}

interface Technology {
	id: string
	name: string
	url: string
	icon?: string
}

interface Technologies {
	[key: string]: Technology
}

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
	? Acc[number]
	: Enumerate<N, [...Acc, Acc['length']]>

export type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Lazy = React.LazyExoticComponent<React.ComponentType<any>>
export type LazyPromise = Promise<{ default: React.ComponentType<any> }>
/* eslint-enable @typescript-eslint/no-explicit-any */

export interface ImageSize {
	width: number
	height: number
}

export interface ResponsiveSize {
	mobile: ImageSize
	desktop: ImageSize
}
