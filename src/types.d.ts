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
