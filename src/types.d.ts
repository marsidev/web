interface ProjectType {
	id: string
	name: string
	description: string
	url: string
	repository: string
	stack: string[]
	images: {
		mobile: string
		desktop: string
	}
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
