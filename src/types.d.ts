interface Project {
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
	private: boolean
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
