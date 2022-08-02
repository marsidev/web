export const containerVariants = {
	exit: {
		opacity: 0,
		transition: { duration: 0.25 }
	},
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: { duration: 0.25 }
	}
}

export const sideVariants = {
	closed: {
		transition: {
			staggerChildren: 0,
			staggerDirection: -1
		}
	},
	open: {
		transition: {
			staggerChildren: 0.025,
			staggerDirection: 1
		}
	}
}

export const navItemVariants = {
	closed: { opacity: 0 },
	open: { opacity: 1 }
}
