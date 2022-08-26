import type { Project } from '~/types'

export const sortProjects = (p: Project[]) => {
	return p.sort((a, b) => {
		const d1 = new Date(a.devTime.start).getTime()
		const d2 = new Date(b.devTime.start).getTime()
		if (d1 < d2) return 1
		if (d1 > d2) return -1
		return 0
	})
}
