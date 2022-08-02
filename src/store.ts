import { superstate } from '@superstate/core'

export const mobileMenu = {
	state: superstate<boolean>(false),

	close() {
		mobileMenu.state.set(false)
	},

	toggle() {
		mobileMenu.state.set(prev => !prev)
	},

	get() {
		return mobileMenu.state.now()
	}
}
