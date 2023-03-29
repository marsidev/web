export interface Project {
	id: string
	name: string
	description: string
	url?: string
	repository?: string
	stack: string[]
	images?: {
		mobile: string
		desktop: string
	}
	devTime: {
		start: string
		end?: string
	}
	tags: ProjectTag[]
	packageName?: string
}

export type ProjectTag =
	| 'web'
	| 'api'
	| 'cli'
	| 'package'
	| 'bot'
	| 'challenge'
	| 'private'
	| 'unfinished'

export interface Technology {
	id: string
	name: string
	url: string
	icon?: string
}

export interface Technologies {
	[key: string]: Technology
}

export interface ImageSize {
	width: number
	height: number
}

export interface ResponsiveSize {
	mobile: ImageSize
	desktop: ImageSize
}

export type Section = 'none' | 'home' | 'about' | 'projects' | 'contact'
